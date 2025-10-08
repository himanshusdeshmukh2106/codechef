document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    
    registerBtn.addEventListener('click', function() {
        window.open('https://forms.gle/hNsLQmbMhdpNnS2h6', '_blank');
    });
    
    registerBtn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease';
    });
    
    registerBtn.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});
