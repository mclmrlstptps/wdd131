// Get current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = lastModified.toLocaleString('en-US', options);

// Update footer
document.getElementById('currentYear').textContent = currentYear;
document.getElementById('lastModified').textContent = formattedDate;

// Windchill calculation
const temperature = parseInt(document.getElementById('temperature').textContent);
const windSpeed = parseInt(document.getElementById('wind-speed').textContent);
const windChillElement = document.getElementById('wind-chill');

function calculateWindChill(temp, wind) {
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    return Math.round(windChill);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChillValue} °C`;
} else {
    windChillElement.textContent = 'N/A';
}