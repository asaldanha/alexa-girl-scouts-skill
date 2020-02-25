// JavaScript source code
'use strict';

//import ask-sdk-core
const Alexa = require('ask-sdk-core');

//skill name
const appName = 'Girl Scouts';

//code for the handlers
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        //welcome message
        let speechText = 'Welcome to Girl Scouts';
        //welcome screen message
        let displayText = "Welcome to Girl Scouts";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, displayText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

//implement custom handlers

const CookieIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CookieIntent';
    },
    handle(handlerInput) {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

       // let slots = handlerInput.requestEnvelope.request.type.slots.cookie.value;
      //  console.log("Slots Value  *****" + slots);
    
    let speechText = 'Would you like to hear more about Girl Scout Cookies?';
        return handlerInput.responseBuilder
        .speak(speechOutput)
        .reprompt(speechText)
        .withSimpleCard(appName, randomFact)
        .withShouldEndSession(false)
        .getResponse();
    }
};

const GET_FACT_MESSAGE = 'Here\'s some Girl Scout cookies: ';

const data = [
  'Toffee-Tastic cookies are Indulgently rich, buttery cookies with sweet, crunchy golden toffee bits. A gluten-free variety offered only in select Girl Scout council markets for as long as supplies last.',
  'Caramel Chocolate Chip cookies areRich caramel, semisweet chocolate chips, and a hint of sea salt in a chewy cookie. Gluten-free Caramel Chocolate Chip cookies are offered only in select Girl Scout council markets for as long as supplies last.',
  'Savannah Smiles are zesty, lemon-flavored cookies dusted with powdered sugar.',
  'Thanks-A-Lot are  tasty shortbread cookies with fudge on the bottom.',
  'Do-si-dos or Peanut Butter Sandwich cookies are  crisp and crunchy oatmeal on the outside and creamy peanut butter inside',
  'Lemonades are tangy lemon-icing-topped shortbread cookies.',
  'Peanut Butter Patties or Tagalongs are cookies with a layer of peanut butter with a rich chocolaty coating',
  'Trefoils or Shortbread cookies are cookies are shortbread cookies, each one in the shape of our iconic trefoil.',
  'Thin Mints are round, mint-flavored cookies with a delicious chocolaty coating.',
  'Caramel de Lites or Samoas are caramel and toasted coconut-covered cookies.',
  'There are two types of Girl Scout S\'mores cookies. One of them is crispy graham cookie double dipped in yummy crème icing and finished with a scrumptious chocolatey coating, and the other is  crunchy graham sandwich cookies with creamy chocolate and marshmallowy filling. '
];

//FAQ for cookies section

const CookieBeneGirlHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CookieBeneGirlIntent';
    },
    handle(handlerInput) {
        let speechText = 'The cookies help girls build a lifetime of confidence, as well as develop five important skills, goal setting, decision making, money management, people skills, and business ethics.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

 const WhoBakesCookiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhoBakesCookiesIntent';
    },
    handle(handlerInput) {
        let speechText = 'Two Commercial bakers are licensed by Girl Scouts of the USA to produce Girl Scout Cookies: ABC Bakers and Little Brownie Bakers.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

 const KosherCookiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'KosherCookiesIntent';
    },
    handle(handlerInput) {
        let speechText = 'Yes, all Girl Scout Cookies are kosher. For more information about cookies ingredients visit our bakers websites at abcbakers.com or  at littlebrowniebakers.com.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

 const CharitableCookiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'CharitableCookiesIntent';
    },
    handle(handlerInput) {
        let speechText = 'Girls may participate in a council-approved "Gift of Caring" or "Cookie Share" program that allows girls to collect donations of cookies for military personnel or local charities.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

 const GirlSafeCookiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GirlSafeCookiesIntent';
    },
    handle(handlerInput) {
        let speechText = 'Depending on their age, Girl Scouts must be accompanied or supervised by an adult when selling and delivering Girl Scout Cookies or use the buddy system when selling and delivering door-to-door. Adults must be present at all times during cookie booth sales.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

 const WhenBuyCookiesHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'WhenBuyCookiesIntent';
    },
    handle(handlerInput) {
        let speechText = 'Girl Scout Cookies can be purchased from girls participating in the Girl Scout Cookies Program, only during your local council cookie season. Find when you can buy cookies on our website at girlscouts.org'
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();  
    }
 };

