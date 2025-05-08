// باز/بسته کردن منوی موبایل
export function toggleMobileMenu(buttonSelector, menuSelector) {
  const btn = document.querySelector(buttonSelector);
  const menu = document.querySelector(menuSelector);
  btn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });
}

// نمایش/پنهان مودال تماس
export function initContactModal(triggerSelector, modalSelector) {
  const trigger = document.querySelector(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const closeBtn = modal.querySelector('.modal__close');
  trigger.addEventListener('click', () => modal.classList.add('is-visible'));
  closeBtn.addEventListener('click', () => modal.classList.remove('is-visible'));
}
