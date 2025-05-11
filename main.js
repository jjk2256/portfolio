document.addEventListener('DOMContentLoaded', function() {
  // You can add interactive elements here
  
  // Example: Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example: Hover effects for projects
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
      // Add hover effects beyond CSS
      this.style.transform = 'scale(1.02)';
    });
    
    project.addEventListener('mouseleave', function() {
      // Remove hover effects
      this.style.transform = 'scale(1)';
    });
  });
  
  // More interactive elements can be added as needed
});