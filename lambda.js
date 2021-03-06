'use strict';
var Alexa = require('alexa-sdk');

var SKILL_NAME = 'Chemistry Facts';
var GET_FACT_MESSAGE = " ";
var HELP_MESSAGE = 'You can say tell me a chemistry fact, or, you can say exit... What can I help you with?';
var HELP_REPROMPT = 'What can I help you with?';
var STOP_MESSAGE = 'Goodbye!';

var data = [
    "The only elements that are liquid at room temperature are bromine and mercury. However, you can melt gallium by holding a lump in the warmth of your hand.",
    "Unlike many substances, water expands as it freezes. An ice cube takes up about 9% more volume than the water used to make it.",
    "If you pour a handful of salt into a full glass of water, the water level will actually go down rather than overflowing the glass.",
    "Similarly, if you mix half a liter of alcohol and half a liter of water, the total volume of the liquid will be less than one liter.",
    "There is about 1/2 lb or 250 g of salt (NaCl) in the average adult human body.",
    "A pure element can take many forms. For example, diamond and graphite both are forms of pure carbon.",
    "Many radioactive elements actually do glow in the dark.",
    "The chemical name for water (H2O) is dihydrogen monoxide.",
    "The only letter that doesn't appear on the periodic table is J.",
    "Lightning strikes produce O3, which is ozone, and strengthen the ozone layer of the atmosphere.",
    "The only two non-silvery metals are gold and copper.",
    "Although oxygen gas is colorless, the liquid and solid forms of oxygen are blue.",
    "The human body contains enough carbon to provide 'lead' (which is really graphite) for about 9,000 pencils.",
    "Hydrogen is the most abundant element in the universe, while oxygen is the most abundant element in the earth's atmosphere, crust, and oceans (about 49.5%).",
    "The rarest naturally-occurring element in the earth's crust may be astatine. The entire crust appears to contain about 28 g of the element.",
    "Hydrofluoric acid is so corrosive that it will dissolve glass. Although it is corrosive, hydrofluoric acid is considered to be a 'weak acid'.",
    "One bucket full of water contains more atoms than there are buckets of water in the Atlantic ocean.",
    "Approximately 20% of the oxygen in the atmosphere was produced by the Amazon rainforest.",
    "Helium balloons float because helium is lighter than air.",
    "Bee stings are acidic while wasp stings are alkaline.",
    "Hot peppers get their heat from a molecule called capsaicin. While the molecule acts as an irritant to mammals, including humans, birds lack the receptor responsible for the effect and are immune to the burning sensation from exposure.",
    "It's possible to die from drinking too much water.",
    "Dry ice is the solid form of carbon dioxide, CO2.",
    "Liquid air has a bluish tint, similar to water.",
    "You can't freeze helium simply by cooling it to absolute zero. It will freeze if you apply extremely intense pressure.",
    "By the time you feel thirsty, you've already lost about 1% of your body's water.",
    "Mars is red because its surface contains a lot of iron oxide or rust.",
    "Sometimes hot water freezes more quickly than cold water! A high school student documented the effect, which bears his name (the Mpemba effect)."
];

var handlers = {
    'LaunchRequest': function () {
        this.response.speak("Hello, Welcome to chemistry facts.");
        this.emit(':responseReady');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
