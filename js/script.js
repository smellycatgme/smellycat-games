// Form submission handler
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formMessage = document.getElementById('form-message');
  
  // Get form values
  const email = this.querySelector('input[type="email"]').value;
  const name = this.querySelector('input[type="text"]').value;
  const interest = this.querySelector('select').value;
  
  // Simple validation
  if (!email || !name || !interest) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.classList.remove('success');
    formMessage.classList.add('error');
    return;
  }
  
  // Simulate form submission
  formMessage.textContent = 'Signing you up... Please wait.';
  formMessage.classList.remove('error');
  formMessage.classList.add('success');
  
  // Simulate API call
  setTimeout(() => {
    // In production, this would send data to a backend server
    console.log('Form submitted:', {
      email: email,
      name: name,
      interest: interest,
      timestamp: new Date().toISOString()
    });
    
    formMessage.textContent = '✓ Welcome to Smelly Cat Games! Check your email for details.';
    formMessage.classList.add('success');
    
    // Reset form
    this.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.classList.remove('success');
    }, 5000);
  }, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature cards, community cards, and token cards
document.querySelectorAll('.feature-card, .community-card, .token-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Mobile menu toggle (for future enhancement)
function setupMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (window.innerWidth <= 768) {
    // Add mobile menu logic here if needed
  }
}

window.addEventListener('resize', setupMobileMenu);
setupMobileMenu();

// Log page load
console.log('🐱 Welcome to Smelly Cat Games!');
console.log('Page loaded successfully at', new Date().toLocaleString());
