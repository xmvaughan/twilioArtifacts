
exports.handler = function(context, event, callback) {
    var twiml = new Twilio.twiml.VoiceResponse()

    twiml.say("You have reached Matt Vaughan.");
    
    var gather = twiml.gather({
        input : "speech",
        timeout: 10,
        hints: "appointment, message, urgent",
        action: "https://crimson-crab-4929.twil.io/vms-choice",
        method: "POST"
    });
    
    gather.say("To leave a message, say message. To schedule an apppointment, say appointment. If this is urgent just say urgent.");
    
    twiml.say("Terribly sorry, you really suck at speaking and pressing buttons... please try calling back when you learn to use the faculties provided to you upon creation");
    callback(null, twiml);
};
