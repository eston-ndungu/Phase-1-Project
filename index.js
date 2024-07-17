

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
//         });

//     function showDestinationDetails(destination) {
//         const destinationDetailsDiv = document.getElementById('destination-details')

//         destinationDetailsDiv.innerHTML = `
        
       
//             <h3>${destination.name}</h3>
//             <p><strong>Description:</strong> ${destination.description}</p>
//             <p><strong>Accessible:</strong> ${destination.accesible ? 'Yes' : 'No'}</p>
//             <p><strong>Transportation:</strong> ${destination.transportation.join(', ')}</p>
//             <p><strong>Accommodation:</strong> ${destination.accomodation.join(', ')}</p>
           
//          </div>
//         `;
//     }

// index.js

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
});

function showDestinationDetails(destination) {
    const destinationName = document.getElementById('destination-name');
    const destinationImage = document.getElementById('destination-image');
    const destinationDescription = document.getElementById('destination-description');
    const destinationAccessible = document.getElementById('destination-accessible');
    const destinationTransportation = document.getElementById('destination-transportation');
    const destinationAccommodation = document.getElementById('destination-accommodation');

    // Set content for each element
    destinationName.textContent = destination.name;
    destinationImage.src = destination.image; // Assuming each destination object has an 'image' property
    destinationDescription.textContent = destination.description;
    destinationAccessible.textContent = destination.accessible ? 'Yes' : 'No';
    destinationTransportation.textContent = destination.transportation.join(', ');
    destinationAccommodation.textContent = destination.accomodation.join(', ');
}
