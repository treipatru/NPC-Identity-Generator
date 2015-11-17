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





var aIDHead = ["head01", "head02", "head03"];
var aIDEyes = ["eyes01", "eyes02", "eyes03"];
var aIDMouth = ["mouth01", "mouth02", "mouth03"];
var aIDHair = ["hair01", "hair02", "hair03"];
var aIDAccessory = ["accessory01"];





//#############################################################################
// Generate a Portrait and write to HTML
//#############################################################################





function fGenerateIDCard () {
  var head = randomSelectArray (aIDHead);
  $("#IDHead").attr("src", "img/portrait/" + head + ".png");
  var eyes = randomSelectArray (aIDEyes);
  $("#IDEyes").attr("src", "img/portrait/" + eyes + ".png");
  var mouth = randomSelectArray (aIDMouth);
  $("#IDMouth").attr("src", "img/portrait/" + mouth + ".png");
  var hair = randomSelectArray (aIDHair);
  $("#IDHair").attr("src", "img/portrait/" + hair + ".png");
  // var accessory = randomSelectArray (aIDAccessory);
  // $("#IDAccessory").attr("src", "img/portrait/" + accessory + ".png");
}





//#############################################################################
// Attach script to a button on the interface
//#############################################################################






$( "#refreshIDCard" ).click(function() {
    fGenerateIDCard ();
});
