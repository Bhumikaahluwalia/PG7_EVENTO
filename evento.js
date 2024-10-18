let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showItem(index) {
  items.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showItem(currentIndex);
  });
});

showItem(currentIndex);

let countersInitialized = false;

function toggleCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!countersInitialized) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCounter = () => {
                const currentValue = +counter.innerText;
                const increment = target / 200; // Adjust the speed of increment

                if (currentValue < target) {
                    counter.innerText = Math.ceil(currentValue + increment);
                    setTimeout(updateCounter, 30); // Speed of increment
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
        countersInitialized = true;
    }
}

// Function to handle the form submission asynchronously
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Store the form data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Simulate an asynchronous operation (e.g., sending data to a server)
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay

    // Show a success message
    alert("Thank you for your submission, " + name + "!");
}

// Attach the event listener to the submit button
document.getElementById("footerSubmitButton").addEventListener("click", handleFormSubmit);

// Web Storage added here to store guest count
window.onload = function() {
  // Check if guest count is stored in localStorage
  if (localStorage.getItem("guestCount")) {
    document.getElementById('guestCount').value = localStorage.getItem("guestCount");
    calculateCost(); // Calculate the cost with stored value
  }
}

function calculateCost() {
  const guestCount = document.getElementById('guestCount').value;
  const costPerGuest = 200; // Example cost per guest
  const totalCost = guestCount * costPerGuest;

  // Store guest count in localStorage
  localStorage.setItem("guestCount", guestCount);

  document.getElementById('calculatedCost').innerText = `Estimated Cost: ₹${totalCost}`;
}

// Removing duplicate code while keeping all logic intact
