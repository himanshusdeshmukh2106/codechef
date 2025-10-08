document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    
    registerBtn.addEventListener('click', function() {
        alert('Registration form will open here!');
        // You can add your registration logic here
        // For example: window.location.href = 'registration-page.html';
    });
    
    registerBtn.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease';
    });
    
    registerBtn.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});
