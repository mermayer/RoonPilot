// Static website previews only; no device connection, credentials or control commands.
(() => {
  const buttons = [...document.querySelectorAll('[data-model-preview]')];
  if (!buttons.length) return;
  const german = document.documentElement.lang.startsWith('de');
  const dialog = document.createElement('dialog');
  dialog.className = 'model-dialog';
  dialog.setAttribute('aria-labelledby', 'model-preview-title');
  const header = document.createElement('div');
  header.className = 'model-dialog-head';
  const caption = document.createElement('p');
  caption.id = 'model-preview-title';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'button secondary';
  close.textContent = german ? 'Schließen' : 'Close';
  const image = document.createElement('img');
  image.alt = '';
  header.append(caption, close);
  dialog.append(header, image);
  document.body.append(dialog);
  let opener;
  buttons.forEach(button => button.addEventListener('click', () => {
    opener = button;
    const preview = button.querySelector('img');
    const card = button.closest('.model-card');
    caption.textContent = card.querySelector('strong').textContent + ' · ' + card.querySelector('.model-filename').textContent;
    image.src = preview.currentSrc || preview.src;
    image.alt = preview.alt;
    dialog.showModal();
  }));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus({ preventScroll: true }));
})();
