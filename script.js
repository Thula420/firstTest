// Function to store form data in LocalStorage
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get values from form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Create an object to store the data
    const userData = {
        name: name,
        age: age
    };

    // Store the data in LocalStorage as a JSON string
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Data has been stored!');
});

// Function to retrieve and show stored data
function showStoredData() {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
        const userData = JSON.parse(storedData);
        alert(`Stored Data: \nName: ${userData.name}\nAge: ${userData.age}`);
    } else {
        alert('No data found.');
    }
}