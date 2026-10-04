(() => {
  'use strict';

  const installer = document.getElementById('firmwareInstaller');
  const installButton = document.getElementById('installButton');
  const hardwareConfirm = document.getElementById('hardwareConfirm');
  const licenseConfirm = document.getElementById('licenseConfirm');
  const recoveryConfirm = document.getElementById('recoveryConfirm');
  const recoveryNotice = document.getElementById('recoveryNotice');
  const recoveryConfirmation = document.getElementById('recoveryConfirmation');
  const selectedFirmware = document.getElementById('selectedFirmware');
  const choices = Array.from(document.querySelectorAll('input[name="firmwareVersion"]'));
  const languageLinks = Array.from(document.querySelectorAll('[data-installer-language]'));
  const german = document.documentElement.lang === 'de';
  const currentVersion = installer.dataset.currentVersion;
  const manifests = {
    current: installer.getAttribute('manifest'),
    '1.0.2': installer.dataset.recoveryManifest,
  };
  const originalLanguageLinks = new Map(languageLinks.map(link => [link, link.href]));
  const requestedVersion = new URLSearchParams(window.location.search).get('version');
  let invalidVersion = requestedVersion !== null && !Object.hasOwn(manifests, requestedVersion);
  let ready = Boolean(customElements.get('esp-web-install-button'));

  function updateGate() {
    const recovery = choices.find(choice => choice.checked).value === '1.0.2';
    installButton.disabled = !ready || invalidVersion || !hardwareConfirm.checked ||
      !licenseConfirm.checked || (recovery && !recoveryConfirm.checked);
  }

  function updateTarget() {
    const version = choices.find(choice => choice.checked).value;
    const recovery = version === '1.0.2';
    installer.setAttribute('manifest', manifests[version]);
    if (ready) {
      installer.manifest = manifests[version];
      // Both choices install complete Factory images. Always erase, including
      // reinstalls and changes from another RoonPilot version. Do not let an
      // Improv identity turn this into an in-place, no-erase installation.
      installer.overrides = { checkSameFirmware: () => false };
    }
    recoveryNotice.hidden = !recovery;
    recoveryConfirmation.hidden = !recovery;
    selectedFirmware.textContent = invalidVersion
      ? (german ? 'Diese Version wird hier nicht angeboten. Bitte eine der beiden Optionen auswählen.'
        : 'This version is not offered here. Please select one of the two options.')
      : recovery
        ? (german ? 'Gewählt: RoonPilot 1.0.2 · vollständige Wiederherstellung mit Löschen'
          : 'Selected: RoonPilot 1.0.2 · clean recovery with erase')
        : (german ? `Gewählt: RoonPilot ${currentVersion} · saubere USB-Installation mit Löschen`
          : `Selected: RoonPilot ${currentVersion} · clean USB installation with erase`);
    installButton.textContent = recovery
      ? (german ? 'RoonPilot 1.0.2 wiederherstellen' : 'Restore RoonPilot 1.0.2')
      : (german ? `RoonPilot ${currentVersion} installieren` : `Install RoonPilot ${currentVersion}`);
    for (const link of languageLinks) {
      const url = new URL(originalLanguageLinks.get(link));
      if (invalidVersion) url.searchParams.set('version', requestedVersion);
      else if (recovery) url.searchParams.set('version', '1.0.2');
      if (recovery) url.hash = 'web-installer-title';
      link.href = url.href;
    }
    updateGate();
  }

  if (requestedVersion === '1.0.2') {
    choices.find(choice => choice.value === '1.0.2').checked = true;
  }
  for (const choice of choices) {
    choice.addEventListener('change', () => {
      invalidVersion = false;
      hardwareConfirm.checked = false;
      recoveryConfirm.checked = false;
      const url = new URL(window.location.href);
      if (choice.value === '1.0.2') url.searchParams.set('version', '1.0.2');
      else url.searchParams.delete('version');
      window.history.replaceState(null, '', url.href);
      updateTarget();
    });
  }
  for (const confirmation of [hardwareConfirm, licenseConfirm, recoveryConfirm]) {
    confirmation.addEventListener('change', updateGate);
  }
  window.addEventListener('pageshow', updateTarget);
  updateTarget();
  customElements.whenDefined('esp-web-install-button').then(() => {
    ready = true;
    updateTarget();
  });
})();
