// Dropdown Menus
document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', () => {
      const menu = drop.querySelector('.dropdown-menu');
      menu.style.display = 'block';
    });
    drop.addEventListener('mouseleave', () => {
      const menu = drop.querySelector('.dropdown-menu');
      menu.style.display = 'none';
    });
  });
  
  // Mobile Navigation Toggle
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Signup Modal Functionality
  const signupBtns = document.querySelectorAll('.signup-btn');
  const modal = document.getElementById('signup-modal');
  const closeBtn = document.querySelector('.close-btn');
  signupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Form Submission Handlers
  const signupForm = document.querySelector('.signup-form');
  signupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account successfully created!');
    signupForm.reset();
  });
  
  const modalSignupForm = document.querySelector('.modal-signup-form');
  modalSignupForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Welcome to GameGraphix!');
    modalSignupForm.reset();
    modal.style.display = 'none';
  });
  
  const contactForm = document.querySelector('.contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Our team will get back to you soon.');
    contactForm.reset();
  });
  
  // Testimonial Slider (Auto-rotate)
  let currentSlide = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  setInterval(() => {
    testimonials[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
  }, 5000);
  
  // Animate Cards on Scroll
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(card => {
      const pos = card.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
      }
    });
  });
  