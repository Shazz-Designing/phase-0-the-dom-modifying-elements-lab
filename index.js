// Remove the 'main' element with id 'main'
document.querySelector('main#main').remove();

// Create a new 'h1' element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the inner HTML of the 'newHeader' element
newHeader.innerHTML = "YOUR-NAME is the champion";

// Append 'newHeader' to the body
document.body.appendChild(newHeader);
