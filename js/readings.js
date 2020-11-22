const createReadingCards = (no, id, type, title, spread, price, para1, para2, para3, invoicename, imageSrc, textAreaHeader, textAreaElement, textAreaRequired) => {

const readingCard = `

<div class="card ${type} m-2">
    <div class="card-header">
        ${type}
    </div>
<div class="card-body">
    <img src="../assets/readingImages/${imageSrc}" class="image">
    <div class="overlay">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${spread}</h6>
    <h5 class="card-price">$${price}</h5>
    <p class="card-text p1">${para1}</p>
    <p class="card-text p2">${para2}</p>
    <p class="card-text p3">${para3}</p>
    </div>
</div>
<div class="card-footer text-muted">
   <button class="snipcart-add-item w-75"
       data-item-id="${id}"
       data-item-price="${price}"
       data-item-url="https://askthetarot.com.au/html/readings.json"
       data-item-name="${invoicename}"
       data-item-image="../assets/readingImages/${imageSrc}"
       data-item-custom${no}-name="${textAreaHeader}"
       data-item-custom${no}-type="${textAreaElement}"
       data-item-custom${no}-type="${textAreaRequired}"
       >Ask Now</button>
</div>
</div>
`;
return readingCard;
};

function render() {
    const readingHtmlList = [];

    for(let i = 0; i <productRange.length; i++) {
        const currentReading = productRange[i];
        const readingHtml = createReadingCards(
            currentReading.no,
            currentReading.id,
            currentReading.type,
            currentReading.title,
            currentReading.spread,
            currentReading.price,
            currentReading.para1,
            currentReading.para2,
            currentReading.para3,
            currentReading.invoicename,
            currentReading.imageSrc,
            currentReading.textAreaHeader,
            currentReading.textAreaElement,
            currentReading.textAreaRequired,
        );
        readingHtmlList.push(readingHtml);
    }
    const cardsHtml = readingHtmlList.join(' ');
    const readingCards = document.querySelector('#readingCards');
    readingCards.innerHTML = cardsHtml;    
}

render();


