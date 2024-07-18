

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
            <p>Welcome to our accessible travel website, where we strive to ensure that everyone has the opportunity to see the globe without constraints.
             We recognize that traveling with disabilities offers unique challenges, which is why we've created a comprehensive platform to empower and inspire.
            </p>
        <br>
            <p>At Accesible Travel Planner, accessibility is more than a feature; it is a basic value. We provide thorough accessible information for a variety of destinations, lodgings, and activities across the world.
             Whether you're planning a weekend escape or a dream vacation, our objective is to give you the tools and support you need to travel confidently and comfortably.
             </p>
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
        <p>We're here to support your accessible travel journey every step of the way. Whether you have questions, feedback, or need assistance, our dedicated team is ready to help.</p>
        <br>
        <h3>Customer Support:</h3>
        <p>For general inquiries and customer support, please email us at support@accessibletours.gmail.com</p>
        <br>
        <h3>Accessibility Assistance:</h3>
        <p>If you require specific accessibility information or assistance with booking accommodations, 
        attractions, or transportation, please contact our Accessibility Specialist at accessibility@gmail.com.</p>
        <br>
        <h3>Phone:</h3>
        <p>You can reach us by phone at +254 (555) 123-4567 during our office hours, Monday through Friday, 9:00 AM to 5:00 PM (EST).</p>
        <br>
        <h3>Address:</h3>
        <p>[Accesible Travel Planner]
           616 Spine Road,
           Nairobi, 
           Kenya
        </p>
        <br>
        <p>Please feel free to contact us at any time. We are dedicated to making your travel experience accessible, pleasurable, and memorable.</p>
        `;
        clearDestinationDetails();
    }

    // Fetch data from JSON file
    fetch('https://my-json-server.typicode.com/eston-ndungu/Phase-1-Project/destinations')
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

        let emergencyServicesHTML = `
        <h3>Emergency Services</h3>
        <ul>
            <li>Police: ${destination.emergency_services.police}</li>
            <li>Fire: ${destination.emergency_services.fire}</li>
            <li>Nearest Hospital: ${destination.emergency_services.medical.nearest_hospital}</li>
            <li>Emergency Contact: ${destination.emergency_services.medical.emergency_contact}</li>
        </ul>
    `;

        // Update destination details div
        destinationDetailsDiv.innerHTML = `
            <h2>${destination.name}</h2>
            <p>${destination.description}</p>
            <p>Accessible: ${destination.accessible ? 'Yes' : 'No'}</p>
            <p>Accessibility: ${destination.accessibility}</p>
            <p>Transportation: ${destination.transportation.join(', ')}</p>
            <p>Accommodation: ${destination.accommodation.join(', ')}</p>
            <img src="${destination.image || ''}" alt="${destination.name} Image">
            ${emergencyServicesHTML}
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