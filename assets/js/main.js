import { toggleMobileMenu, initContactModal } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  toggleMobileMenu('#mobile-menu-btn', '#main-nav');
  initContactModal('#contact-open', '#contact-modal');
});

// بهینه‌سازی: defer در تگ <script> و لود غیرهم‌زمان
