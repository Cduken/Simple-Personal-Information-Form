// script.js

document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the values from the form inputs
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const hobbies = document.getElementById('hobbies').value;
    const isStudent = document.getElementById('checkbox').checked;

    // Create a summary string
    const summary = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
        <p><strong>Are you a student?</strong> ${isStudent ? 'Yes' : 'No'}</p>
    `;

    // Display the summary in the summaryOutput div
    document.getElementById('summaryOutput').innerHTML = summary;
});
