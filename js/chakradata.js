
const displayChakra = document.getElementById('focalChakraBtn');





function focalChakra() {

const chakraData = [
{name: "Base",
attributes: "aterial world - Physical vitality - Survival - Instincts - Security - Grounding - Stability - Action - Perseverance - Foundation",
descpara: `Our primal energy center, this chakra is located at the base of the spine, and governs our basic survival needs.  Through it we connect to the earth & from here we get our sense of security, stability & safety.`,
colour: `Red`,
element: `Earth`,
astrology: `Capricorn / Aquarius`,
organs: `lower body, feet, legs, bones, genitals, kidney, bladder, anus, urethra, spine`,
balance: `sense of belonging, pride in heritage & family, sense of security & stability, connection with community, trusting, mind & body connection, connection with reality, feeling grounded, connected to earth & nature, feel a right to be on earth & to be, able to manifest goals, prosper, meet basic survival needs, feel fit & strong, healthy, balanced eating, organised, patient.`,
imbalance: `greed, jealousy, selfishness, addiction, focus on material possessions & money, self-indulgent, insecure, fears over safety, mistrusting , eating disorders, ailments with organs governed by the chakra, feeling disconnected or out of place, losing touch with reality, unable to let go of the past, feelings of instability or restlessness, restricted by family values.`,
imagesrc: `./assets/chakra/base.svg`,
},

{name: "Sacral",
attributes: `Emotions, Relationships, Control, Sensuality, Pleasure, Desires, Sexuality, Creativity, Healing`,
descpara: `Often referred to as "the seat of life", the sacral chakra is located between the navel & genitals in the lower abdomen. This energy center is the focal point of change, emotional connection, pleasure & balance, and our expression of sexuality & sensuality.`,
color: `Orange`,
element: `Water`,
astrology: `Pisces, Scorpio`,
organs: `lungs, kidneys, sexual organs, pelvs, lower back, reproductive system, urinary system, bladder, spleen colon, small intestine, immune system`,
balance: `positive body image, able to acknowledge & express feelings & desires easily, share emotions freely, undertaking activities purely for pleasure & enjoyment, express creatively, friendly, calm, kind, ability to let go, positive outlook on life, supportive, feel joy & passion, emotionally stable, able to nurture desires without being enslaved by them, comfortable with sex & sexuality & honouring boundaries`,
imbalance: `addictions, guilt, jealousy, trauma, repressing emotions, depression, over/under eating, feelings of undeserving of pleasure, unable to express feelings, extreme sexual boundaries, compulsion for "new" relationships or environments frequently, controlling or obsessive behaviour, unable or unwilling to socialise, connecting self-worth with material possessions / status, prioritising money or desires in decision making, over-exertion, physical ailments affecting the areas governed by this chakra`,
imagesrc: `./assets/chakra/sacral.svg`,

},

{
name: `Solar-plexus`,
attributes: `Intellect, Ambition, Strength of will, Individuality, Personal power, Self-worth, Ego, Personality, freedom of choice, "Inner Child" `,
descpara: `Home base for our self-esteem, ego & individuality & will-power, it's literally & figuratively at our centre. Located halfway between the naval & sternum, a beautifully balanced solar-plexus chakra gives meaning to the "feeling centered ideal.`,
color: `Yellow`,
element: `Fire`,
astrology: `Aries, Leo`,
organs: `stomach, spleen, meabolism, pancreas, liver, diaphragm`,
balance: `tolerance & accepting of others, confident, strength of will, assertive but not dominating, good sense of self & pride, analytical, acknowledge & admit mistakes, feel individual but remain connected to community, reliable, responsible, goal orientated, self-esteem & self-respect, can say no, maintain boundaries, feel in control, can set & manifest goals, motivated, recognise gut instincts clearly & acts on them, intellectually stimulated`,
imbalance: 'stubborn, passive, angry, lack confidence, fear rejection, supressed emotions, fear of being alone, weak sense of self, fear of power, indecisive, ego-focused, need to control or dominate, ailments of the organs governed by his chakra, loss of drive & direction, needing validation & approval from others, taking on too much, over-activity, self-worth conditional on possessions/need to material security, feelings of being overwhelmed or that you have no choice',    
imagesrc: `./assets/chakra/solar.svg`,
},

{
name: `Heart`,
attributes: `Love, Compassion, Universal Consciousness, Emotional balance, Forgiveness, Relationships`,
descpara: `With an electromagnetic field many times greater than the brain, the heart has an intelligence & wisdom that sees beyond the surface and finds & connects with the energy in each moment. Located midway between the neck & abdomen, with the actual heart, it is at its best when open to both giving & receiving equally.`,
color: `Green`,
element: `Air`,
astrology: `Libra, Taurus`,
organs: `heart, thymus, lungs,rib cage, blood, circulation, arms, wrists, hands`,
balance: ``,
imbalance: ``,
imagesrc: `./assets/chakra/heart.svg`,
},

{
name: `Throat`,
attributes: `Communication, Self-expression, Creativity, Expression of will, Divine guidance, Inner voice, Speaking one's truth`,
descpara: `The name also indicates ocation for the Throat chakra. This is where energy, power, courage, and pure creative expression are to be found, and shared from. It's also responsible for communication, with the element of sound / vibrations.`,
color: `Blue`,
element: `Sound (vibration)`,
astrology: `Gemini, Virgo, Sagittarius`,
organs: `throat, neck, jaw, thryoid, menstrual cycle, arms, digestive tract, vocal chords, ears, nose, mouth`,
balance: ``,
imbalance: ``,
imagesrc: `./assets/chakra/throat.svg`,
},

{
name: `Third Eye`,
attributes: `Spiritual awareness, seeing, insight, visualisation, intuition, psychic powers, vision, clairvoyance, imagination`,
descpara: `Sitting slightly higher than our eyes, and centred between the eyebrows, the Third Eye Chakra governs our intuition, imagination, visualisation and higher vision. Its vibrations come from inner sound & light, little wonder it is often called "the seat of the soul".`,
color: `Indigo`,
element: `Light`,
astrology: `Cancer`,
organs: `eyes, pituitary gland, autonomic nervous system, brain, mind, nose, ears`,
balance: ``,
imbalance: ``,
imagesrc: `./assets/chakra/thirdEye.svg`,
},

{
name: `Crown`,
attributes: `Spirituality, Energy, Connection with the Divine, Pure Awareness, Enlightenment, Fulfilmnent, Cosmic conssiousness, the Absolute, Grace, Inner Quest, Intelligence`,
descpara: `The "seat of enlightenment" as it's otherwise known, is located at the top, or "crown" of the head.  This is the energy centre for consciousness, transendence & divine union. To transcend from an understanding into an actual experience of being one with the living energy of the Universe, our greatest task in life, can only happen from here. `,
color: `Violet, white, gold`,
element: `Flow of thought, thought`,
astrology: `- `,
organs: `head, higher mind, pineal gland, upper brain, central nervous system`,
balance: `gratitude, feeling blissful, lightness, ability to find answers within yourself, self-knowledge, wisdom & clarity, aware of the unity of all life, living in the present, ability to tap into the universal consciousness, awareness & acceptance of a higher source, own spirituality, strong spiritual connection, charismatic, inquisitive, feeling connected to the greater world, have direction, purpose & meaning in life`,
imbalance: `disorders of the physical organs of the chakra (e.g. headaches), nervous or mental ailments, fear death & beyond, insomnia, self-limiting beliefs, feeling lost in life, living in the past or the future, confusion, fear, anxiety, depression, ignorance, selfishness, ego-based choices, closed mindedness, overly sceptical, directionless, searching for answers, feeling isolated & alone`,
imagesrc: `./assets/chakra/crown.svg`,
},

];

const focalChakra = Math.ceil(Math.random() * 7);

const focalChakraName = chakraData[`${focalChakra}`].name;
const focalChakraAttributes = chakraData[`${focalChakra}`].attributes;
const focalChakraDescPara = chakraData[`${focalChakra}`].descpara;
const focalChakraColor = chakraData[`${focalChakra}`].color;
const focalChakraElement = chakraData[`${focalChakra}`].element;
const focalChakraAstrology = chakraData[`${focalChakra}`].astrology;
const focalChakraOrgans = chakraData[`${focalChakra}`].organs;
const focalChakraBalance = chakraData[`${focalChakra}`].balance;
const focalChakraImbalance = chakraData[`${focalChakra}`].imbalance;
const focalChakraImageSrc = chakraData[`${focalChakra}`].imagesrc;

const focalChakraContainer = document.getElementById('focalModal');

const focalChakraHTML = `

<div class="modal fade" id="test" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-scrollable" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Chakra: ${focalChakraName}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <image style="position:absolute; top:0%; left:10%; width:60%;">
                            <img style="opacity:0.4;" src="${focalChakraImageSrc}"/>
                        </image>
                        <article style="position:absolute; top:1.5%; left:3.5%; margin-right:3.5%;">
                        <p><strong>Attributes: ${focalChakraAttributes}</strong></p>
                        <p>${focalChakraDescPara}</p>
                        <hr>
                      
                        <p><strong>Colour:</strong> ${focalChakraColor}<strong> &emsp; Element: </strong>${focalChakraElement} &emsp; <strong>Astrology: </strong>${focalChakraAstrology}</p>   
                      
                      <p><strong>Physically Governs:</strong> ${focalChakraOrgans}</p>
                        <hr>
                        <p>Balanced Characteristics: ${focalChakraBalance}</p>
                        <p>Signs of Potential Imbalance: ${focalChakraImbalance}</p>
                    </article>    
                    
                    </div>
                    <div class="modal-footer">
                     
                      <button type="button" class="button" id="modalBtn" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>`;

focalChakraContainer.innerHTML = focalChakraHTML;


const reset = document.querySelector(".modal");

reset.addEventListener("click", function (){

$('.modal').on('hidden.bs.modal', function () {
    focalChakraHTML.remove;
    //  location.reload();
    // //  render();
   })
})

}

displayChakra.addEventListener("click", focalChakra);