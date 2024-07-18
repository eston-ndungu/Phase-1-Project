

document.addEventListener('DOMContentLoaded', function() {
    const destinationsList = document.getElementById('destinations-list');

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

    function showDestinationDetails(destination) {
        const destinationDetailsDiv = document.getElementById('destination-details');
        const destinationName = document.getElementById('destination-name');
        const destinationDescription = document.getElementById('destination-description');
        const destinationAccessible = document.getElementById('destination-accessible');
        const destinationAccesibility = document.getElementById('destination-accesibility')
        const destinationTransportation = document.getElementById('destination-transportation');
        const destinationAccommodation = document.getElementById('destination-accommodation');
        const destinationImage = document.getElementById('destination-image');

        // Update destination details
        destinationName.textContent = destination.name;
        destinationDescription.textContent = destination.description;
        destinationAccessible.textContent = destination.accesible ? 'Yes' : 'No';
        destinationAccesibility.textContent = destination.accesibility;
        destinationTransportation.textContent = destination.transportation.join(', ');
        destinationAccommodation.textContent = destination.accomodation.join(', ');
        destinationImage.src = destination.image || ''; // Set image source or empty if not provided
        destinationImage.alt = `${destination.name} Image`; // Set alt text for image
    }
});


