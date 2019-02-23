exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
    let client = context.getTwilioClient();
    
    let  msg = "The caller " + event.From + " said the following \n";
    msg = msg + event.TranscriptionText + "\n" + event.RecordingUrl;
    
    client.messages.create({
       to: "+19783879792",
       from: "+16173351304",
       body: msg
    })
    .then( message => console.log(message.status))
    .done();
	
	twiml.say("Your message has been sent! Good bye!");
	callback(null, twiml);
};