//about Girl Scouts

 const GSBeneGirlHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSBeneGirlIntent';
    },
    handle(handlerInput) {
        let speechText = 'Girl Scouts helps girls develop a strong sense of self, seek challenges and learn from setbacks. It allows them to display positive values, form and mantain healthy relationships. It also teaches them to identify and solve problems in the community.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const GSStartCampingHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSStartCampingIntent';
    },
    handle(handlerInput) {
        let speechText = 'There is no set age for camping, just a need for individual and troop/group readiness for the experience.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const GSHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSIntent';
    },
    handle(handlerInput) {
        let speechText = 'You can sign up for Girl Scouts on the Girl Scout website at girlscouts.org.';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const GSTransgenderHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSTransgenderIntent';
    },
    handle(handlerInput) {
        let speechText = 'Girl Scouts is proud to be the premier leadership organization for girls in the country. If the child is recognized by the family and school/community as a girl, then Girl Scouts is an organization that can serve her in a setting that is both emotionally and physically safe.'
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const GSLevelsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSLevelsIntent';
    },
    handle(handlerInput) {
        let speechText = 'The different levels of Girl Scouts are Daisies, Brownies, Juniors, Cadettes, Seniors and Ambassadors.'
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

//about Girl Scouts Awards

 const GSAwardsHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GSAwardsIntent';
    },
    handle(handlerInput) {
        let speechText = 'Girl Scouts can earn their Bronze, Silver, Gold Awards. All awards that help recongize what a girl has done to help her community and make the world a better place';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
 };

520
//end Custom handlers

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        //help text for your skill
        let speechText = 'You can ask me about Girl Scouts';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};


const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
			&& handlerInput.requestEnvelope.request.intent.name === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        //help text for your skill
        let speechText = 'Sorry, I do not know anything about that.';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const CancelIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent');
    },
    handle(handlerInput) {
        let speechText = 'Okay, what can I do for you?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(appName, speechText)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const StopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        let speechText = 'Okay, this session is over';
        return handlerInput.responseBuilder
            .speak(speechText)
			.withSimpleCard(appName, speechText)
			.withShouldEndSession(true)
            .getResponse();
    }
};

//Lambda handler function
//Remember to add custom request handlers here
exports.handler = Alexa.SkillBuilders.custom()
     .addRequestHandlers(LaunchRequestHandler,
//Girl Scout Cookies
                         CookieIntentHandler,
                         CookieBeneGirlHandler,
                         WhoBakesCookiesHandler,
                         KosherCookiesHandler,
                         CharitableCookiesHandler,
                         GirlSafeCookiesHandler,
                         WhenBuyCookiesHandler,
//Girl Scouts General
                         GSBeneGirlHandler,
                         GSStartCampingHandler,
                         GSHandler,
                         GSAwardsHandler,
                         GSTransgenderHandler,
                         GSLevelsHandler,
//Basic Handlers
                         HelpIntentHandler,
						 CancelIntentHandler,
						 StopIntentHandler,
						 FallbackIntentHandler)
     .lambda();
     
// const ExampleHandler = {
//    canHandle(handlerInput) {
//        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
//            && handlerInput.requestEnvelope.request.intent.name === 'ExampleIntent';
//    },
//    handle(handlerInput) {
//        let speechText = 'This is an example sentence.';
        
//        return handlerInput.responseBuilder
//            .speak(speechText)
//            .withSimpleCard(appName, speechText)
//            .withShouldEndSession(false)
//            .getResponse();
//      }
// };