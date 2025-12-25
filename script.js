// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.feature-card, .testimonial-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Interactive spotlight demo
const demoSpotlight = document.querySelector('.demo-spotlight');
if (demoSpotlight) {
    const mockupContent = document.querySelector('.mockup-content');
    mockupContent.addEventListener('mousemove', (e) => {
        const rect = mockupContent.getBoundingClientRect();
        const x = e.clientX - rect.left - 100;
        const y = e.clientY - rect.top - 100;
        demoSpotlight.style.transform = `translate(${x}px, ${y}px)`;
        demoSpotlight.style.animation = 'none';
    });
    
    mockupContent.addEventListener('mouseleave', () => {
        demoSpotlight.style.transform = '';
        demoSpotlight.style.animation = 'pulse 3s ease-in-out infinite';
    });
}

// Download button click tracking (optional analytics placeholder)
document.querySelectorAll('a[download]').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Download initiated');
        // Add analytics tracking here if needed
    });
});

console.log('✨ Focus Filter - See Only What Matters');
