//#############################################################################
//#############################################################################
//
// PEOPLE GENERATOR
// Contains main functions for generating people.
// andrei@planet34.org 2014
//
//#############################################################################
//#############################################################################





//#############################################################################
// ADDITIONAL FUNCTIONS
//#############################################################################





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





//#############################################################################
// DEFINE THE PEOPLE CONSTRUCTOR
//#############################################################################





// INITIALIZE THE OBJECT
//-----------------------------------------------------------------------------


function DataPack (nameSource, jobSource, charSource) {
    //Initialize Variables
    this.nameSource = nameSource;
    this.jobSource = jobSource;
    this.charSource = charSource;
    this.sPrsType = "";
    this.sPrsGender = "";
    this.sPrsFirstName = "";
    this.sPrsLastName = "";
    this.sPrsFullName = "";
    this.iPrsAge = 0;
    this.sPrsAgeBracket = "";
    this.sPrsJobCat = "";
    this.sPrsJobTitle = "";
    
}

// GENERATE PERSON TYPE
//-----------------------------------------------------------------------------


DataPack.prototype.generateNameType = function () {
    //Select type of name according to weight of the type
    var aPeopleTypes = Object.keys(this.nameSource);
    aPeopleTypes.pop();
    
    sPrsType = randomWeighted (aPeopleTypes,this.nameSource.typeWeight);
    return(sPrsType);
};


// GENERATE FULL NAME
//-----------------------------------------------------------------------------


DataPack.prototype.generateFullName = function () {
    var iGenderSelector = Math.floor(Math.random() * 10 + 1);
    //Go through all items in the object and look for a type defined as sPrsType
    for (var key in this.nameSource) {
        if (this.nameSource.hasOwnProperty(key)) {
            if (key === sPrsType) {     
                //When the type is a match first do a random 50/50 to see if it's male or female
                if (iGenderSelector <= 5) {
                    var iMaleSelection = Math.floor(Math.random() * this.nameSource[sPrsType].firstNameMale.length);
                    sPrsGender = "Male";
                    sPrsFirstName = (this.nameSource[sPrsType].firstNameMale[iMaleSelection]);
                } else {
                    var iFemaleSelection = Math.floor(Math.random() * this.nameSource[sPrsType].firstNameFemale.length);        
                    sPrsGender = "Female";
                    sPrsFirstName = (this.nameSource[sPrsType].firstNameFemale[iFemaleSelection]);
                }
                var iLastNameSelection = Math.floor(Math.random() * this.nameSource[sPrsType].lastName.length);
                sPrsLastName = (this.nameSource[sPrsType].lastName[iLastNameSelection]);
            }
        }
    }

    return [sPrsGender,sPrsFirstName, sPrsLastName];
};


// GENERATE AGE AND AGE BRACKET
//-----------------------------------------------------------------------------


DataPack.prototype.generateAge = function () {
    var aAgeBrackets = ["Kid", "Student", "Professional", "Elder"];
    var aAgeBracketWeight = [15, 17, 56, 12];
    //Get weighted age group
    sPrsAgeBracket = randomWeighted (aAgeBrackets, aAgeBracketWeight);
    //Get a random age from the specific bracket
    if (sPrsAgeBracket === "Kid") {
        iPrsAge = randomInterval(8, 18);
    }else if (sPrsAgeBracket === "Student"){
        iPrsAge = randomInterval(19, 24);
    }else if (sPrsAgeBracket === "Professional") {
        iPrsAge = randomInterval(25, 64);
    }else {
        iPrsAge = randomInterval(65, 108);
    }
    return [sPrsAgeBracket, iPrsAge];
};


// GENERATE JOB CATEGORY
//-----------------------------------------------------------------------------


DataPack.prototype.generateJobCat = function () {
    //Create an array of all jobs present in jobPackImport
    var aJobTypes = Object.keys(this.jobSource);
    aJobTypes.pop();

    //Select type of job according to weight of the type
    sPrsJobCat = randomWeighted (aJobTypes,this.jobSource.typeWeight);

    return (sPrsJobCat);
};


// GENERATE JOB TITLE
//-----------------------------------------------------------------------------


DataPack.prototype.generateJobTitle = function () {
    var selector;

    do {
        selector = Math.floor(Math.random() * this.jobSource[sPrsJobCat].gender.length);
        if (this.jobSource[sPrsJobCat].gender[selector] === sPrsGender || this.jobSource[sPrsJobCat].gender[selector] === 'u') {
        sPrsJobTitle = this.jobSource[sPrsJobCat].title[selector];
        return (sPrsJobTitle);
        }
    }
    while (this.jobSource[sPrsJobCat].gender[selector] != sPrsGender || this.jobSource[sPrsJobCat].gender[selector] != 'u');
};





