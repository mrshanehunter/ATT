function dailyCardDraw () {

    const dailyTarot = [
        {
          cardName: "The Fool",  
          cardMeaning: "The first card in the deck, it signifies infinite possibilities, new beginnings, innocence, originality & freedom.<br> The card is also symbolic of free-spiritedness, spontaneity, adventure & idealism.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg",
        },
        {
          cardName: "The Magician",           
          cardMeaning: "The embodiment of will power & manifestation. Symbolic of skill & ability and resourcefulness, it can also signify desire & concentration. A reminder of infinite possibilites of creation by will.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg",
        },
        {
          cardName: "The High Priestess",    
          cardMeaning: "Related to inner knowledge & intuition. Depicts 'the divine feminine' archetype - mysterious & secretive, she holds the answers to the deep unknowns of self, nature & spirituality.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg",
        },
        {
          cardName: "The Empress",           
          cardMeaning: "Symbolises abundance, fertility, beauty, nature, and creativity. The card is also representative of a Mother Earth type ideal, connecting with our feminine side & sensuality. ",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg",
        },
        {
          cardName: "The Emperor",           
          cardMeaning: "Signifies control, authority, order, discipline and honor. Sybmobic of a wisdom gained through experience and indicative of a strategic thinker who puts plan into action & sees it through to completion. ",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg",
        },
        {
          cardName: "The Hierophant",           
          cardMeaning: "Indicative of conforming & conventionality. It signifies a deep sense of tradition & the values, morals & beliefs that go with it - some religious overtones - and the passing down / sharing of those traditions. ",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg",
        },
        {
          cardName: "The Lovers",           
          cardMeaning: "Its obvjous meaning is love & romance. It also symbolises partnerships, relationships & unity, which can also signify balance. It can indicate free flowing communication and can also represent a choice to be made. ",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg",
        },
        {
          cardName: "The Chariot",   
          cardMeaning: "Symbolises the overcoming of challenges to achieve success through sheer will power in a calm & controlled manner. This also extends to ideas of determination, ambition, self-discioline & focus.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg",
        },
        {
          cardName: "Strength",
          cardMeaning: "Signifies courage, bravery and a sense of inner power that can recognise the need for compassion. It symbolises self-confidence & an ability to remain calm & disciplined, even in the face of adversity.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg",
        },
        {
          cardName: "The Hermit",            
          cardMeaning: "Symbolic of a spiritual level of self-awareness & understanding that can only be attained through self-reflection & instrospection. It signifies a need for solitude & contemplation or a withdrawal from a situation.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg",
        },
        {
          cardName: "Wheel Of Fortune",           
          cardMeaning: "Represents the idea that everything is cyclical - good times come & go, as do bad. It is a symbol of fate, luck, fortune, & change. It can also symbolise a decisive moment or unexpected event.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg",
        },
        {
          cardName: "Justice",            
          cardMeaning: "Indicative of truth, fairness, honesty, justice, and the law. Symbolises the idea of cause & effect, and karma. Signifies we will all be judged, the need for accountability & an awareness of the consequences of our actions.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg",
        },
        {
          cardName: "The Hanged Man",            
          cardMeaning: "Can represent a 'one step back two steps forward' kind of self sacrifice for personal gain. Symbolises adoipting a different or new perspective. It can also signify uncertainty, a lack of direction or biding time waiting.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg",
        },
        {
          cardName: "Death",           
          cardMeaning: "It derives its meaning in the figurative sense. Symbolises change or transition, transformation, endings, release, and letting go. It represents the idea that you need to close one door before opening another.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg",
        },
        {
          cardName: "Temperance",           
          cardMeaning: "Symbolises the ideals of moderation, balance and patience that in turn deliver harmony, tranquility, peace & calm. It also suggests avoiding the chaos of extremes by choosing to remain centered & serene.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg",
        },
        {
          cardName: "The Devil",            
          cardMeaning:"Signifies a loss of personal power, emptiness or lack of fulfilment, becoming enslaved or feelings of oppression, restriction  or limitation in some way.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg",
        },
        {
          cardName: "The Tower",  
          cardMeaning: "Symbolises the chaos, fear - even terror - sudden and unexpected upheaval or change can bring about. It signifies a ground-breaking change or transformation requiring a new foundation or basis.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg",
        },
        {
          cardName: "The Star",
          cardMeaning: "Signfies that hope, faith & positivity can rejuvenate the inner strength & power needed to carry on with life. It symbolises that we have all we need for our own fulfilment & how abundantly blessed we truly are - even if it isn't obvious in the moment.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg",
        },
        {
          cardName: "The Moon",   
          cardMeaning: "It symbolises hidden secrets, uncertainty, and the confusion opposing forces - like good & evil - can cause. It can also signify the need to tap into intuition to see through an illusion.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg",
        },
        {
          cardName: "The Sun", 
          cardMeaning: "Symbolic of the energy of life itself, it signifies joy, vitality, optimism and confidence. A symbol of child-like innocence suggests that happiness occurs when we have nothing & can be our true & authentic self.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg",
        },
        {
          cardName: "Judgement", 
          cardMeaning: "Suggests time for self-reckoning & reflection is needed. It symbolises an awakening, renewal, purpose. It can mean a significant time in your life is approaching where you must start to evaluate yourself & your actions.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg",
        },
        {
          cardName: "The World",   
          cardMeaning: "Symbolises accomplishment. assured success, completion - coming full or situations coming to a close, harmony, a sense of belonging. It can also signify travel or a change of location.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg",
        },
        {
          cardName: "Ace of Wands", 
          cardMeaning: "Symbolises creativity, invention, enterprise. Signifies the origin, source or beginning of something new & enterprising - suggests material benefit will follow. Can also indicate origin, birth, family.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waac.jpg",
        },
        {
          cardName: "Two of Wands", 
          cardMeaning: "Symbolises forward planning, progression, momentum, decisions to be made. Signifies broadening of horizons, leaving a comfort zone. Thirst for adventure, discovery & experience.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg",
        },
        {
          cardName: "Three of Wands",  
          cardMeaning: "Symbolises foresight, lookiing ahead, growth, expansion, confidence, Signifies putting considered plans into action can create a stable foundation for the future. It can also indcate the need to keep plans dynamic & be open to unforseen opportunities that may present themselves.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg",
        },
        {
          cardName: "Four of Wands",
          cardMeaning: "Symbolises a happy & harmonious home life, with stability & security. Signifies a period of balance and suggests now is a good time to gather friends and family and enjoy a time of happiness & peace. Can also indicate the achievement of a significant milestone in a project or endeavour, giving cause for celelbration.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg",
        },
        {
          cardName: "Five of Wands",
            
          cardMeaning: "Symbolises conflict, tension, rivalry, competition, arguments, clashing of egos, winning at all costs. Can also signify a breakdown in communication, miscommunication leading to disagreements.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg",
        },
        {
          cardName: "Six of Wands",  
          cardMeaning: "Symbolises public recognition for great success or achievement. Overcoming obstacles to fulfil an objective that others recognise for its difficulty.  The card can also be a reminder that pride comes before a fall - keeping ego in check is a way to keep the crowds cheering for you.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg",
        },
        {
          cardName: "Seven of Wands",
          cardMeaning: "Symbolises standing up for yourself, protecting what's become yours through hard work & achievement, protecting your territory, self-defence. Signifies that others are looking to usurp your place / status / achievement and that you will need to battle to maintain what you've attained.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg",
        },
        {
          cardName: "Eight of Wands",
          cardMeaning: "Signifes rapid action, quick decisions, sudden change, progress, speed, momentum, Symbolises an eventful & exciting time - for those who embrace change. It can also indicate that time for being on the defensive is over and greater progress can now be made without having to look over your shoulder.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg",
        },
        {
          cardName: "Nine of Wands",
          cardMeaning:"This card is the symbol of one great last hope. When whatever life has put you through, and your energy & will have ebbed away to almost nothing, this card signifies that you need to go on, because while you still have trials to face, the biggest ones are now behind you. Symbolises hope, encouragement, & courage. ",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg",
        },
        {
          cardName: "Ten of Wands",
          cardMeaning: "Past struggles have left their mark, but the card ultimately signifies the success & achievement that hard work & dedication can bring.  But with that comes responsiblity.  Now is not the time to relax too much, as without your watchful eye, eveything you've worked for could be gone.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg",
        },
        {
          cardName: "Page of Wands",
          cardMeaning: "Symbolises the wonder & excitement of youthful discovery, adventure & anticipation.  Full of passion & ideals, but very little real experience.  This creates an inertia or a focus on the minutia of one particular curiosity or idea to the exclusion of all others - so that nothing is achieved & opportunities wasted.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg",
        },
        {
          cardName: "Knight of Wands",
          cardMeaning: "Symbolises and adventurous spirit, full of life & energy, ambitious to get things done. Signifies a good time to travel, or move house. It can also mean to consider carefully the consequences of your actions if starting out on any new creative or endeavours, and be prepared for them",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg",
        },
        {
          cardName: "Queen of Wands",  
          cardMeaning: "Generally depicats a person of extreme focus & firey passion. Completely individual, they are also courageous, but may at times appear to be self-centred.  They exude a positive & uplifting energy and they signify someone that will have your back & is will to stand by you & stand up for you.",
          cardImage: "https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg",
        },
        {
          cardName: "King of Wands",
          cardMeaning: "Symbolises pure energy. Less creatively focused than the rest of the suit, this card signifies an implementer, someone that is extremely capable & a natural born leader. Committed & focused, goals become achievements in this persons realm.",
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
        <div class="dailyCardHeader mt-2 mb-2">
        <h6>Tarot Meditation</h6>
        <p>Note the card's meaning as the day begins. Later, notice the card's manifestation in your day.</p>
        </div> 
        <hr>   
            <div class="dailyCardImage mt-3 mb-3">
                <img src="${drawnCardImage}">
            </div>

            <div class="dailyCardName">
            <h5>${drawnCardName}</h5>
                </div> 
        <hr>         
                <div class="dailyCardMessage mb-2 pt-2 pl-3 pr-3">
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