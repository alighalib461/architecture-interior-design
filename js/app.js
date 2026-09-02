/* ==========================================================================
   ARCHITECTURE INTERIOR DESIGN — MAIN APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initDynamicWhatsApp();
  
  if (typeof window.initAnimations === 'function') {
    window.initAnimations();
  }
  
  if (typeof window.initPortfolio === 'function') {
    window.initPortfolio();
  }
  
  if (typeof window.initForms === 'function') {
    window.initForms();
  }
});

function initNavigation() {
  const header = document.getElementById('siteHeader');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 1. Sticky Header on Scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Drawer Toggle
  function openDrawer() {
    menuToggle.classList.add('is-open');
    mobileDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    menuToggle.classList.remove('is-open');
    mobileDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  // 3. Smooth Navigation & Close Drawer on Click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          closeDrawer();
          const headerHeight = header.offsetHeight || 80;
          const targetPos = targetSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 10);
          
          window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 4. Active Navigation Scroll-Spy
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
}

/* ==========================================================================
   DYNAMIC WHATSAPP POPUP & ATTENTION CONTROLLER
   ========================================================================== */

function initDynamicWhatsApp() {
  const waMainBtn = document.getElementById('waMainBtn');
  const waPopupCard = document.getElementById('waPopupCard');
  const waPopupCloseBtn = document.getElementById('waPopupCloseBtn');
  const waChips = document.querySelectorAll('.js-wa-chip');
  const waUnreadBadge = document.getElementById('waUnreadBadge');
  
  if (!waMainBtn || !waPopupCard) return;

  let isDismissedByUser = false;
  let reEngagementTimer = null;

  // 1. Initial Attention Popup (opens after 3.2s on page load)
  setTimeout(() => {
    if (!isDismissedByUser) {
      showWaPopup();
    }
  }, 3200);

  // 2. Periodic Attention Wiggle (every 7 seconds)
  setInterval(() => {
    waMainBtn.classList.add('is-wiggling');
    setTimeout(() => {
      waMainBtn.classList.remove('is-wiggling');
    }, 900);
  }, 7000);

  // 3. Toggle Popup on Main Button Click
  waMainBtn.addEventListener('click', () => {
    if (waPopupCard.classList.contains('is-visible')) {
      hideWaPopup();
      isDismissedByUser = true;
    } else {
      showWaPopup();
      isDismissedByUser = false;
    }
  });

  // 4. Close / Minimize Button
  if (waPopupCloseBtn) {
    waPopupCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideWaPopup();
      isDismissedByUser = true;

      // Plan a re-engagement popup after 16 seconds to re-attract customer attention
      clearTimeout(reEngagementTimer);
      reEngagementTimer = setTimeout(() => {
        isDismissedByUser = false;
        showWaPopup();
        triggerAttentionBounce();
      }, 16000);
    });
  }

  // 5. Quick Inquiry Chips Handling
  waChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const customMsg = chip.getAttribute('data-msg');
      const url = `https://wa.me/923333001231?text=${encodeURIComponent(customMsg)}`;
      window.open(url, '_blank');
      hideWaPopup();
    });
  });

  function showWaPopup() {
    waPopupCard.classList.add('is-visible');
    triggerAttentionBounce();
  }

  function hideWaPopup() {
    waPopupCard.classList.remove('is-visible');
  }

  function triggerAttentionBounce() {
    waMainBtn.classList.add('is-wiggling');
    setTimeout(() => {
      waMainBtn.classList.remove('is-wiggling');
    }, 900);
  }

  // 6. Scroll Trigger: Re-trigger attention when user reaches major milestones
  let scrollTriggerFired = false;
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 45 && !scrollTriggerFired) {
      scrollTriggerFired = true;
      if (!waPopupCard.classList.contains('is-visible')) {
        showWaPopup();
      }
    }
  }, { passive: true });
}
