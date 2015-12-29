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
var aIDEars = ["ears01","ears02","ears03","ears04","ears05","ears06"];
var aIDEyes = ["eyes01","eyes02","eyes03","eyes04","eyes05","eyes06","eyes07","eyes08","eyes09","eyes10"];
var aIDHead = ["head01","head02","head03","head04","head05","head06","head07","head08","head09","head10"];
var aIDJawline = ["jawline01","jawline02","jawline03","jawline04","jawline05","jawline06","jawline07","jawline08","jawline09","jawline10"];
var aIDMouth = ["mouth01","mouth02","mouth03","mouth04","mouth05","mouth06","mouth07","mouth08","mouth09"];
var aIDNose = ["nose01","nose02","nose03","nose04","nose05","nose06","nose07","nose08","nose09","nose10"];






//#############################################################################
// Generate a Portrait and write to HTML
//#############################################################################





function fGenerateIDCard () {
  var collar = randomSelectArray (aIDCollar);
  $("#IDCollar").attr("src", "img/portrait/" + collar + ".png");
  var ears = randomSelectArray (aIDEars);
  $("#IDEars").attr("src", "img/portrait/" + ears + ".png");
  var eyes = randomSelectArray (aIDEyes);
  $("#IDEyes").attr("src", "img/portrait/" + eyes + ".png");
  var head = randomSelectArray (aIDHead);
  $("#IDHead").attr("src", "img/portrait/" + head + ".png");
  var jawline = randomSelectArray (aIDJawline);
  $("#IDJawline").attr("src", "img/portrait/" + jawline + ".png");
  var mouth = randomSelectArray (aIDMouth);
  $("#IDMouth").attr("src", "img/portrait/" + mouth + ".png");
  var nose = randomSelectArray (aIDNose);
  $("#IDNose").attr("src", "img/portrait/" + nose + ".png");
}





//#############################################################################
// Attach script to a button on the interface
//#############################################################################






$( "#refreshIDCard" ).click(function() {
    fGenerateIDCard ();
});
