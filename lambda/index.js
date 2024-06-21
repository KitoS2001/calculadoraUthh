/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Bienvenidos a Calculadora UTHH';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const SumaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'sumaIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;

        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 + numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la suma de ${numero1} más ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RestaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'restaIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;

        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 - numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la resta de ${numero1} menos ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MultiplicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'multiplicacionIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;

        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        const resultado = numero1 * numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la multiplicación de ${numero1} por ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DivisionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'divisionIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;
        const cantidadd = handlerInput.requestEnvelope.request.intent.slots.dos.value;

        const numero1 = Number(cantidad);
        const numero2 = Number(cantidadd);

        if (isNaN(numero1) || isNaN(numero2)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender los números. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        if (numero2 === 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no puedo dividir entre cero. Por favor, inténtalo de nuevo con un número diferente.')
                .getResponse();
        }

        const resultado = numero1 / numero2;
        const speakOutput = `Calculadora UTHH... El resultado de la división de ${numero1} entre ${numero2} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RaizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'raizIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.uno.value;

        const numero = Number(cantidad);

        if (isNaN(numero)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender el número. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        if (numero < 0) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no puedo calcular la raíz cuadrada de un número negativo. Por favor, inténtalo de nuevo con un número diferente.')
                .getResponse();
        }

        const resultado = Math.sqrt(numero);
        const speakOutput = `Calculadora UTHH... El resultado de la raíz cuadrada de ${numero} es igual a ${resultado}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ConversionUnidadesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
               Alexa.getIntentName(handlerInput.requestEnvelope) === 'conversionUnidadesIntent';
    },
    handle(handlerInput) {
        const cantidad = handlerInput.requestEnvelope.request.intent.slots.cantidad.value;
        const unidadOrigen = handlerInput.requestEnvelope.request.intent.slots.unidadOrigen.value;
        const unidadDestino = handlerInput.requestEnvelope.request.intent.slots.unidadDestino.value;

        const numero = Number(cantidad);

        if (isNaN(numero)) {
            return handlerInput.responseBuilder
                .speak('Lo siento, no pude entender la cantidad. Por favor, inténtalo de nuevo.')
                .getResponse();
        }

        let resultado;
        switch (unidadOrigen) {
            case 'metros':
                if (unidadDestino === 'pies') {
                    resultado = numero * 3.28084;
                } else if (unidadDestino === 'kilómetros') {
                    resultado = numero / 1000;
                }
                break;
            case 'pies':
                if (unidadDestino === 'metros') {
                    resultado = numero / 3.28084;
                }
                break;
            case 'kilómetros':
                if (unidadDestino === 'metros') {
                    resultado = numero * 1000;
                } else if (unidadDestino === 'millas') {
                    resultado = numero * 0.621371;
                }
                break;
            case 'millas':
                if (unidadDestino === 'kilómetros') {
                    resultado = numero / 0.621371;
                }
                break;
            default:
                return handlerInput.responseBuilder
                    .speak('Lo siento, no puedo convertir esas unidades. Por favor, inténtalo de nuevo.')
                    .getResponse();
        }

        const speakOutput = `Calculadora UTHH... ${cantidad} ${unidadOrigen} son ${resultado} ${unidadDestino}.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        SumaIntentHandler,
        RestaIntentHandler,
        ConversionUnidadesIntentHandler,
        MultiplicacionIntentHandler,
        DivisionIntentHandler,
        RaizIntentHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();