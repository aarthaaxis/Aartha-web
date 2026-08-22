/**
 * Aartha Axis - Static Form Handler & Mailto Integration
 */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const company = document.getElementById('form-company')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const service = document.getElementById('form-service')?.value;
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please complete all required fields (Name, Email, Message).');
        return;
      }

      // Static fallback using structured mailto
      const subject = encodeURIComponent(`Growth Inquiry: ${name} (${company || 'Organization'})`);
      const body = encodeURIComponent(
        `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nService of Interest: ${service}\n\nBusiness Challenge / Details:\n${message}`
      );

      window.location.href = `mailto:lalitrajjoshi@aarthaaxis.com?subject=${subject}&body=${body}`;
    });
  }
});