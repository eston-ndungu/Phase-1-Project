

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
        });

    function showDestinationDetails(destination) {
        const destinationDetailsDiv = document.getElementById('destination-details');
        destinationDetailsDiv.innerHTML = `
        <div class="details-container">
            <h3>${destination.name}</h3>
            <p><strong>Description:</strong> ${destination.description}</p>
            <p><strong>Accessible:</strong> ${destination.accesible ? 'Yes' : 'No'}</p>
            <p><strong>Transportation:</strong> ${destination.transportation.join(', ')}</p>
            <p><strong>Accommodation:</strong> ${destination.accomodation.join(', ')}</p>
           
         </div>
        `;
    }

