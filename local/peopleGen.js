///////////////////////////////////////////////////////////////////////////////
//peopleGen
/******************************************************************************
To Do:
> Use a normal distribution for the professionals age bracket
> Create middle names for people whose culture usually has them
> Load JSON using JQuery

******************************************************************************/
///////////////////////////////////////////////////////////////////////////////
//DEFINE THE DATA
//*****************************************************************************
var namePackImport = {
    english: {
        firstNameMale: ["Jack","Thomas","Joshua","Oliver","Harry","James","William","Samuel","Daniel","Charlie","Benjamin","Joseph","Callum","George","Jake","Alfie","Luke","Matthew","Ethan","Lewis"],
        firstNameFemale: ["Olivia","Grace","Jessica","Ruby","Emily","Sophie","Chloe","Lucy","Lily","Ellie","Ella","Charlotte","Katie","Mia","Hannah","Amelia","Megan","Amy","Isabella","Millie"],
        lastName: ["Smith","Jones","Taylor","Brown","Williams","Wilson","Johnson","Davies","Robinson","Wright","Thompson","Evans","Walker","White","Roberts","Green","Hall","Wood","Jackson","Clarke"]
    },
    
    chinese: {
        firstNameMale: ["Wěi","Gāng","Mǐn","Chāo","Tāo","Lěi","Jié","Yǒng","Jūn","Qiáng"],
        firstNameFemale: ["Fāng","Xiùyīng","Jìng","Lì","Yàn","Juān","Xiùlán","Xiá","Píng","Guìyīng"],
        lastName: ["Lǐ","Wáng","Zhāng","Liú","Chén","Yáng","Zhào","Huáng","Zhōu","Wú","Xú","Sūn","Hú","Zhū","Gāo","Lín","Hé","Guō","Mǎ","Luó","Liáng","Sòng","Zhèng","Xiè","Hán","Táng","Féng","Yú","Dǒng","Xiāo","Chéng","Cáo","Yuán","Dèng","Xǔ","Fù","Shěn","Zēng","Péng","Lǚ","Sū","Lú","Jiǎng","Cài","Jiǎ","Dīng","Wèi","Xuē","Yè","Yán","Yú","Pān","Dù","Dài","Xià","Zhōng","Wāng","Tián","Rén","Jiāng","Fàn","Fāng","Shí","Yáo","Tán","Shèng","Zōu","Xióng","Jīn","Lù","Hǎo","Kǒng","Bái","Cuī","Kāng","Máo","Qiū","Qín","Jiāng","Shǐ","Gù","Hóu","Shào","Mèng","Lóng","Wàn","Duàn","Zhāng","Qián","Tāng","Yǐn","Lí","Yì","Cháng","Wǔ","Qiáo","Hè","Lài","Gōng","Wén"]
    },
    
    irish: {
        firstNameMale: ["Jack","Sean","Daniel","James","Conor","Ryan","Adam","Alex","Luke","Dylan","Jamie","Michael","Aaron","Cian","Liam","Darragh","Oisin","Patrick","Charlie","Harry"],
        firstNameFemale: ["Sophie","Emily","Emma","Sarah","Lucy","Ava","Grace","Chloe","Katie","Aoife","Ella","Anna","Lily","Amy","Ciara","Leah","Holly","Saoirse","Kate","Mia"],
        lastName: ["Murphy","Kelly","O'Sullivan","Walsh","Smith","O'Brian","Byrne","Ryan","O'Connor","O'Reilly","Doyle","McCarthy","Gallagher","O'Doherty","Kennedy","Lynch","Murray","Quinn","Moore","McLoughlin","O'Carroll"]
    },
    
    scottish: {
        firstNameMale: ["Aidan","Alan","Alistair","Angus","Blair","Craig","David","Duncan","Ewan","Fraser","Gregor","Hamish","Jamie","Logan","Murray","Rory","Ross","Ruaridh","Scott","Stuart"],
        firstNameFemale: ["Abigail","Blair","Cameron","Catriona","Eilidh ","Fiona","Iona","Isla","Jamie","Kirsty","Maisie","Mhairi","Morven"],
        lastName: ["Smith","Brown","Wilson","Robertson","Thomson","Campbell","Stewart","Anderson","Scott","Murray","MacDonald","Reid","Taylor","Clark","Ross","Young","Mitchell","Watson","Paterson","Morrison"]
    },
    
    indian: {
        firstNameMale: ["Amit","Arjun","Aditya","Pranav","Samir","Nikhil","Arnav","Rishi","Rahul","Anand","Anil","Ajay","Pramod","Abhishek","Tarun"],
        firstNameFemale: ["Maya","Tara","Shreya","Arpita","Ekta","Kavita","Laxmi","Jyoti","Madhu","Aparna","Seema","Sindhu","Latha","Aarthi","Parvati"],
        lastName: ["Sharma","Verma","Gupta","Bhatnagar","Kapoor","Singh","Mehra","Chopra","Sarin","Malik","Chatterjee","Sen","Bose","Sengupta","Dasgupta","Banerjee","Chattopadhyay","Mukopadhyay","Dutta","Pillai","Rao","Jayaraman","Venkatesan","Subramanium","Rangan","Rangarajan","Yadav","Jhadav","Jaiteley","Chauhan","Mistry","Khan","Shah","Mehta","Patel","Kadam","Tambe","Chavan"]
    },
    
    italian: {
        firstNameMale: ["Giuseppe","Antonio","Giovanni","Francesco","Luigi","Mario","Salvatore","Vincenzo","Angelo","Paolo","Roberto","Pietro","Franco","Domenico","Carlo","Michele","Marco","Bruno","Giorgio","Andrea"],
        firstNameFemale: ["Maria","Anna","Rosa","Angela","Giovanna","Teresa","Giuseppina","Lucia","Francesca","Paola","Carmela","Rita","Luisa","Grazia","Laura","Carla","Caterina","Giuseppa","Concetta","Elena"],
        lastName: ["Rossi","Russo","Ferrari","Esposito","Bianchi","Romano","Colombo","Ricci","Marino","Greco","Bruno","Gallo","Conti", "De Luca","Mancini","Costa","Giordano","Rizzo","Lombardi","Moretti"]
    },

    filipino: {
        firstNameMale: ["Michael","Ronald","Ryan","Joseph","Joel","Jeffrey","Marlon","Richard","Noel","Jonathan","Dennis","Arnel","Marvin","Christopher","Alvin","Rommel","Erwin","Allan","Albert","Edwin"],
        firstNameFemale: ["Maricel","Michelle","Jennifer","Janice","Mary Grace","Jocelyn","Catherine","Mary","Rowena","Grace","Irene","Evelyn","Arlene","Aileen","Melanie","Mary Jane","Joan","Christine","Analyn","Marilou","Josephine","Marites","Joy","Sheryl","Leah","Karen","Cherry","Hazel","Geraldine","Marissa"],
        lastName: ["Torres","Tomas","Andrada","Castillo","Flores","Villanueva","Ramos","Castro","Rivera","Aquino","Navarro","Salazar","Mercado","Concepcion","Santiago ","Dela Cruz","Delos Reyes","Del Rosario","Delos Santos","De Guzman","De Castro","Dela Vega","Dela Rosa","De Asis","De Rosales","González","López","Hernández","Pérez","Fernández","Ramirez","Dominguez","Enriquez","Alvarez","Sánchez"]
    },

    german: {
        firstNameMale: ["Alexander","Andreas","Bernd","Christian","Daniel","David","Dennis","Dieter","Dirk","Florian","Frank","Jan","Jens","Jonas","Klaus","Marcel","Mario","Markus","Martin","Matthias","Maximilian","Michael","Niklas","Paul","Peter","Robert","Sebastian","Stefan","Sven", "Swen","Thomas","Tobias","Ulrich","Uwe","Wolfgang"],
        firstNameFemale: ["Andrea","Angelika","Anja","Anke","Anna","Annett","Antje","Barbara","Birgit","Brigitte","Christin","Christina","Claudia","Daniela","Diana","Doreen","Franziska","Gabriele","Heike","Ines","Jana","Janina","Jennifer","Jessica","Julia","Juliane","Karin","Karolin","Katharina","Kathrin","Katja","Kerstin","Laura","Lea","Lena","Lisa","Mandy","Manuela","Maria","Marie","Marina","Martina","Melanie","Monika","Nadine","Nicole","Petra","Sabine","Sabrina","Sandra","Sara","Silke","Simone","Sophia","Stefanie","Susanne","Tanja","Ulrike","Ursula","Vanessa"],
        lastName: ["Müller","Schmidt","Schneider","Fischer","Weber","Schäfer","Meyer","Wagner","Becker","Bauer","Hoffmann","Schulz","Koch","Richter","Klein","Wolf","Schröder","Neumann","Braun","Werner","Schwarz","Hofmann","Zimmermann","Schmitt","Hartmann","Schmid","Weiß","Schmitz","Krüger","Lange"]
    },

    french: {
        firstNameMale: ["Thomas","Lucas","Théo","Hugo","Maxime","Nicolas","Quentin","Alexandre","Antoine","Clément","Alexis","Valentin","Julien","Romain","Florian","Louis","Benjamin","Paul","Pierre","Baptiste","Enzo","Kevin","Dylan","Anthony","Tom","Adrien","Guillaume"],
        firstNameFemale: ["Léa","Manon","Camille","Chloé","Emma","Marie","Océane","Sarah","Laura","Mathilde","Julie","Marine","Pauline","Lucie","Anaïs","Inès","Clara","Justine","Lisa","Maeva","Juliette","Marion","Morgane","Charlotte","Émilie","Eva","Louise","Margaux","Amandine","Noémie","Clémence","Celia","Mélissa","Elisa","Amélie","Mélanie","Jade","Romane","Élodie","Alice","Alexia"],
        lastName: ["Martin","Bernard","Dubois","Thomas","Robert","Richard","Petit","Durand","Leroy","Moreau","Simon","Laurent","Lefebvre","Michel","Garcia","David","Bertrand","Roux","Vincent","Fournier","Morel","Girard","Andre","Lefevre","Mercier","Dupont","Lambert","Bonnet","Francois","Martinez","Legrand","Garnier","Faure","Rousseau","Blanc","Guerin","Muller","Henry","Roussel","Nicolas","Perrin","Morin","Mathieu","Clement","Gauthier","Dumont","Lopez","Fontaine","Chevalier","Robin","Masson","Sanchez","Gerard","Nguyen","Boyer","Denis","Lemaire","Duval","Joly","Gautier","Roger","Roche","Roy","Noel","Meyer","Lucas","Meunier","Jean","Perez","Marchand","Dufour","Blanchard","Marie","Barbier","Brun","Dumas","Brunet","Schmitt","Leroux","Colin","Fernandez","Pierre","Renard","Arnaud","Rolland","Caron","Aubert","Giraud","Leclerc","Vidal","Bourgeois","Renaud","Lemoine","Picard","Gaillard","Philippe","Leclercq","Lacroix","Fabre","Dupuis"]
    },

    polish: {
        firstNameMale: ["Mateusz","Kamil","Marcin","Szymon","Micha","Patryk","Bartek","Kuba","Dawid","Piotr","Artur","Adrian","Karol","Jakub","Krystian","Wojtek","daniel","Damian","Maciej","Sebastian","Kacper","Przemek","Dominik","Adam","Pawel","HuBert","Wiktor","Bartosz","Lukasz"],
        firstNameFemale: ["Karolina","Kasia","Ola","Marta","Monika","Paulina","Natalia","Aleksandra","Magda","Dominika","Klaudia","Kinga","Anna","Agnieszka","Patrycja","Joanna","Julia","Ania","Agata","Justyna","Magdalena","Martyna","Weronika","Ewa","Kamila","Oliwia","Gosia","Alicja","Izabela","Wiktoria"],
        lastName: ["Nowak","Kowalski","Wiśniewski","Wójcik","Kowalczyk","Kamiński","Lewandowski","Zieliński","Szymański","Woźniak","Dąbrowski","Kozłowski","Jankowski","Mazur","Kwiatkowski","Wojciechowski","Krawczyk","Kaczmarek","Piotrowski","Grabowski"]
    },
    
    other: {
        firstNameMale: ["Aboot"],
        firstNameFemale: ["Bloody"],
        lastName: ["Time"]
        
    },

    typeWeight: [13, 12, 10, 10, 8, 7, 6, 5, 5, 4, 20]
};


