function dailyCardDraw () {

    const dailyTarot = [
        {
          cardName: "The Fool",
           
          cardMeaning: "The Universe is behind you 100%.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
        },
        {
          cardName: "The Magician",
           
          cardMeaning: "Use strategy & logic to beat the odds.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
        },
        {
          cardName: "The High Priestess",
            
          cardMeaning: "Now isn't the right time.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
        },
        {
          cardName: "The Empress",
           
          cardMeaning: "But be warned, you'll need to play by the rules.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
        },
        {
          cardName: "The Emperor",
           
          cardMeaning: "There couldn't be a better time for it!",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
        },
        {
          cardName: "The Hierophant",
           
          cardMeaning: "If you have someone helping you or advising you.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
        },
        {
          cardName: "The Lovers",
           
          cardMeaning:
            "For anything related to love, otherwise think very carefully, it will be life altering.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
        },
        {
          cardName: "The Chariot",
            
          cardMeaning:
            "You can't control the situation, better to be patient for now.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
        },
        {
          cardName: "Strength",
           
          cardMeaning: "But are you strong enough to deal with what will happen?",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
        },
        {
          cardName: "The Hermit",
            
          cardMeaning: "Don't make the same mistake again. Think twice.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
        },
        {
          cardName: "Wheel Of Fortune",
           
          cardMeaning: "But be aware, there are strings attached.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
        },
        {
          cardName: "Justice",
            
          cardMeaning: "You have some unfinished business to take care of first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
        },
        {
          cardName: "The Hanged Man",
            
          cardMeaning: "Things need to change first, so hang in there.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
        },
        {
          cardName: "Death",
           
          cardMeaning: "It's not going to be easy, but it will happen.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
        },
        {
          cardName: "Temperance",
           
          cardMeaning: "But make sure all your ducks are in a row first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
        },
        {
          cardName: "The Devil",
            
          cardMeaning:
            "You might want to, but something is holding you back for a reason.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
        },
        {
          cardName: "The Tower",
           
          cardMeaning:
            "The decision isn't up to you - your fate has already been decided.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
        },
        {
          cardName: "The Star",
           
          cardMeaning:
            "Your wish has been granted - look for signs in the horoscope.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
        },
        {
          cardName: "The Moon",
            
          cardMeaning: "You're still in the dark, wait unitl you know more.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
        },
        {
          cardName: "The Sun",
           
          cardMeaning: "New things are the order of the day.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
        },
        {
          cardName: "Judgement",
           
          cardMeaning:
            "It's time to do what must be done - your judgement is sound.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
        },
        {
          cardName: "The World",
            
          cardMeaning:
            "Time for a little patience. Everything will soon fall into place.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
        },
        {
          cardName: "Ace of Wands",
           
          cardMeaning: "It's full speed ahead on all fronts.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
        },
        {
          cardName: "Two of Wands",
            
          cardMeaning: "It isn't time - better you don't.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg",
        },
        {
          cardName: "Three of Wands",
           
          cardMeaning: "Why ask? You're going to anyway.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg",
        },
        {
          cardName: "Four of Wands",
           
          cardMeaning:
            "But only if everything else that needs to be done has been.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
        },
        {
          cardName: "Five of Wands",
            
          cardMeaning: "It's not your doing, someone else is holding you back.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg",
        },
        {
          cardName: "Six of Wands",
           
          cardMeaning: "Success is yours!",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg",
        },
        {
          cardName: "Seven of Wands",
           
          cardMeaning: "Don't go down without a fight.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg",
        },
        {
          cardName: "Eight of Wands",
           
          cardMeaning: "You will make it happen.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg",
        },
        {
          cardName: "Nine of Wands",
            
          cardMeaning:
            "Wait until you've got everything you need to make it happen.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg",
        },
        {
          cardName: "Ten of Wands",
            
          cardMeaning: "You've got too much going on already.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg",
        },
        {
          cardName: "Page of Wands",
           
          cardMeaning: "Look for the joy & wonder in it all.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg",
        },
        {
          cardName: "Knight of Wands",
            
          cardMeaning:
            "You haven't quite got the energy & stamina required at present.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg",
        },
        {
          cardName: "Queen of Wands",
            
          cardMeaning: "It will take a heavy toll on you mentally.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg",
        },
        {
          cardName: "King of Wands",
           
          cardMeaning: "You will grow a little more mature in the process.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waki.jpg",
        },
        {
          cardName: "Ace of Cups",
           
          cardMeaning: "Expect someone special to help you.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg",
        },
        {
          cardName: "Two of Cups",
           
          cardMeaning: "But only if it relates to love or friendship.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu02.jpg",
        },
        {
          cardName: "Three of Cups",
           
          cardMeaning: "It's going to be fun.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu03.jpg",
        },
        {
          cardName: "Four of Cups",
           
          cardMeaning: "It's a valuable opportunity, so don't take it for granted.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu04.jpg",
        },
        {
          cardName: "Five of Cups",
            
          cardMeaning: "You're still stuck in the past - you need to heal first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu05.jpg",
        },
        {
          cardName: "Six of Cups",
           
          cardMeaning: "Accept the gift from the Universe.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu06.jpg",
        },
        {
          cardName: "Seven of Cups",
            
          cardMeaning:
            "Wait until you're entirely sure - you have doubts right now.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu07.jpg",
        },
        {
          cardName: "Eight of Cups",
           
          cardMeaning: "Change might be uncomfortable, but it's very necessary.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu08.jpg",
        },
        {
          cardName: "Nine of Cups",
           
          cardMeaning: "It's a well deserved reward - well done!",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu09.jpg",
        },
        {
          cardName: "Ten of Cups",
           
          cardMeaning: "It's the culmination of all you've been working toward.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cu10.jpg",
        },
        {
          cardName: "Page of Cups",
            
          cardMeaning:
            "There is a sensitivity to the situation you're not fully aware of.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg",
        },
        {
          cardName: "Knight of Cups",
           
          cardMeaning: "It will make you feel better.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg",
        },
        {
          cardName: "Queen of Cups",
           
          cardMeaning:
            "Be open to receiving some pearls of intuitive wisdom as it unfolds.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg",
        },
        {
          cardName: "King of Cups",
           
          cardMeaning:
            "But only if you're prepared to be guided by someone who is a little more experienced.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg",
        },
        {
          cardName: "Ace of Swords",
           
          cardMeaning: "Follow your intuition on this one.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swac.jpg",
        },
        {
          cardName: "Two of Swords",
            
          cardMeaning: "If you proceed, you'll be blindsided.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg",
        },
        {
          cardName: "Three of Swords",
            
          cardMeaning: "Communication isn't favourable.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw03.jpg",
        },
        {
          cardName: "Four of Swords",
            
          cardMeaning: "Take some time to rest & recuperate first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw04.jpg",
        },
        {
          cardName: "Five of Swords",
            
          cardMeaning:
            "Be wary of manipulation in this situation - better to leave it alone.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw05.jpg",
        },
        {
          cardName: "Six of Swords",
            
          cardMeaning: "Keep in mind that patience is a virtue, while you wait.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw06.jpg",
        },
        {
          cardName: "Seven of Swords",
           
          cardMeaning: "Claim back what's been taken from you.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw07.jpg",
        },
        {
          cardName: "Eight of Swords",
            
          cardMeaning:
            "There's some unfinished business you need to take care of first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg",
        },
        {
          cardName: "Nine of Swords",
            
          cardMeaning: "Solve your current problem first.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw09.jpg",
        },
        {
          cardName: "Ten of Swords",
            
          cardMeaning: "Be patient for just a little while longer.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/sw10.jpg",
        },
        {
          cardName: "Page of Swords",
            
          cardMeaning: "Others are watching with malicious intent.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg",
        },
        {
          cardName: "Knight of Swords",
            
          cardMeaning: "It will ruin you - look for evil in disguise.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg",
        },
        {
          cardName: "Queen of Swords",
            
          cardMeaning:
            "Only if you want to be made look foolish for someone else's entertainment.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg",
        },
        {
          cardName: "King of Swords",
            
          cardMeaning:
            "All is definitely not what it seems, no matter how good it looks.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/swki.jpg",
        },
        {
          cardName: "Ace of Pentacles",
           
          cardMeaning: "Things will work out in your favour.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/peac.jpg",
        },
        {
          cardName: "Two of Pentacles",
            
          cardMeaning: "It will put a strain on your finances.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg",
        },
        {
          cardName: "Three of Pentacles",
           
          cardMeaning: "But it will be teamwork that makes it happen.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe03.jpg",
        },
        {
          cardName: "Four of Pentacles",
            
          cardMeaning: "You should hold on to what you've got for a while longer.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe04.jpg",
        },
        {
          cardName: "Five of Pentacles",
            
          cardMeaning: "You'll be shooting yourself in the foot if you do.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe05.jpg",
        },
        {
          cardName: "Six of Pentacles",
           
          cardMeaning: "But don't be scared to ask for help.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg",
        },
        {
          cardName: "Seven of Pentacles",
            
          cardMeaning:
            "Practice just a little more patience until the time is right.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe07.jpg",
        },
        {
          cardName: "Eight of Pentacles",
           
          cardMeaning: "But remember, it's the little things that count.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe08.jpg",
        },
        {
          cardName: "Nine of Pentacles",
           
          cardMeaning: "You are in sync with the Universe.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg",
        },
        {
          cardName: "Ten of Pentacles",
            
          cardMeaning: "Take some time to relish what is already yours.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pe10.jpg",
        },
        {
          cardName: "Page of Pentacles",
            
          cardMeaning: "It will quickly end in tears, for all involved.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg",
        },
        {
          cardName: "Knight of Pentacles",
           
          cardMeaning:
            "But be mindful of doing it right the first time, even if it is the long way around.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg",
        },
        {
          cardName: "Queen of Pentacles",
           
          cardMeaning: "You're in safe hands.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg",
        },
        {
          cardName: "King of Pentacles",
           
          cardMeaning: "Only if you're willing to pay attention to good advice.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/peki.jpg",
        },
      ];

      const drawnCard = Math.ceil(Math.random() * 78);

      const drawnCardName = dailyTarot[`${drawnCard}`].cardName;
      const drawnCardImage = dailyTarot[`${drawnCard}`].cardImage;
      const drawnCardMessage = dailyTarot[`${drawnCard}`].cardMeaning;
      
    
      const drawnCardContainer = document.querySelector("#lhsCardTop");  

      const div = document.createElement("div");
      drawnCardContainer.classList.add("lhsCardTop");
      const drawnHTML = `
      <div class="container-fluid p-2">
        <div class="dailyCardHeader">
        <h6>Daily Tarot Meditation</h6>
        <p>Note the card's meaning as the day begins. Later, notice the card's manifestation in your day.</p>
        </div>
           
            <div class="dailyCardImage">
                <img src="${drawnCardImage}">
            </div>

            <div class="dailyCardName">
            <h5>${drawnCardName}</h5>
                </div>  
                <div class="dailyCardMessage p-2">
                    <p>${drawnCardMessage}</p>
                </div>
     </div>`;
      
     drawnCardContainer.innerHTML = drawnHTML;
     drawnCardContainer.appendChild(div);
};

function dailyCardChange(time, func){
    let currentTime = new Date().getTime();
    if(currentTime>time){
        return false;
    }
    setTimeout(func, time-currentTime);
    return true;
}

$(document).ready(function() {
    dailyCardChange(new Date().setTime(new Date().getTime+2000), dailyCardDraw)
});