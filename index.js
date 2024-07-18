
// document.addEventListener('DOMContentLoaded', function() {
//     const destinationsList = document.getElementById('destinations-list');

//     fetch('db.json')
//         .then(response => response.json())
//         .then(data => {
//             data.destinations.forEach(destination => {
//                 // Create list item for each destination
//                 const listItem = document.createElement('li');
//                 listItem.textContent = destination.name;

//                 // Add click event listener to show details
//                 listItem.addEventListener('click', function() {
//                     showDestinationDetails(destination);
//                 });

//                 // Append list item to the destinations list
//                 destinationsList.appendChild(listItem);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });

//     function showDestinationDetails(destination) {
//         const destinationDetailsDiv = document.getElementById('destination-details');
//         const destinationName = document.getElementById('destination-name');
//         const destinationDescription = document.getElementById('destination-description');
//         const destinationAccessible = document.getElementById('destination-accessible');
//         const destinationAccessibility = document.getElementById('destination-accessibility')
//         const destinationTransportation = document.getElementById('destination-transportation');
//         const destinationAccommodation = document.getElementById('destination-accommodation');
//         const destinationImage = document.getElementById('destination-image');

//         // Update destination details
//         destinationName.textContent = destination.name;
//         destinationDescription.textContent = destination.description;
//         destinationAccessible.textContent = destination.accessible ? 'Yes' : 'No';
//         destinationAccessibility.textContent = destination.accessibility;
//         destinationTransportation.textContent = destination.transportation.join(', ');
//         destinationAccommodation.textContent = destination.accommodation.join(', ');
//         destinationImage.src = destination.image || ''; // Set image source or empty if not provided
//         destinationImage.alt = `${destination.name} Image`; // Set alt text for image
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    const destinationsList = document.getElementById('destinations-list');
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactLink =document.querySelector('a[href="#contact"');
    const destinationDetailsDiv = document.getElementById('destination-details');
    const destinationName = document.getElementById('destination-name');
    const destinationDescription = document.getElementById('destination-description');
    const destinationAccessible = document.getElementById('destination-accessible');
    const destinationAccessibility = document.getElementById('destination-accessibility');
    const destinationTransportation = document.getElementById('destination-transportation');
    const destinationAccommodation = document.getElementById('destination-accommodation');
    const destinationImage = document.getElementById('destination-image');

    // Event listener for the "About" link
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Load about information
        loadAboutInformation();
        
        
    });

    // Function to load about information
    function loadAboutInformation() {
        destinationDetailsDiv.innerHTML = `
            <h2>About</h2>
            <p>This is the About section of our Accessible Travel Planner.</p>
            <p>Include any relevant information about your service, company, or project.</p>
            <p>You can add images, videos, or more detailed descriptions as needed.</p>
        `;

        // Clear destination details when showing About section
        clearDestinationDetails();
    }

    contactLink.addEventListener('click',function(event) {
        event.preventDefault();

        loadContactInformation();
    });

    function loadContactInformation() {
        destinationDetailsDiv.innerHTML = `
        <h2>Contacts</h2>
        `;
        clearDestinationDetails();
    }

    // Fetch data from JSON file
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            data.destinations.forEach(destination => {
                // Create list item for each destination
                const listItem = document.createElement('li');
                listItem.textContent = destination.name;

                // Add click event listener to show details
                listItem.addEventListener('click', function() {
                    showDestinationDetails(destination);
                });

                // Append list item to the destinations list
                destinationsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Function to show destination details
    function showDestinationDetails(destination) {
        destinationName.textContent = destination.name;
        destinationDescription.textContent = destination.description;
        destinationAccessible.textContent = destination.accessible ? 'Yes' : 'No';
        destinationAccessibility.textContent = destination.accessibility;
        destinationTransportation.textContent = destination.transportation.join(', ');
        destinationAccommodation.textContent = destination.accommodation.join(', ');
        destinationImage.src = destination.image || ''; // Set image source or empty if not provided
        destinationImage.alt = `${destination.name} Image`; // Set alt text for image

        // Update destination details div
        destinationDetailsDiv.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
            <p>Accessible: ${destination.accessible ? 'Yes' : 'No'}</p>
            <p>Accessibility: ${destination.accessibility}</p>
            <p>Transportation: ${destination.transportation.join(', ')}</p>
            <p>Accommodation: ${destination.accommodation.join(', ')}</p>
            <img src="${destination.image || ''}" alt="${destination.name} Image">
        `;
    }

    // Function to clear destination details
    function clearDestinationDetails() {
        destinationName.textContent = '';
        destinationDescription.textContent = '';
        destinationAccessible.textContent = '';
        destinationAccessibility.textContent = '';
        destinationTransportation.textContent = '';
        destinationAccommodation.textContent = '';
        destinationImage.src = '';
        destinationImage.alt = '';
    }
});


