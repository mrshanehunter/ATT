//This is a sample of YorN to be displayed while users are not logged in

const tryIt = document.getElementById('tryIt');



function sampleYorN() {
  const sampleTarot = [
    {
      cdName: "The Fool",
      cdResponse: "Yes",
      cdMeaning: "The Universe is behind you 100%.",
      cdImage: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
    },
    {
      cdName: "The Hermit",
      cdResponse: "No",
      cdMeaning: "Don't make the same mistake again. Think twice.",
      cdImage: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
    },
    {
      cdName: "Two of Swords",
      cdResponse: "No",
      cdMeaning: "If you proceed, you'll be blindsided.",
      cdImage: "https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg",
    },
    {
      cdName: "Six of Pentacles",
      cdResponse: "Yes",
      cdMeaning: "But don't be scared to ask for help.",
      cdImage: "https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg",
    },
  ]

  const randomSample = Math.ceil(Math.random() * 4);
  
  const sampleName = sampleTarot[`${randomSample}`].cdName;
  const sampleResponse = sampleTarot[`${randomSample}`].cdResponse;
  const sampleMessage = sampleTarot[`${randomSample}`].cdMeaning;
  const sampleImage = sampleTarot[`${randomSample}`].cdImage;

  const sampleNameContainer = document.querySelector("#pracDrawn");

  const div = document.createElement("div");
  sampleNameContainer.classList.add("pracDrawn");
  const sampleHTML = `
       <div class="admin m-0 p-0" data-name="${sampleName}">

           <div class="d-flex justify-content-center m-0 p-0 cardDrawnName">
              <p>${sampleName}</p>
          </div>   

          <div class="d-flex justify-content-center m-0 p-0 cardDrawnImage">
              <img class="img-fluid m-0 p-0" src="${sampleImage}" height="20%" width="auto">
          </div>

          <div class="cardResponse d-flex m-0 p-0 justify-content-center">
             <p><strong>${sampleResponse}</strong></p>
          </div>

          <div class="cardMessage d-flex m-0 p-0 justify-content-center">
              <p><strong>${sampleMessage}</strong></p>
          </div>

          <div class="sampleMessage d-flex m-0 p-0 justify-content-center">
          <p> The tarot will answer either Yes or No, but always with some advice to consider.
          Try another question and see if you get a different answer.</p>
        </div>  

      </div>
       `;
  sampleNameContainer.innerHTML = sampleHTML;
  sampleNameContainer.appendChild(div);

}

tryIt.addEventListener("click", sampleYorN);







// All code below is displayed when users are logged into the app



