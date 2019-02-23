exports.handler = function(context, event, callback) {
    
	var response = new Twilio.twiml.VoiceResponse();
	
	response.say("You have reached Matt Vaughan's message service. Record your message, when you are done, you may wait or press star.");
	response.record({
	   method: "post",
	   action: "/message-voice",
	   maxLength: 25,
	   finishOnKey: "*"
	});

	response.say("I could not hear you. Your message was not sent. Good bye!");	

	callback(null, response);
};
