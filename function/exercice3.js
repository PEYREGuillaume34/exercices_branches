
function sendMessage(message, fromName, toName)
{
    console.log("From : " + fromName +" "+ "to " + toName + " Message : " + message)}

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
// sendMessage()
sendMessage("Super on se voit mardi !", "Linda", "Marc")

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"
sendMessage(myMessage, contactName, myName)