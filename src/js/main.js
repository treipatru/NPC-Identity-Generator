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
                    sPrsGender = "m";
                    sPrsFirstName = (this.nameSource[sPrsType].firstNameMale[iMaleSelection]);
                } else {
                    var iFemaleSelection = Math.floor(Math.random() * this.nameSource[sPrsType].firstNameFemale.length);        
                    sPrsGender = "f";
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


function loadData() {
    nameData = new DataPack(namePackImport, jobPackImport);
}


// GENERATE JOB TITLE
//-----------------------------------------------------------------------------


function debugPerson () {    
    loadData();
    person1 = new RandomPerson (nameData);
    console.log(person1);
}

debugPerson();