document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');

    carouselItems.forEach(item => {
        // When mouse enters, create and show the "Case Study" button
        item.addEventListener('mouseenter', function() {
            if (!this.querySelector('.case-study-btn')) {
                const btn = document.createElement('button');
                btn.textContent = "Case Study";
                btn.className = "case-study-btn";
                // When the button is clicked, navigate to the URL
                btn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent double firing
                    const url = item.getAttribute('data-case-study');
                    if(url) {
                        window.location.href = url;
                    }
                });
                this.appendChild(btn);
            }
            this.style.cursor = "pointer";
        });

        // When mouse leaves, remove the button
        item.addEventListener('mouseleave', function() {
            const btn = this.querySelector('.case-study-btn');
            if(btn) {
                btn.remove();
            }
            this.style.cursor = "default";
        });

        // Optionally, clicking the carousel item itself (outside the button)
        // can also navigate to the case study.
        item.addEventListener('click', function() {
            const url = this.getAttribute('data-case-study');
            if(url) {
                window.location.href = url;
            }
        });
    });
});


/*carouselItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        if (!this.querySelector('.case-study-btn')) {
            // Create "Case Study" button
            const btn = document.createElement('button');
            btn.textContent = "Case Study";
            btn.className = "case-study-btn";
            
            // Create GitHub icon link
            const githubLink = document.createElement('a');
            githubLink.href = item.getAttribute('data-github'); // Set GitHub repo URL
            githubLink.target = "_blank"; // Open in a new tab
            githubLink.className = "github-icon";
            githubLink.innerHTML = '<i class="fab fa-github"></i>'; // FontAwesome icon

            // Handle case study button click
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const url = item.getAttribute('data-case-study');
                if (url) {
                    window.location.href = url;
                }
            });

            // Append elements
            const container = document.createElement('div');
            container.className = "case-study-container";
            container.appendChild(btn);
            container.appendChild(githubLink);
            this.appendChild(container);
        }
        this.style.cursor = "pointer";
    });

    item.addEventListener('mouseleave', function() {
        const container = this.querySelector('.case-study-container');
        if (container) {
            container.remove();
        }
        this.style.cursor = "default";
    });

    item.addEventListener('click', function() {
        const url = this.getAttribute('data-case-study');
        if (url) {
            window.location.href = url;
        }
    });
});*/


document.addEventListener("DOMContentLoaded", function() {
    // Select all cards inside the cardcontainer
    const cards = document.querySelectorAll('.cardcontainer .card');
    // Get the fixed image element
    const fixedImg = document.getElementById('fixedImage');
    // Define the default image URL (optional)
    const defaultImg = 'default-image.jpg'; // adjust this as needed
  
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        const newSrc = card.getAttribute('data-img');
        if (newSrc) {
          fixedImg.src = newSrc;
        }
        card.style.cursor = 'pointer';
      });
  
      card.addEventListener('mouseleave', function() {
        fixedImg.src = defaultImg;
      });
    });
  });
  


  
