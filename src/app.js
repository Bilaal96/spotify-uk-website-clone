const navToggle = document.querySelector('.nav-toggle');
const navToggleIcon = document.querySelector('.hamburger');
const navDrawer = document.querySelector('.nav-menu');
const bgOverlay = document.querySelector('.bg-overlay');

// Support Category Accordions
const supportAccordionToggles = document.querySelectorAll('.category-heading');

// prevent animations on window resize
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  // clear previous timer
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});

// toggle nav drawer
navToggle.addEventListener('click', (e) => {
  const isNavClosed = navDrawer.getAttribute('data-visible') === 'false';

  if (isNavClosed) {
    // Open nav drawer & bg-overlay
    openNav();
  } else {
    // Close nav drawer & bg-overlay
    closeNav();
  }
});

// Close nav on overlay click
bgOverlay.addEventListener('click', () => {
  const isNavOpen = navDrawer.getAttribute('data-visible') === 'true';

  // Close nav drawer & bg-overlay
  if (isNavOpen) {
    closeNav();
  }
});

function openNav() {
  navDrawer.setAttribute('data-visible', true);
  bgOverlay.setAttribute('data-visible', true);
  navToggle.setAttribute('data-toggle', 'open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navDrawer.setAttribute('data-visible', false);
  bgOverlay.setAttribute('data-visible', false);
  navToggle.setAttribute('data-toggle', 'closed');
  document.body.style.overflow = 'auto';
}

// Support Page - Listen for click on each Accordion toggle
supportAccordionToggles.forEach((accordionToggle) =>
  accordionToggle.addEventListener('click', (e) => {
    // Only process click event if screen width is 991px or less
    if (window.matchMedia('(max-width: 991px)').matches === false) return;

    const accordionBody = e.target.nextElementSibling;
    const accordionToggleChevron = accordionToggle.querySelector('.chevron');

    // Expand accordion body
    accordionBody.classList.toggle('expand');

    // Control aria-expanded attribute for accordionToggle
    // NOTE: If aria-expanded == true, chevron icon is rotated 180deg
    if (accordionBody.classList.contains('expand')) {
      accordionToggle.setAttribute('aria-expanded', 'true');
      accordionToggleChevron.setAttribute('aria-expanded', 'true');
    } else {
      accordionToggle.setAttribute('aria-expanded', 'false');
      accordionToggleChevron.setAttribute('aria-expanded', 'false');
    }
  })
);
