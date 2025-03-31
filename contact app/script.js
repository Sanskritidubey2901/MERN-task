let contacts = [];

// Function to display contacts
function displayContacts() {
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = '';
    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact');
        contactDiv.innerHTML = `
            <h2>${contact.name}</h2>
            <p>Email: ${contact.email}</p>
            <p>Phone: ${contact.phone}</p>
            <p>Message: ${contact.message}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        contactsDiv.appendChild(contactDiv);
    });
}

// Function to add contact
function addContact(contact) {
    contacts.push(contact);
    displayContacts();
}

// Function to delete contact
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const contact = { name, email, phone, message };
    addContact(contact);
});

// Event listener for delete button click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        deleteContact(index);
    }
});

displayContacts();