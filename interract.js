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

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = dots.length;

    // ฟังก์ชันสำหรับเลื่อนไปยังสไลด์ที่ต้องการ
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const offset = -currentSlide * (100 / totalSlides);
        slides.style.transform = `translateX(${offset}%)`;
        
        // อัพเดทสถานะของ dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // ปุ่มเลื่อนไปสไลด์ถัดไป
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    // ปุ่มเลื่อนไปสไลด์ก่อนหน้า
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // เพิ่ม Event Listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // เพิ่ม Event Listeners สำหรับ dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // เลื่อนสไลด์อัตโนมัติทุก 5 วินาที
    setInterval(nextSlide, 5000);
});
