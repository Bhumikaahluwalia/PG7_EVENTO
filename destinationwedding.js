<script>
function calculateCost() {
    // Get the value of the guest count input
    const guestCount = document.getElementById('guestCount').value;

    // Check if the input is a valid number
    if (!guestCount || guestCount <= 0) {
        alert("Please enter a valid number of guests.");
        return; // Exit the function if invalid input
    }

    const costPerGuest = 200; // Example cost per guest
    const totalCost = guestCount * costPerGuest;

    // Display the estimated cost
    document.getElementById('calculatedCost').innerText = Estimated Cost: ₹${totalCost};

    // Store the estimated cost in local storage
    localStorage.setItem('estimatedCost', totalCost);
}

// Function to retrieve and display the stored estimated cost when the page loads
window.onload = function() {
    const storedCost = localStorage.getItem('estimatedCost');
    if (storedCost) {
        document.getElementById('calculatedCost').innerText = Estimated Cost: ₹${storedCost};
    }
}
</script>
<!-- Countdown Timer Section -->
<div class="section" id="countdown">
    <h2>Countdown to Your Wedding</h2>
    <p class="countdown" id="countdownTimer"></p>
</div>


<button onclick="scrollToTop()" id="scrollTopBtn" title="Go to top">↑</button>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Countdown Timer
    const weddingDate = new Date("2024-12-31T00:00:00").getTime(); // Set your wedding date here

    const countdownTimer = document.getElementById("countdownTimer");
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownTimer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            countdownTimer.innerHTML = "The wedding has started!";
        }
    }, 1000);
    

    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>