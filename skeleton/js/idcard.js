//#############################################################################
//#############################################################################
//
// ID Card Generator Script
// Contains functions and data which generate a portrait for the ID
// andrei@planet34.org 2014
//
//#############################################################################
//#############################################################################





//#############################################################################
// Portrait components files list
//#############################################################################





var aIDCollar = ["collar01","collar02","collar03","collar04","collar05","collar06","collar07","collar08","collar09","collar10"];
var aIDEyes = ["eyes01","eyes02","eyes03","eyes04","eyes05","eyes06","eyes07","eyes08","eyes09","eyes10"];
var aIDHead = ["head01","head02","head03","head04","head05","head06","head07","head08","head09","head10"];
var aIDJawline = ["jawline01","jawline02","jawline03","jawline04","jawline05","jawline06","jawline07","jawline08","jawline09","jawline10"];
var aIDMouth = ["mouth01","mouth02","mouth03","mouth04","mouth05","mouth06","mouth07","mouth08","mouth09"];
var aIDNose = ["nose01","nose02","nose03","nose04","nose05","nose06","nose07","nose08","nose09","nose10"];
var aIDAccessory = ["acc01","acc02","acc03","acc04","acc05","acc06"];





//#############################################################################
// Generate a person using main.js
//#############################################################################





function generateIDCardDetails () {

}





//#############################################################################
// Generate a Portrait and write IMAGES to HTML
//#############################################################################





function fGenerateIDCard () {
  //Generate person data using RandomPerson
  person9 = new RandomPerson (nameData);
      $( "#IDFirstName" ).text( person9.sPrsFirstName);
      $( "#IDLastName" ).text( person9.sPrsLastName);
      $( "#IDAgeGender" ).text( person9.iPrsAge + ", " + person9.sPrsGender);
      $( "#IDNationality" ).text( person9.sPrsType);
      $( "#IDIndustry" ).text( person9.sPrsJobCat);
      $( "#IDJobTitle" ).text( person9.sPrsJobTitle);

  //Select random images
  var collar = randomSelectArray (aIDCollar);
  $("#IDCollar").attr("src", "images/portrait/" + collar + ".png");
  var eyes = randomSelectArray (aIDEyes);
  $("#IDEyes").attr("src", "images/portrait/" + eyes + ".png");
  var head = randomSelectArray (aIDHead);
  $("#IDHead").attr("src", "images/portrait/" + head + ".png");
  var jawline = randomSelectArray (aIDJawline);
  $("#IDJawline").attr("src", "images/portrait/" + jawline + ".png");
  var mouth = randomSelectArray (aIDMouth);
  $("#IDMouth").attr("src", "images/portrait/" + mouth + ".png");
  var nose = randomSelectArray (aIDNose);
  $("#IDNose").attr("src", "images/portrait/" + nose + ".png");
  var accessory = randomSelectArray (aIDAccessory);
  $("#IDAcc").attr("src", "images/portrait/" + accessory + ".png");
}





//#############################################################################
// Attach script to a button on the interface
//#############################################################################




$( "#generateButton" ).click(function() {
  fGenerateIDCard ();
});
