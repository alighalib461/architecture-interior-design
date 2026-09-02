/* ==========================================================================
   ARCHITECTURE INTERIOR DESIGN — FORM & ESTIMATE MODAL MODULE
   ========================================================================== */

function initForms() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatusMsg');
  const estimateModal = document.getElementById('estimateModal');
  const estimateClose = document.getElementById('estimateClose');
  const openEstimateBtns = document.querySelectorAll('.js-open-estimate');
  const estimateForm = document.getElementById('estimateForm');
  const estimateStatus = document.getElementById('estimateStatusMsg');

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const projectType = document.getElementById('contactType')?.value;
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !phone || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Format WhatsApp prefill text
      const waText = encodeURIComponent(
        `*New Inquiry from Website*\n` +
        `• Name: ${name}\n` +
        `• Phone: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Project Type: ${projectType || 'General Inquiry'}\n` +
        `• Message: ${message}`
      );

      // Show instant feedback
      if (formStatus) {
        formStatus.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your inquiry has been received. Our team will contact you within 24 business hours. You can also chat directly on WhatsApp.
        `;
        formStatus.classList.add('is-success');
        formStatus.style.display = 'block';
      }

      // Reset form
      contactForm.reset();

      // Ask if user wants to also open WhatsApp directly
      setTimeout(() => {
        const directWA = confirm('Inquiry recorded! Would you like to open WhatsApp directly with your message?');
        if (directWA) {
          window.open(`https://wa.me/923333001231?text=${waText}`, '_blank');
        }
      }, 400);
    });
  }

  // Estimate Modal Open Handlers
  openEstimateBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openEstimateModal();
    });
  });

  function openEstimateModal() {
    if (!estimateModal) return;
    estimateModal.classList.add('is-active');
    document.body.classList.add('no-scroll');
  }

  function closeEstimateModal() {
    if (!estimateModal) return;
    estimateModal.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }

  if (estimateClose) {
    estimateClose.addEventListener('click', closeEstimateModal);
  }

  if (estimateModal) {
    estimateModal.addEventListener('click', (e) => {
      if (e.target === estimateModal) {
        closeEstimateModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && estimateModal && estimateModal.classList.contains('is-active')) {
      closeEstimateModal();
    }
  });

  // Estimate Form Submission
  if (estimateForm) {
    estimateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('estName')?.value.trim();
      const phone = document.getElementById('estPhone')?.value.trim();
      const service = document.getElementById('estService')?.value;
      const size = document.getElementById('estSize')?.value.trim();
      const timeline = document.getElementById('estTimeline')?.value;
      const details = document.getElementById('estDetails')?.value.trim();

      const waText = encodeURIComponent(
        `*Project Consultation Request*\n` +
        `• Name: ${name}\n` +
        `• Contact: ${phone}\n` +
        `• Service Required: ${service}\n` +
        `• Approximate Area: ${size || 'Not Specified'}\n` +
        `• Target Timeline: ${timeline || 'Flexible'}\n` +
        `• Notes: ${details || 'None'}`
      );

      if (estimateStatus) {
        estimateStatus.innerHTML = `
          <strong>Thank you, ${name}!</strong> Your project consultation request has been submitted. Opening WhatsApp to connect with our design lead...
        `;
        estimateStatus.classList.add('is-success');
        estimateStatus.style.display = 'block';
      }

      setTimeout(() => {
        window.open(`https://wa.me/923333001231?text=${waText}`, '_blank');
        estimateForm.reset();
        closeEstimateModal();
      }, 1200);
    });
  }
}

window.initForms = initForms;
