document.addEventListener("DOMContentLoaded", () => {
    const weatherApiKey = 'eec46b46aefbdb0abe6b4168e3f21cf8'; // Ensure this is a valid API key

    document.getElementById('getWeather').addEventListener('click', () => {
        const city = document.getElementById('city').value;
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city');
        }
    });

    function getWeather(city) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

        console.log(`Requesting weather data for ${city} with URL: ${weatherUrl}`); // Log the request URL

        fetch(weatherUrl)
            .then(response => {
                console.log('API Response:', response); // Log the raw response
                return response.json();
            })
            .then(data => {
                console.log('API Response Data:', data); // Log the parsed JSON data

                if (data.cod === 200) {
                    displayWeather(data);
                    recommendPlaces(data);
                } else {
                    alert(`City not found: ${data.message}`);
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again later.');
            });
    }

    function displayWeather(data) {
        const weatherResult = document.getElementById('weatherResult');
        const weatherHtml = `
            <h4>Weather in ${data.name}</h4>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherResult.innerHTML = weatherHtml;
    }

    function recommendPlaces(data) {
        const recommendations = {
            hot: ["Beach", "Mountain hiking", "Water park"],
            cold: ["Ski resort", "Museum", "Indoor shopping mall"],
            rainy: ["Aquarium", "Art gallery", "Historical sites"],
            sunny: ["Outdoor park", "Zoo", "Botanical garden"]
        };

        const weatherMain = data.weather[0].main.toLowerCase();
        let places = [];

        if (weatherMain.includes("rain")) {
            places = recommendations.rainy;
        } else if (data.main.temp > 30) {
            places = recommendations.hot;
        } else if (data.main.temp < 10) {
            places = recommendations.cold;
        } else {
            places = recommendations.sunny;
        }

        const placeRecommendations = document.getElementById('placeRecommendations');
        let placeHtml = '<h4>Recommended Places to Visit:</h4><ul>';
        places.forEach(place => {
            placeHtml += `<li>${place}</li>`;
        });
        placeHtml += '</ul>';
        placeRecommendations.innerHTML = placeHtml;
    }

    // Slideshow functionality
    let slideIndex = 0;
    showSlides();

    document.getElementById('prev').addEventListener('click', () => plusSlides(-1));
    document.getElementById('next').addEventListener('click', () => plusSlides(1));

    function showSlides() {
        const slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    function plusSlides(n) {
        slideIndex += n;
        const slides = document.getElementsByClassName("slides");
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slideIndex < 1) {slideIndex = slides.length}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";
    }
});
// You can add JavaScript functionality if needed
document.addEventListener("DOMContentLoaded", () => {
    // Add your JavaScript code here
});
// You can add JavaScript functionality if needed
document.addEventListener("DOMContentLoaded", () => {
    // Add your JavaScript code here
});
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const testimonials = document.getElementsByClassName("testimonial");
    
    function showSlides() {
        for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > testimonials.length) {
            slideIndex = 1
        }
        testimonials[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    document.getElementById('prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.getElementById('next').addEventListener('click', () => {
        plusSlides(1);
    });

    showSlides(slideIndex); // Initialize the slider
});
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === "" || email === "" || subject === "" || message === "") {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
        } else if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Thank you for your message!";
            formMessage.style.color = "green";
            contactForm.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});