function tarotYesOrNo() {
    const theTarot = [
      {
        cardName: "The Fool",
        cardResponse: "Yes",
        cardMeaning: "The Universe is behind you 100%.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
      },
      {
        cardName: "The Magician",
        cardResponse: "Yes",
        cardMeaning: "Use strategy & logic to beat the odds.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
      },
      {
        cardName: "The High Priestess",
        cardResponse: "No",
        cardMeaning: "Now isn't the right time.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
      },
      {
        cardName: "The Empress",
        cardResponse: "Yes",
        cardMeaning: "But be warned, you'll need to play by the rules.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
      },
      {
        cardName: "The Emperor",
        cardResponse: "Yes",
        cardMeaning: "There couldn't be a better time for it!",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
      },
      {
        cardName: "The Hierophant",
        cardResponse: "Yes",
        cardMeaning: "If you have someone helping you or advising you.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
      },
      {
        cardName: "The Lovers",
        cardResponse: "Yes",
        cardMeaning:
          "For anything related to love, otherwise think very carefully, it will be life altering.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
      },
      {
        cardName: "The Chariot",
        cardResponse: "No",
        cardMeaning:
          "You can't control the situation, better to be patient for now.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
      },
      {
        cardName: "Strength",
        cardResponse: "Yes",
        cardMeaning: "But are you strong enough to deal with what will happen?",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
      },
      {
        cardName: "The Hermit",
        cardResponse: "No",
        cardMeaning: "Don't make the same mistake again. Think twice.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
      },
      {
        cardName: "Wheel Of Fortune",
        cardResponse: "Yes",
        cardMeaning: "But be aware, there are strings attached.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
      },
      {
        cardName: "Justice",
        cardResponse: "No",
        cardMeaning: "You have some unfinished business to take care of first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
      },
      {
        cardName: "The Hanged Man",
        cardResponse: "No",
        cardMeaning: "Things need to change first, so hang in there.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
      },
      {
        cardName: "Death",
        cardResponse: "Yes",
        cardMeaning: "It's not going to be easy, but it will happen.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
      },
      {
        cardName: "Temperance",
        cardResponse: "Yes",
        cardMeaning: "But make sure all your ducks are in a row first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
      },
      {
        cardName: "The Devil",
        cardResponse: "No",
        cardMeaning:
          "You might want to, but something is holding you back for a reason.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
      },
      {
        cardName: "The Tower",
        cardResponse: "Yes",
        cardMeaning:
          "The decision isn't up to you - your fate has already been decided.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
      },
      {
        cardName: "The Star",
        cardResponse: "Yes",
        cardMeaning:
          "Your wish has been granted - look for signs in the horoscope.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
      },
      {
        cardName: "The Moon",
        cardResponse: "No",
        cardMeaning: "You're still in the dark, wait unitl you know more.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
      },
      {
        cardName: "The Sun",
        cardResponse: "Yes",
        cardMeaning: "New things are the order of the day.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
      },
      {
        cardName: "Judgement",
        cardResponse: "Yes",
        cardMeaning:
          "It's time to do what must be done - your judgement is sound.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
      },
      {
        cardName: "The World",
        cardResponse: "No",
        cardMeaning:
          "Time for a little patience. Everything will soon fall into place.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
      },
      {
        cardName: "Ace of Wands",
        cardResponse: "Yes",
        cardMeaning: "It's full speed ahead on all fronts.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
      },
      {
        cardName: "Two of Wands",
        cardResponse: "No",
        cardMeaning: "It isn't time - better you don't.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg",
      },
      {
        cardName: "Three of Wands",
        cardResponse: "Yes",
        cardMeaning: "Why ask? You're going to anyway.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg",
      },
      {
        cardName: "Four of Wands",
        cardResponse: "Yes",
        cardMeaning:
          "But only if everything else that needs to be done has been.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
      },
      {
        cardName: "Five of Wands",
        cardResponse: "No",
        cardMeaning: "It's not your doing, someone else is holding you back.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg",
      },
      {
        cardName: "Six of Wands",
        cardResponse: "Yes",
        cardMeaning: "Success is yours!",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg",
      },
      {
        cardName: "Seven of Wands",
        cardResponse: "Yes",
        cardMeaning: "Don't go down without a fight.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg",
      },
      {
        cardName: "Eight of Wands",
        cardResponse: "Yes",
        cardMeaning: "You will make it happen.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg",
      },
      {
        cardName: "Nine of Wands",
        cardResponse: "No",
        cardMeaning:
          "Wait until you've got everything you need to make it happen.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg",
      },
      {
        cardName: "Ten of Wands",
        cardResponse: "No",
        cardMeaning: "You've got too much going on already.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg",
      },
      {
        cardName: "Page of Wands",
        cardResponse: "Yes",
        cardMeaning: "Look for the joy & wonder in it all.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg",
      },
      {
        cardName: "Knight of Wands",
        cardResponse: "No",
        cardMeaning:
          "You haven't quite got the energy & stamina required at present.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg",
      },
      {
        cardName: "Queen of Wands",
        cardResponse: "No",
        cardMeaning: "It will take a heavy toll on you mentally.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg",
      },
      {
        cardName: "King of Wands",
        cardResponse: "Yes",
        cardMeaning: "You will grow a little more mature in the process.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waki.jpg",
      },
      {
        cardName: "Ace of Cups",
        cardResponse: "Yes",
        cardMeaning: "Expect someone special to help you.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg",
      },
      {
        cardName: "Two of Cups",
        cardResponse: "Yes",
        cardMeaning: "But only if it relates to love or friendship.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu02.jpg",
      },
      {
        cardName: "Three of Cups",
        cardResponse: "Yes",
        cardMeaning: "It's going to be fun.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu03.jpg",
      },
      {
        cardName: "Four of Cups",
        cardResponse: "Yes",
        cardMeaning: "It's a valuable opportunity, so don't take it for granted.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu04.jpg",
      },
      {
        cardName: "Five of Cups",
        cardResponse: "No",
        cardMeaning: "You're still stuck in the past - you need to heal first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu05.jpg",
      },
      {
        cardName: "Six of Cups",
        cardResponse: "Yes",
        cardMeaning: "Accept the gift from the Universe.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu06.jpg",
      },
      {
        cardName: "Seven of Cups",
        cardResponse: "No",
        cardMeaning:
          "Wait until you're entirely sure - you have doubts right now.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu07.jpg",
      },
      {
        cardName: "Eight of Cups",
        cardResponse: "Yes",
        cardMeaning: "Change might be uncomfortable, but it's very necessary.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu08.jpg",
      },
      {
        cardName: "Nine of Cups",
        cardResponse: "Yes",
        cardMeaning: "It's a well deserved reward - well done!",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu09.jpg",
      },
      {
        cardName: "Ten of Cups",
        cardResponse: "Yes",
        cardMeaning: "It's the culmination of all you've been working toward.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu10.jpg",
      },
      {
        cardName: "Page of Cups",
        cardResponse: "No",
        cardMeaning:
          "There is a sensitivity to the situation you're not fully aware of.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg",
      },
      {
        cardName: "Knight of Cups",
        cardResponse: "Yes",
        cardMeaning: "It will make you feel better.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg",
      },
      {
        cardName: "Queen of Cups",
        cardResponse: "Yes",
        cardMeaning:
          "Be open to receiving some pearls of intuitive wisdom as it unfolds.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg",
      },
      {
        cardName: "King of Cups",
        cardResponse: "Yes",
        cardMeaning:
          "But only if you're prepared to be guided by someone who is a little more experienced.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg",
      },
      {
        cardName: "Ace of Swords",
        cardResponse: "Yes",
        cardMeaning: "Follow your intuition on this one.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swac.jpg",
      },
      {
        cardName: "Two of Swords",
        cardResponse: "No",
        cardMeaning: "If you proceed, you'll be blindsided.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg",
      },
      {
        cardName: "Three of Swords",
        cardResponse: "No",
        cardMeaning: "Communication isn't favourable.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw03.jpg",
      },
      {
        cardName: "Four of Swords",
        cardResponse: "No",
        cardMeaning: "Take some time to rest & recuperate first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw04.jpg",
      },
      {
        cardName: "Five of Swords",
        cardResponse: "No",
        cardMeaning:
          "Be wary of manipulation in this situation - better to leave it alone.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw05.jpg",
      },
      {
        cardName: "Six of Swords",
        cardResponse: "No",
        cardMeaning: "Keep in mind that patience is a virtue, while you wait.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw06.jpg",
      },
      {
        cardName: "Seven of Swords",
        cardResponse: "Yes",
        cardMeaning: "Claim back what's been taken from you.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw07.jpg",
      },
      {
        cardName: "Eight of Swords",
        cardResponse: "No",
        cardMeaning:
          "There's some unfinished business you need to take care of first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg",
      },
      {
        cardName: "Nine of Swords",
        cardResponse: "No",
        cardMeaning: "Solve your current problem first.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw09.jpg",
      },
      {
        cardName: "Ten of Swords",
        cardResponse: "No",
        cardMeaning: "Be patient for just a little while longer.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw10.jpg",
      },
      {
        cardName: "Page of Swords",
        cardResponse: "No",
        cardMeaning: "Others are watching with malicious intent.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg",
      },
      {
        cardName: "Knight of Swords",
        cardResponse: "No",
        cardMeaning: "It will ruin you - look for evil in disguise.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg",
      },
      {
        cardName: "Queen of Swords",
        cardResponse: "No",
        cardMeaning:
          "Only if you want to be made look foolish for someone else's entertainment.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg",
      },
      {
        cardName: "King of Swords",
        cardResponse: "No",
        cardMeaning:
          "All is definitely not what it seems, no matter how good it looks.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swki.jpg",
      },
      {
        cardName: "Ace of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "Things will work out in your favour.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/peac.jpg",
      },
      {
        cardName: "Two of Pentacles",
        cardResponse: "No",
        cardMeaning: "It will put a strain on your finances.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg",
      },
      {
        cardName: "Three of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "But it will be teamwork that makes it happen.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe03.jpg",
      },
      {
        cardName: "Four of Pentacles",
        cardResponse: "No",
        cardMeaning: "You should hold on to what you've got for a while longer.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe04.jpg",
      },
      {
        cardName: "Five of Pentacles",
        cardResponse: "No",
        cardMeaning: "You'll be shooting yourself in the foot if you do.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe05.jpg",
      },
      {
        cardName: "Six of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "But don't be scared to ask for help.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg",
      },
      {
        cardName: "Seven of Pentacles",
        cardResponse: "No",
        cardMeaning:
          "Practice just a little more patience until the time is right.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe07.jpg",
      },
      {
        cardName: "Eight of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "But remember, it's the little things that count.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe08.jpg",
      },
      {
        cardName: "Nine of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "You are in sync with the Universe.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg",
      },
      {
        cardName: "Ten of Pentacles",
        cardResponse: "No",
        cardMeaning: "Take some time to relish what is already yours.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe10.jpg",
      },
      {
        cardName: "Page of Pentacles",
        cardResponse: "No",
        cardMeaning: "It will quickly end in tears, for all involved.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg",
      },
      {
        cardName: "Knight of Pentacles",
        cardResponse: "Yes",
        cardMeaning:
          "But be mindful of doing it right the first time, even if it is the long way around.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg",
      },
      {
        cardName: "Queen of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "You're in safe hands.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg",
      },
      {
        cardName: "King of Pentacles",
        cardResponse: "Yes",
        cardMeaning: "Only if you're willing to pay attention to good advice.",
        cardImage: "https://www.sacred-texts.com/tarot/pkt/img/peki.jpg",
      },
    ];
  
    const randomCard = Math.ceil(Math.random() * 78);
  
    const theCardName = theTarot[`${randomCard}`].cardName;
    const theCardResponse = theTarot[`${randomCard}`].cardResponse;
    const theCardMessage = theTarot[`${randomCard}`].cardMeaning;
    const theCardImage = theTarot[`${randomCard}`].cardImage;
  
    const cardNameContainer = document.querySelector("#cardDrawn");

    
  
    console.log(theCardName);
  
    const div = document.createElement("div");
    cardNameContainer.classList.add("cardDrawn");
    const cardHTML = `
         <div class="admin m-0 p-0" data-name="${theCardName}">
  
             <div class="d-flex justify-content-center m-0 p-0 cardDrawnName">
                <p>${theCardName}</p>
            </div>   

            <div class="d-flex justify-content-center m-0 p-0 cardDrawnImage">
                <img class="img-fluid m-0 p-0" src="${theCardImage}" height="30%" width="auto">
            </div>

            <div class="cardResponse d-flex m-0 p-0 justify-content-center">
               <p><strong>${theCardResponse}</strong></p>
            </div>
  
            <div class="cardMessage d-flex m-0 p-0 justify-content-center">
                <p><strong>${theCardMessage}</strong></p>
            </div>
  
        </div>
         `;
    cardNameContainer.innerHTML = cardHTML;
    cardNameContainer.appendChild(div);


    //This is the card to decrement the token total for each function run
    //Needs to update customer record with new token value
    let tokenTotal = 25;  //balance needs to be retrieved from customer data file
    const ppc = 3;


    let tokensRemain = tokenTotal - ppc;
    tokenTotal = tokensRemain;
    console.log(tokensRemain);
    return tokenTotal;  //balance needs to be returned to customer data file
  }
  
  // function to check if the user is logged in before they YORN

 

 
  
  

  //recommended all snipcart related events, subscribers & API Calls are contained in the ready event below

  document.addEventListener('snipcart.ready', () => {
   
    const enterBtn = document.getElementById("enterBtn");
    const practice = document.getElementById("practice");
    const liveApp = document.getElementById("liveApp");

    Snipcart.events.on('customer.signedin', (customer) => {
       emailID = `${customer.email}`;
       console.log(`Customer ${customer.email} just signed in. Value is:`, customer.signedin);
       console.log(emailID);
        practice.style.display = "none";
        liveApp.style.display = "flex";
  
    enterBtn.addEventListener("click", tarotYesOrNo);
  })

    Snipcart.events.on('customer.signedout', () => {
      liveApp.style.display = "none";
      practice.style.display = "flex";
    })

  Snipcart.events.on('cart.confirmed', (cartConfirmResponse) => {
      
  console.log(cartConfirmResponse);
  
  let email = cartConfirmResponse.email;
  let invoice = cartConfirmResponse.invoiceNumber;
  let count = cartConfirmResponse.items.count;
  let paid = cartConfirmResponse.paymentDetails.status;
  let tokens = 0;
  let tokens25 = 0;
  let tokens50 = 0;
  let tokens100 = 0; 
  let date = Date.now();
  console.log(count, paid, tokens);

  if (count >= 1 && paid === 5) {
    for (let i = 0; i < cartConfirmResponse.items.items.length; i++) {
      if (cartConfirmResponse.items.items[i].id === "T-25") {
       tokens25 = cartConfirmResponse.items.items[i].quantity * 25; console.log("tokens 25 =", tokens25);
      } else if (cartConfirmResponse.items.items[i].id === "T-50") {
       tokens50 = cartConfirmResponse.items.items[i].quantity * 50; console.log("tokens 50=", tokens50);
      } else if (cartConfirmResponse.items.items[i].id === "T-100") {
      tokens100 = cartConfirmResponse.items.items[i].quantity * 100; console.log("tokens 100 =", tokens100)
      } tokens = (tokens25 + tokens50 + tokens100);
     }
    }

  
  const record = {
    "id": email,
    "inv": invoice,
    "date": date,
    "tkn": tokens,
  }

  console.log(record);
}) 

  
  });


  