//ADDITIONAL FUNCTIONS
//*****************************************************************************
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


// LOAD JSON

//MAIN CONSTRUCTOR
//*****************************************************************************
function NameContainer (dataSource) {
    //Initialize Variables
    this.sPrsType = "";
    this.sPrsGender = "";
    this.sPrsFirstName = "";
    this.sPrsLastName = "";
    this.sPrsFullName = "";
    this.iPrsAge = 0;
    this.sPrsAgeBracket = "";
    this.sPrsJobCat = "";
    this.sPrsJobTitle = "";
    this.dataSource = dataSource;
}

//GET PERSON TYPE
//*********************************
NameContainer.prototype.generateNameType = function () {
    //Select type of name according to weight of the type
    var aPeopleTypes = Object.keys(this.dataSource);
    aPeopleTypes.pop();
    
    sPrsType = randomWeighted (aPeopleTypes,this.dataSource.typeWeight);
    return(sPrsType);
};

//GET FULL NAME TYPE
//*********************************
NameContainer.prototype.generateFullName = function () {
    var iGenderSelector = Math.floor(Math.random() * 10 + 1);
    //Go through all items in the object and look for a type defined as sPrsType
    for (var key in this.dataSource) {
        if (this.dataSource.hasOwnProperty(key)) {
            if (key === sPrsType) {     
                //When the type is a match first do a random 50/50 to see if it's male or female
                if (iGenderSelector <= 5) {
                    var iMaleSelection = Math.floor(Math.random() * this.dataSource[sPrsType].firstNameMale.length);
                    sPrsGender = "male";
                    sPrsFirstName = (this.dataSource[sPrsType].firstNameMale[iMaleSelection]);
                } else {
                    var iFemaleSelection = Math.floor(Math.random() * this.dataSource[sPrsType].firstNameFemale.length);        
                    sPrsGender = "female";
                    sPrsFirstName = (this.dataSource[sPrsType].firstNameFemale[iFemaleSelection]);
                }
                var iLastNameSelection = Math.floor(Math.random() * this.dataSource[sPrsType].lastName.length);
                sPrsLastName = (this.dataSource[sPrsType].lastName[iLastNameSelection]);
            }
        }
    }

    return [sPrsGender,sPrsFirstName, sPrsLastName];
};

