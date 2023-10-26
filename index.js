window.addEventListener('DOMContentLoaded', (event) => {
    const yearElement = document.getElementById('copyrightYear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

const phoneCallTab = document.querySelector('.phone-call-tab');

phoneCallTab.addEventListener('click', () => {
  // Replace the phone number with your desired phone number
  const phoneNumber = '+15551234567';

  // Open the phone app with the specified number
  window.location.href = `tel:${phoneNumber}`;
});