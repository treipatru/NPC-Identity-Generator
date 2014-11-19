///////////////////////////////////////////////////////////////////////////////
//peopleGen
/******************************************************************************
To Do:
> Externalise the data used by the script (JSON)
> Use a normal distribution for the professionals age bracket
> Create middle names for people whose culture usually has them

******************************************************************************/
///////////////////////////////////////////////////////////////////////////////
//HELPER FUNCTIONS
//*****************************************************************************
//Used in the main functions
///////////////////////////////////////////////////////////////////////////////

function randomWeighted (values, valuesWeight) {
    var aWeightedValues = [];
    
    for (var i = 0; i < values.length; i++) {
        for (var j = 0; j < valuesWeight[i]; j++) {
            aWeightedValues.push(values[i]);
        }
    }
    var randomPick = Math.floor(Math.random() * aWeightedValues.length);
    return aWeightedValues[randomPick];
    //!!For accurate percentages make sure the valuesWeight adds up to 100!
}

function randomInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function AJAX_JSON_Req(url) {
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var response = JSON.parse( AJAX_req.responseText );
            document.write( response.name );
        }
    };
    AJAX_req.send();
}

///////////////////////////////////////////////////////////////////////////////
//LOAD DATA
//*****************************************************************************
 


///////////////////////////////////////////////////////////////////////////////
//PERSON VARIABLES
//*****************************************************************************
//Used in the final output
///////////////////////////////////////////////////////////////////////////////

var sPrsType;
var sPrsGender;
var sPrsFirstName;
var sPrsLastName;
var sPrsFullName;
var iPrsAge;
var sPrsAgeBracket;
var sPrsJobCat;
var sPrsJobTitle;
var oIdCard = {};



///////////////////////////////////////////////////////////////////////////////
//MAIN FUNCTIONS
//*****************************************************************************
//Used in the main functions of generator
///////////////////////////////////////////////////////////////////////////////

//*****************************************************************************
//Generate TYPE of person > update and return sPrsType

oAllNames.generateNameType = function () {
    //Select type of name according to weight of the type
    var aPeopleTypes = Object.keys(this);
    aPeopleTypes.pop();
    
    sPrsType = randomWeighted (aPeopleTypes,this.typeWeight);

    return(sPrsType);
};

//*****************************************************************************
//Generates FIRST and LAST NAME of person > update sPrsFirstName, 
//sPrsLastName and sPrsFullName; return sPrsFullName

oAllNames.generateFullName = function (sType) {
    var iGenderSelector = Math.floor(Math.random() * 10 + 1);
    //Go through all items in the object and look for a type defined as sPrsType
    for (var key in oAllNames) {
        if (oAllNames.hasOwnProperty(key)) {
            if (key === sPrsType) {     
                //When the type is a match first do a random 50/50 to see if it's male or female
                if (iGenderSelector <= 5) {
                    var iMaleSelection = Math.floor(Math.random() * this[sPrsType].firstNameMale.length);
                    sPrsGender = "male";
                    sPrsFirstName = (this[sPrsType].firstNameMale[iMaleSelection]);
                } else {
                    var iFemaleSelection = Math.floor(Math.random() * this[sPrsType].firstNameFemale.length);        
                    sPrsGender = "female";
                    sPrsFirstName = (this[sPrsType].firstNameFemale[iFemaleSelection]);
                }
                var iLastNameSelection = Math.floor(Math.random() * this[sPrsType].lastName.length);
                sPrsLastName = (this[sPrsType].lastName[iLastNameSelection]);
            }
        }
    }
    sPrsFullName = (sPrsFirstName + " " + sPrsLastName);
    return sPrsFullName;
};

//*****************************************************************************
//Generate AGE of the person > update and return iPrsAge

oAllNames.generateAge = function () {
    var aAgeBrackets = ["kid", "student", "professional", "elder"];
    var aAgeBracketWeight = [15, 17, 56, 12];
    //Get weighted age group
    sPrsAgeBracket = randomWeighted (aAgeBrackets, aAgeBracketWeight);
    //Get a random age from the specific bracket
    if (sPrsAgeBracket === "kid") {
        iPrsAge = randomInterval(8, 18);
    }else if (sPrsAgeBracket === "student"){
        iPrsAge = randomInterval(19, 24);
    }else if (sPrsAgeBracket === "professional") {
        iPrsAge = randomInterval(25, 64);
    }else {
        iPrsAge = randomInterval(65, 108);
    }
    return(iPrsAge);
};

//*****************************************************************************
//Run all generate functions > return an object with all details

generateId = function () {
    var oAllNames = {};
    oAllNames = AJAX_JSON_Req('nonNativeNames.json');
    oIdCard.type = this.generateNameType ();
    this.generateFullName ();
    oIdCard.gender = sPrsGender;
    oIdCard.firstName = sPrsFirstName;
    oIdCard.lastName = sPrsLastName;
    this.generateAge();
    oIdCard.ageBracket = sPrsAgeBracket;
    oIdCard.age = iPrsAge;
    document.write (oIdCard);

};

//*****************************************************************************
//Run functions

oIdCard = oAllNames.generateId();

function debug () {
    // document.write("<p>" + "type of oAllNames: " + typeof oAllNames + "</p>");
    // document.write("<p>" + oAllNames + "</p>");
    document.write("<p>" + typeof oIdCard + "</p>");
}

//*****************************************************************************
//Debugging output