
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dotsContainer = document.getElementById("dots-container");
            dotsContainer.innerHTML = ""; // Clear existing dots

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                var dot = document.createElement("span");
                dot.className = "dot";
                dot.setAttribute("onclick", "currentSlide(" + (i + 1) + ")");
                dotsContainer.appendChild(dot);
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].style.display = "block";
            dotsContainer.children[slideIndex - 1].className += " active";

            // setTimeout(showSlides, 2000); // Commented out automatic slideshow
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        // Uncomment the line below if you want to enable automatic slideshow
        setInterval(showSlides, 2000);
    