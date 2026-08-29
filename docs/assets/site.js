(() => {
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
      availability.textContent = 'Open the published HTTPS page before connecting the device.';
    } else if (!state.serial) {
      availability.className = 'error';
      availability.textContent = 'Use a current desktop version of Chrome or Edge for USB installation.';
    } else if (!state.confirmed) {
      availability.className = '';
      availability.textContent = 'Confirm the processor and backup check above to unlock the installer.';
    } else {
      availability.className = '';
      availability.textContent = 'Ready. Select the port that you verified as the ESP32-S3.';
    }
  }

  setCheck(secureStatus, state.secure, 'Ready', 'HTTPS required');
  setCheck(serialStatus, state.serial, 'Supported', 'Chrome or Edge required');
  confirmation.addEventListener('change', () => {
    state.confirmed = confirmation.checked;
    renderInstallerState();
  });

  fetch('release.json', { cache: 'no-store' })
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

      setCheck(firmwareStatus, state.releaseReady, 'Verified', 'Unavailable');
      if (state.releaseReady) {
        installer.setAttribute('manifest', release.manifest);
      } else {
        installer.hidden = true;
        pendingButton.hidden = false;
        availability.className = 'error';
        availability.textContent = 'No signed firmware release is currently available.';
      }
      renderInstallerState();
    })
    .catch(error => {
      state.releaseReady = false;
      installer.hidden = true;
      pendingButton.hidden = false;
      setCheck(firmwareStatus, false, 'Verified', 'Unavailable');
      availability.className = 'error';
      availability.textContent = 'Release metadata could not be loaded: ' + error.message;
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
