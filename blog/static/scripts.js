document.addEventListener("DOMContentLoaded", function() {
    var postCards = document.querySelectorAll('.post-card');
  
    postCards.forEach(function(card) {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      });
  
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      });
    });
  });