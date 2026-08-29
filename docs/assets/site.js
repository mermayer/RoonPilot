(() => {
  const german = document.documentElement.lang.toLowerCase().startsWith('de');
  const releaseBase = document.documentElement.dataset.releaseBase || '';
  const copy = german ? {
    httpsRequired: 'Bitte die veröffentlichte HTTPS-Seite öffnen, bevor das Gerät verbunden wird.',
    chromiumRequired: 'Für die USB-Installation ist ein aktueller Chromium-Desktopbrowser mit Web Serial erforderlich.',
    confirmHardware: 'Bitte oben die Prüfung von Prozessor und Sicherung bestätigen, um den Installer freizuschalten.',
    ready: 'Bereit. Bitte den zuvor als ESP32-S3 geprüften Anschluss auswählen.',
    secureOk: 'Bereit', secureBad: 'HTTPS erforderlich',
    serialOk: 'Unterstützt', serialBad: 'Chromium erforderlich',
    verified: 'Geprüft', unavailable: 'Nicht verfügbar',
    noRelease: 'Derzeit ist keine signierte Firmware-Version verfügbar.',
    metadataError: 'Die Versionsinformationen konnten nicht geladen werden: '
  } : {
    httpsRequired: 'Open the published HTTPS page before connecting the device.',
    chromiumRequired: 'Use a current desktop Chromium browser with Web Serial for USB installation.',
    confirmHardware: 'Confirm the processor and backup check above to unlock the installer.',
    ready: 'Ready. Select the port that you verified as the ESP32-S3.',
    secureOk: 'Ready', secureBad: 'HTTPS required',
    serialOk: 'Supported', serialBad: 'Chromium required',
    verified: 'Verified', unavailable: 'Unavailable',
    noRelease: 'No signed firmware release is currently available.',
    metadataError: 'Release metadata could not be loaded: '
  };
  const installer = document.getElementById('installer');
  const installButton = document.getElementById('install-button');
  const pendingButton = document.getElementById('pending');
  const confirmation = document.getElementById('hardware-confirm');
  const availability = document.getElementById('availability');
  const version = document.getElementById('version');
  const secureStatus = document.getElementById('secure-status');
  const serialStatus = document.getElementById('serial-status');
  const firmwareStatus = document.getElementById('firmware-status');

  const state = {
    secure: window.isSecureContext === true,
    serial: 'serial' in navigator,
    releaseReady: false,
    confirmed: false
  };

  function setCheck(element, ok, successText, failureText) {
    element.textContent = ok ? successText : failureText;
    element.className = 'check ' + (ok ? 'ok' : 'error');
  }

  function renderInstallerState() {
    const environmentReady = state.secure && state.serial && state.releaseReady;
    installButton.disabled = !(environmentReady && state.confirmed);

    if (!state.releaseReady) return;
    if (!state.secure) {
      availability.className = 'error';
      availability.textContent = copy.httpsRequired;
    } else if (!state.serial) {
      availability.className = 'error';
      availability.textContent = copy.chromiumRequired;
    } else if (!state.confirmed) {
      availability.className = '';
      availability.textContent = copy.confirmHardware;
    } else {
      availability.className = '';
      availability.textContent = copy.ready;
    }
  }

  setCheck(secureStatus, state.secure, copy.secureOk, copy.secureBad);
  setCheck(serialStatus, state.serial, copy.serialOk, copy.serialBad);
  confirmation.addEventListener('change', () => {
    state.confirmed = confirmation.checked;
    renderInstallerState();
  });

  fetch(releaseBase + 'release.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json();
    })
    .then(release => {
      if (release.version) version.textContent = 'Version ' + release.version;
      state.releaseReady =
        release.available === true &&
        release.signed === true &&
        typeof release.manifest === 'string' &&
        release.manifest.length > 0;

      setCheck(firmwareStatus, state.releaseReady, copy.verified, copy.unavailable);
      if (state.releaseReady) {
        installer.setAttribute('manifest', releaseBase + release.manifest);
      } else {
        installer.hidden = true;
        pendingButton.hidden = false;
        availability.className = 'error';
        availability.textContent = copy.noRelease;
      }
      renderInstallerState();
    })
    .catch(error => {
      state.releaseReady = false;
      installer.hidden = true;
      pendingButton.hidden = false;
      setCheck(firmwareStatus, false, copy.verified, copy.unavailable);
      availability.className = 'error';
      availability.textContent = copy.metadataError + error.message;
    });

  const navigationLinks = [...document.querySelectorAll('.site-header nav a')];
  const observedSections = navigationLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navigationLinks.forEach(link => {
        const active = link.getAttribute('href') === '#' + visible.target.id;
        link.toggleAttribute('aria-current', active);
      });
    }, { rootMargin: '-25% 0px -65% 0px', threshold: [0, 0.2, 0.6] });
    observedSections.forEach(section => observer.observe(section));
  }
})();
