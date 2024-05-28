const currentYear = new Date().getFullYear();

document.getElementById('currentYear').textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);

document.getElementById('lastModified').textContent = "Last Modified: " + lastModifiedDate;