//GET AGE AND AGEBRACKET
//*********************************
NameContainer.prototype.generateAge = function () {
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

//RANDOM PERSON CONSTRUCTOR
//*****************************************************************************
function RandomPerson (dataObject) {
    //Generate everything and push them into a single array
    this.allInfo = [];
    this.allInfo.push (dataObject.generateNameType());
    this.allInfo.push (dataObject.generateFullName());
    this.allInfo.push (dataObject.generateAge());

    //Extract final person values from array and clear the array
    this.sPrsType = this.allInfo[0];
    this.sPrsGender = this.allInfo[1][0];
    this.sPrsFirstName = this.allInfo[1][1];
    this.sPrsLastName = this.allInfo[1][2];
    this.sPrsFullName = (this.sPrsFirstName + " " + this.sPrsLastName);
    this.sPrsAgeBracket = this.allInfo[2][0];
    this.iPrsAge = this.allInfo[2][1];
    this.sPrsJobCat = "";
    this.sPrsJobTitle = "";
    this.allInfo = [];
}

//LOAD EXTERNAL DATA AND CREATE AN OBJECT WITH THE NAMECONTAINER CONSTRUCTOR
//*****************************************************************************


//USE THAT DATA SOURCE TO CREATE PEOPLE OBJECTS WITH THE PERSON CONSTRUCTOR
//*****************************************************************************

function initData () {
    nameData = new NameContainer(namePackImport);

    if (nameData === undefined) {
        document.getElementById("status").innerHTML = "nameData is null";
        return;
    } else {
        document.getElementById("status").innerHTML = "nameData is present, creating object.";
    }
}

function displayPerson () {    
    person1 = new RandomPerson (nameData);
    document.getElementById("firstname").innerHTML = person1.sPrsFirstName;
    document.getElementById("lastname").innerHTML = person1.sPrsLastName;
    document.getElementById("type").innerHTML = person1.sPrsType;
    document.getElementById("gender").innerHTML = person1.sPrsGender;
    document.getElementById("agebracket").innerHTML = person1.sPrsAgeBracket;
    document.getElementById("age").innerHTML = person1.iPrsAge;
}

//USE THAT DATA SOURCE TO CREATE PEOPLE OBJECTS FOR DEBUG
//*****************************************************************************

function debugPerson () {    
    nameData = new NameContainer(namePackImport);
    person1 = new RandomPerson (nameData);
    console.log(person1);
}

debugPerson();