function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
      function toggleReadMore(button) {
              var projectCategory = button.parentElement.querySelector('.project-category');
              var isExpanded = projectCategory.classList.toggle('expanded');
  
              if (isExpanded) {
                  button.innerText = 'Read Less';
                  projectCategory.style.maxHeight = 'none'; // Remove the max-height restriction
              } else {
                  button.innerText = 'Read More';
                  projectCategory.style.maxHeight = '50px'; // Set the max height back
              }
          }
  
