
    <script>
        // Show or hide the back to top button based on scroll position
        window.onscroll = function () {
            const button = document.getElementById('backToTopBtn');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        };

        // Scroll to the top of the page
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }


        // JavaScript to toggle FAQ answers
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        
        // Toggle the display of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
        
        // Change button appearance when active
        question.classList.toggle("active");
    });
});


    </script>
    
