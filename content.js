
//find the price element
let apexElement = document.getElementById('apex_desktop_qualifiedBuybox');


if (apexElement) {
  // Create a new div and span element
  let newDiv = document.createElement("div");
  let newLabel = document.createElement("span");
  let carbonLabel = document.createElement("span");
  let hrElement = document.createElement("hr");
  let extraInfo = document.createElement("div");

  // Set the label's attributes
  newLabel.className = 'myExtensionLabel';
  newLabel.innerText = "Carbon Emissions: ";
  carbonLabel.innerText = "10kg";
  newDiv.className= 'myDiv';
  hrElement.className= 'myHr';
  extraInfo.className='extraInfo';
  carbonLabel.className='carbonLabel';

  fetch('http://localhost:59910/data')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data and insert it into your web element
    let extraInfoText = data.carbon;
    extraInfo.textContent = extraInfoText;
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
  
  // Add the label and hr to the div
  newDiv.appendChild(newLabel);
  newDiv.appendChild(carbonLabel);
  newDiv.appendChild(hrElement);
  newDiv.appendChild(extraInfo);


  // Insert the new div after the apex-desktop div
  apexElement.parentNode.insertBefore(newDiv, apexElement.nextSibling);



  // Inject CSS
// Inject CSS
// Inject CSS
let css = `
.carbonLabel{
    font-weight:bold;
}

.extraInfo {
    margin-top:4px;
    font-weight:normal;
}
.myHr {
    margin-top: 8px;
    margin-bottom:8px;
    border-top: 1px solid rgba(0, 0, 0, .7);
}
.myDiv {
    padding: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    background-color: #BDF8B3;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#myExtensionBadge:hover {
    background-color: #2980b9;
}

#myExtensionBadge:hover #myTooltip {
    visibility: visible;
}
.myExtensionLabel {
    font-weight: normal;
}
`;

let style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);;
}
