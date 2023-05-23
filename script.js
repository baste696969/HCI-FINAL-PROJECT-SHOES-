document.addEventListener('DOMContentLoaded', function() {
  ''
    var shopNowLink = document.querySelector('section:first-of-type a');
  
    shopNowLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      alert('You clicked on "Shop Now"!'); 
      
    });
  
    var buyNowLinks = document.querySelectorAll('section:nth-of-type(2) a');
  
    buyNowLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var productName = this.previousElementSibling.textContent; 
        alert('You clicked on "Buy Now" for ' + productName + '!'); 
        
      });
    });
  
    var contactForm = document.querySelector('form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      var name = document.getElementById('name').value; 
      var email = document.getElementById('email').value; 
      var message = document.getElementById('message').value; 
      alert('Form submitted:\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message); 
      contactForm.reset(); 
    });
  });