//#############################################################################
// FUNCTION TO CREATE A PERSON OBJECT USING THE CONSTRUCTOR
//#############################################################################





function RandomPerson (dataObject) {
    //Generate everything and push them into a single array
    this.allInfo = [];
    this.allInfo.push (dataObject.generateNameType());
    this.allInfo.push (dataObject.generateFullName());
    this.allInfo.push (dataObject.generateAge());
    this.allInfo.push (dataObject.generateJobCat());
    this.allInfo.push (dataObject.generateJobTitle());

    //Extract final person values from array and clear the array
    this.sPrsType = this.allInfo[0];
    this.sPrsGender = this.allInfo[1][0];
    this.sPrsFirstName = this.allInfo[1][1];
    this.sPrsLastName = this.allInfo[1][2];
    this.sPrsFullName = (this.sPrsFirstName + " " + this.sPrsLastName);
    this.sPrsAgeBracket = this.allInfo[2][0];
    this.iPrsAge = this.allInfo[2][1];
    this.sPrsJobCat = this.allInfo[3];
    this.sPrsJobTitle = this.allInfo[4];
    this.allInfo = [];
}





//#############################################################################
// CREATE PEOPLE
//#############################################################################





// LOAD THE DATA INTO A SINGLE OBJECT
//-----------------------------------------------------------------------------

var nameData = new DataPack(namePackImport, jobPackImport);

// GENERATE JOB TITLE
//-----------------------------------------------------------------------------


function populateIndividuals () {    
    person1 = new RandomPerson (nameData);
        $( "#person1 #fullName" ).text( person1.sPrsFullName);
        $( "#person1 #gender" ).text( person1.sPrsGender);
        $( "#person1 #nationality" ).text( person1.sPrsType);
        $( "#person1 #age" ).text( person1.sPrsAgeBracket);
        $( "#person1 #industry" ).text( person1.sPrsJobCat);
        $( "#person1 #jobTitle" ).text( person1.sPrsJobTitle);
    person2 = new RandomPerson (nameData);
        $( "#person2 #fullName" ).text( person2.sPrsFullName);
        $( "#person2 #gender" ).text( person2.sPrsGender);
        $( "#person2 #nationality" ).text( person2.sPrsType);
        $( "#person2 #age" ).text( person2.sPrsAgeBracket);
        $( "#person2 #industry" ).text( person2.sPrsJobCat);
        $( "#person2 #jobTitle" ).text( person2.sPrsJobTitle);
    person3 = new RandomPerson (nameData);
        $( "#person3 #fullName" ).text( person3.sPrsFullName);
        $( "#person3 #gender" ).text( person3.sPrsGender);
        $( "#person3 #nationality" ).text( person3.sPrsType);
        $( "#person3 #age" ).text( person3.sPrsAgeBracket);
        $( "#person3 #industry" ).text( person3.sPrsJobCat);
        $( "#person3 #jobTitle" ).text( person3.sPrsJobTitle);
    person4 = new RandomPerson (nameData);
        $( "#person4 #fullName" ).text( person4.sPrsFullName);
        $( "#person4 #gender" ).text( person4.sPrsGender);
        $( "#person4 #nationality" ).text( person4.sPrsType);
        $( "#person4 #age" ).text( person4.sPrsAgeBracket);
        $( "#person4 #industry" ).text( person4.sPrsJobCat);
        $( "#person4 #jobTitle" ).text( person4.sPrsJobTitle);
    person5 = new RandomPerson (nameData);
        $( "#person5 #fullName" ).text( person5.sPrsFullName);
        $( "#person5 #gender" ).text( person5.sPrsGender);
        $( "#person5 #nationality" ).text( person5.sPrsType);
        $( "#person5 #age" ).text( person5.sPrsAgeBracket);
        $( "#person5 #industry" ).text( person5.sPrsJobCat);
        $( "#person5 #jobTitle" ).text( person5.sPrsJobTitle);
    person6 = new RandomPerson (nameData);
        $( "#person6 #fullName" ).text( person6.sPrsFullName);
        $( "#person6 #gender" ).text( person6.sPrsGender);
        $( "#person6 #nationality" ).text( person6.sPrsType);
        $( "#person6 #age" ).text( person6.sPrsAgeBracket);
        $( "#person6 #industry" ).text( person6.sPrsJobCat);
        $( "#person6 #jobTitle" ).text( person6.sPrsJobTitle);
}

populateIndividuals();

$( "#refreshPeople" ).click(function() {
    populateIndividuals();
});