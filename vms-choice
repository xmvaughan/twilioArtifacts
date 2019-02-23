exports.handler = function(context, event, callback) {
	var response = new Twilio.twiml.VoiceResponse();
	const twilioClient = context.getTwilioClient();
	
	const speechResult = event.SpeechResult;
	console.log( speechResult );
	
	switch( speechResult.trim().toLowerCase() ) {
	    case "message":
	        // redirect to voicemail transcription
    	    response.redirect({ method: "post"}, '/gather-voice');
    	    callback(null, response) 
    	    break;
    	case "appointment":
    	    response.say('You got to the appointment block');
    	    callback(null, response);
    	    break;
	    case "urgent":
	        var numbersToMessage = [ "+19783879792", "+18573158026", "whatsapp:+19783879792", "sim:DE132737408146e38c8eae6087001c2a52" ];
	        numbersToMessage.forEach( function(to) {
	           twilioClient.messages.create({
                   from: event.From,
                   to: to,
                   body: "the caller needs you to call them back urgently"
                })
                .then( messages => console.log(message.status))
                .done();
	        });
	        response.say("Messages have been sent to Matt asking him to call immediately.");
	        callback(null, response );
          break;
          default:
            response.say("I didn't understand what you said, please try again.");
            response.redirect({ method: "post" }, '/vms-menu' );
            callback(null, response );
          break;
	}
	
	
};
