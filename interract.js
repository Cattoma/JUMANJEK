// เพิ่มเอฟเฟกต์ Parallax ที่ Hero Section
document.addEventListener('mousemove', (e) => {
    const heroContent = document.querySelector('.hero-content');
    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;
    
    heroContent.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

// เพิ่มเอฟเฟกต์ Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// เพิ่มเอฟเฟกต์ Navbar เมื่อเลื่อนหน้า
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.background = 'rgba(15, 25, 35, 0.9)';
    } else if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(15, 25, 35, 0.95)';
    }
    lastScroll = currentScroll;
});

// เพิ่มเอฟเฟกต์ Reveal เมื่อเลื่อนถึง
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach((el) => observer.observe(el));

// เพิ่มเอฟเฟกต์ Hover ที่ปุ่ม
document.querySelectorAll('.btn-primary, .btn-play').forEach(button => {
    button.addEventListener('mouseover', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});
