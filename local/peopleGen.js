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

var jobPackImport = {
    "academia": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","f","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","f","u","u","u","u","u","u","u","u","u","u","u","u","u","f","u","u","u","u","u","u","u","u","u","u"],
        "title":["Agricultural Sciences Teacher","Anthropology Teacher","Archeology Teacher","Architecture Teacher","Art Teacher","Bioinformatics Scientist","Biological Science Teacher","Biological Scientist","Biologist","Biostatistician","Business Teacher","Chemistry Teacher","Climate Change Analyst","Communications Teacher","Computer Science Teacher","Conservation Scientist","Criminal Justice and Law Enforcement Teacher","Cultural Studies Teachers","Drama Teacher","Economics Teacher","Education Administrator","Elementary School Teacher","Engineering Teacher","English Teacher","Environmental Economist","Environmental Science Teacher","Environmental Scientist","Geneticist","Geographer","Geography Teacher","Geologist","Geoscientist","Geospatial Information Scientist","Graduate Teaching Assistant","Health Educator","Historian","History Teacher","Home Economics Teacher","Hydrologist","Kindergarten Teacher","Law Teacher","Librarian","Literature Teacher","Mathematical Science Teacher","Mathematician","Molecular Biologist","Music Teacher","Philosophy Teacher","Physicist","Physics Teacher","Plant Scientist","Political Science Teacher","Political Scientist","Preschool Teacher","Religion Teacher","Research Coordinator","School Psychologist","Scientific Photographer","Social Science Researcher","Social Sciences Teacher","Sociologist","Sociology Teacher","Wildlife Biologist","Zoologist"]
    },

    "business": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","f","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"],
        "title":["Administrative Assistant","Advertising and Promotions Manager","Advertising Sales Agent","Auditor","Branch Financial Manager","Brokerage Clerk","Budget Analyst","Business Intelligence Analyst","Business Operations Specialist","Chief Executive Officer","Chief Financial Officer","Chief Sustainability Officer","Commodities Trader","Compensation and Benefits Manager","Compliance Manager","Compliance Officer","Credit Analyst","Credit Authorizer","Department Financial Manager","Economist","Executive Secretary","General Manager","Logistics Analyst","Logistics Engineer","Logistics Manager","Loss Prevention Manager","Management Analyst","Market Research Analyst","Marketing Manager","Marketing Specialist","Operations Manager","Operations Research Analysts","Payroll Operator","Production Inspector","Public Relations Manager","Public Relations Specialist","Purchasing Manager","Real Estate Broker","Real Estate Sales Agent","Recruiter","Regulatory Affairs Manager","Regulatory Affairs Specialist","Sales Manager","Sales Representative","Search Marketing Strategist","Supply Chain Manager","Training and Development Manager","Training and Development Specialist"]
    },
    
    "creative": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","m","u","u","u","u","u","u","u","u","u","f","u","f","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","m","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"],
        "title":["2D Animator","3D Animator","Actor","Architect","Art Curator","Art Director","Art Therapist","Artist","Audio-Visual Specialist","Author","AV Equipment Technician","Camera Operator","Cartoonist","Choreographer","Composer","Copy Writer","Craft Artist","Creative Writer","Dancer","Decorative Painter","Desktop Publisher","Dressmaker","Editor","Fashion Designer","Film Editor","Film Laboratory Technician","Graphic Designer","Illustrator","Industrial Designer","Instructional Designer","Interior Designer","Journalist","Landscape Architect","Makeup Artist","Marine Architect","Movie Director","Multi-Media Artist","Music Arranger","Music Director","Music Orchestrator","Musician","Naval Architect","News Reporter","Painter","Photographic Restorer","Poet","Potter","Professional Photographer","QA Engineer","QA Tester","Radio Announcer","Radio Director","Sculptor","Set Designer","Singer","Sketch Artist","Social Media Manager","Social Media Specialist","Sound Engineer","Street Performer","TV Director","Video Editor","Video Games Designer","Video Games Producer","Video Games Technical Director","Writer"]
    },

    "energy": {
        "gender":["m","u","u","u","m","u","u"],
        "title":["Electrical Engineer","Solar Energy Systems Engineer","Wind Energy Engineer","Wind Energy Project Manager","Wind Turbine Service Technician","Nuclear Engineer","Nuclear Monitoring Technician"]
    },

    "financial": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"],
        "title":["Account Collector","Accountant","Financial Analyst","Financial Examiner","Financial Manager","Financial Specialist","Fraud Examiner","Fraud Investigator","Insurance Fraud Investigator","Insurance Policy Processing Clerk","Insurance Sales Agent","Investment Fund Manager","Loan Counselor","Loan Officer","Personal Financial Advisor","Revenue Agent","Risk Management Specialist","Securities Trader","Security Management Specialist"]
    },

    "it": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"],
        "title":["Computer and Information Research Scientist","Computer and Information Systems Managers","Computer Hardware Engineer","Computer Operator","Computer Programmer","Computer Security Specialist","Computer Support Specialist","Computer Systems Analyst","Computer Systems Architect","Data Warehousing Specialist","Database Administrator","Database Architect","Document Management Specialist","Information Security Analyst","Information Technology Project Manager","Network and Computer Systems Administrator","Network Architect","Network Support Specialist","Network Systems and Data Communications Analyst","Software Developer","Software Engineer","Web Administrator","Web Developer"]
    },

    "medical": {
        "gender":["f","m","u","u","u","u","u","u","u","u","u","f","u","u","u","u","u","u","u","u","u","m","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u"],
        "title":["Acute Care Nurse","Ambulance Driver","Anesthesiologists","Chiropractor","Dental Assistant","Dental Hygienist","Dental Laboratory Technician","Dentist","Dermatologist","Dietitian","Emergency Medical Technician","Emergency Service Dispatcher","Endoscopy Technician","Epidemiologist","Exercise Physiologist","Family Practitioner","General Practitioner","Gynecologist","Health Services Manager","Immunologist","Magnetic Resonance Imaging Technologist","Medical Appliance Technician","Medical Assistant","Mental Health Counselor","Microbiologist","Neurologist","Nuclear Medicine Physician","Nurse Anesthetist","Nutritionist","Obstetrician","Ophthalmic Laboratory Technician","Ophthalmologist","Optician","Optometrist","Oral and Maxillofacial Surgeon","Orthodontist","Paramedic","Pathologist","Pediatrician","Pharmacist","Physical Therapist","Preventive Medicine Physician","Prosthetist","Psychiatric Nurse","Psychiatrists","Psychologist","Radiation Therapist","Radiologist","Surgeon","Surgical Assistant","Surgical Technologist","Urologist","Veterinarian","Veterinary Assistant","Veterinary Technician"]
    },

    "other": {
        "gender":["u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","m","u","m","m","u","u","u","u","u","u","u","u","u","u","m","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","u","m","m","u","m","u","u","u","u","m","m","m","u","u","u","u","u","u","f","f","u","u","u","u","u","f","m","u","u","u","m","u","m","f","u","u","u","m","u","u","m","m","m","m","m","m","u","m","u","u","u","u","u","u","u","f","m","u","m","u","u","m","m","u","u","u","u","f","u","u","u","u","u","m","u","u","u","u","u","u","m","m","u","u","u","u","u","m","u","u","m","u","u","u","u","u","u","u","u","m","m","u","u","m","m","u","u","m","u","u","u","u","u","u","u","u","u","u","m","u","m","u","m","m","u","f","u","u","u","u","u","u","u","u","u","u","u","u","u","m","u","m","m","m","u","u","u","u","u","u","u","u","u","u","f","m","u","u","u","u","u","u","u","u","u","m","m","u","u","u","u","u","u","u","m","u","m","m","u","u","u","u","u","u","u","u","m","u","u","u","m","m","m","u","m","m","u","u","u","u","u","u","u","u","m","u","u","u","u","u","u","m","u","u","u","m","u","m","u","u","u","u","u","u","u","m","u","u","m","u","u","u","u","u","u","m"],
        "title":["Acupuncturist","Administrative Law Judge","Administrative Services Manager","Aerobics Instructor","Aerospace Engineer","Aerospace Engineering and Operations Technician","Agricultural Engineer","Agricultural Inspector","Agricultural Technician","Air Crew Member","Air Crew Officer","Air Traffic Controller","Aircraft Engine Specialist","Aircraft Launch and Recovery Officer","Aircraft Launch and Recovery Specialist","Aircraft Mechanics and Service Technician","Airfield Operations Specialist","Airline Copilot","Airline Pilot","Animal Breeder","Animal Scientist","Animal Trainer","Anthropologist","Arbitrator","Archeologist","Archivist","Artist Agent","Astronomer","Athlete","ATM Maintenance","Atmospheric and Space Scientist","Audiologist","Automotive Engineer","Aviation Inspector","Avionics Technician","Bailiff","Baker","Billing Clerk","Bindery Worker","Biochemical Engineer","Biochemist","Biofuels Processing Technician","Biofuels Production Manager","Bioinformatics Technician","Biomass Plant Technician","Biomass Power Plant Manager","Biomedical Engineer","Biophysicist","Boat Builder","Boat Captain","Bookbinder","Bookkeeper","Broadcast News Analyst","Broadcast Technician","Building Inspector","Calibration and Instrumentation Technician","Camera Repairer","Car Mechanic","Carpenter","Cartographer","Central Office Operator","Chemical Engineer","Chemical Plant and System Operator","Chemical Technician","Chemist","Child Care Worker","Child Social Worker","Child Support Investigator","City Planner","Civil Engineer","Civil Engineering Technician","Clinical Nurse Specialist","Sports Coach","Communication Equipment Mechanic","Communications Equipment Operator","Community Health Worker","Community Service Manager","Construction Manager","Coroner","Correctional Officer","Cosmetologist","Counseling Psychologist","Counselor","Court Clerk","Crane Operator","Criminal Investigator","Customer Service Representative","Deputy Sheriff","Detective","Electrical Engineering Technician","Electrician","Elevator Repairman","Embalmer","Emergency Management Specialist","Engine Assembler","Engineer","Engineering Manager","Engineering Technician","Environmental Compliance Inspector","Environmental Engineer","Event Planner","Exhibit Designer","Family Social Worker","Farm Equipment Mechanic","Farm Management Advisor","Fire Fighter","Fire Inspector","Fire Investigator","Fish and Game Warden","Fish Hatchery Manager","Fitness and Wellness Coordinator","Fitness Trainer","Flight Attendant","Flight Engineer","Floral Designer","Food Science Technician","Food Scientist","Food Service Managers","Forensic Science Technician","Forest and Conservation Technician","Forest Fire Fighter","Forest Fire Fighting and Prevention Supervisor","Forest Fire Inspector","Freight Agent","Freight and Cargo Inspector","Fuel Cell Engineer","Fuel Cell Technician","Funeral Attendant","Funeral Director","Gaming Dealer","Gaming Manager","Gaming Service Worker","Gaming Supervisor","Gaming Surveillance Officer","Gas Appliance Repairer","Gas Plant Operator","Geographic Information Systems Technician","Glass Blower","Government Property Inspector","Government Service Executive","Green Marketer","Hairdresser","Hairstylist","Hand Engraver","Head Cook","Heating and Air Conditioning Mechanic","Highway Patrol Pilot","Home Appliance Repairer","Human Resources Assistant","Human Resources Manager","HVAC Mechanic","Hydroelectric Plant Technician","Hydroelectric Production Manager","Immigration and Customs Inspector","Industrial Machinery Mechanic","Industrial Production Manager","Intelligence Analyst","Interpreter","Jeweler","Jewelry Bench Worker","Judge","Judicial Law Clerk","Law Clerk","Lawyer","Legislator","Lifeguard","Locksmith","Locomotive Engineer","Lodging Manager","Logging Worker","Machinist","Magistrate","Manicurist","Manufacturing Engineer","Mapping Technician","Marine Engineer","Marriage and Family Therapist","Massage Therapist","Materials Engineer","Mechanical Engineer","Mechanical Engineering Technician","Mechanical Inspector","Mediator","Microsystems Engineer","Missing Persons Investigator","Model","Mortician","Motor Vehicle Inspectors","Motorboat Mechanic","Motorboat Operator","Motorcycle Mechanic","Museum Curator","Music Therapist","Nanosystems Engineer","Occupational Health and Safety Specialist","Occupational Therapist","Online Merchant","Pantograph Engraver","Paralegal Assistants","Park Naturalist","Pastry Chef","Pedicurist","Petroleum Technician","Photographic Process Worker","Police Detective","Police Officer","Police Patrol Officer","Police Records Officer","Postal Service Clerk","Postal Service Mail Carrier","Postmaster","Power Plant Operator","Prepress Technician","Private Detective","Probation Officer","Public Transportation Inspector","Quality Control Analyst","Quality Control Systems Manager","Radar Technician","Radio Operator","Railroad Inspector","Railroad Police Officer","Railroad Switch Operator","Railroad Yard Worker","Railroad Yardmaster","Ranch Manager","Recreational Therapist","Sports Referee","Regional Planner","Rehabilitation Counselor","Restaurant Cook","Robotics Engineer","Robotics Technician","Safe Repairer","Safety Engineer","School Social Worker","Security Manager","Sheriff","Ship Captain","Ship Carpenter","Ship Engineer","Shipwright","Silversmith","Skin Care Specialist","Social Service Specialists","Social Worker","Spa Manager","Special Agent","Statistician","Storage and Distribution Manager","Substance Abuse Counselor","Subway Operator","Survey Researcher","Surveyor","Sustainability Specialist","Tailor","Technical Writer","Telecommunications Engineering Specialist","Telecommunications Line Installer","Telemarketer","Therapist","Tour Guide","Traffic Technician","Train Crew Member","Transit Police Officer","Translator","Transportation Engineer","Transportation Inspector","Transportation Manager","Transportation Security Screener","Travel Agent","Travel Guide","Truck Mechanic","Tutor","TV Announcer","TV Camera Operator","Typesetter","Umpire","Undertaker","Upholsterer","Urban Planner","Vocational Counselor","Watch Repairer"]
    },

    "unskilled": {
        "gender":["m","u","u","m","m","m","u","u","m","m","u","m","m","m","m","u","u","m","m","u","m","m","m","m","m","u","u","u","m","m","u","m","u","m","u","m","m","m","u","u","m","m","m","m","m","m","m","m","u","m","m","m","m","u","u","f","m","u","u","u","f","u","m","m","u","m","m","m","m","m","m","m","m","u","m","u","m","f","m","m","m","m","m","m","u","u","m","u","u","m","m","u","u","u","m","f","m","m"],
        "title":["Agricultural Equipment Operator","Aircraft Cargo Handling Supervisor","Amusement Park Attendant","Animal Control Worker","Baggage Porter","Barber","Barista","Bartender","Bellhop","Bicycle Repairer","Bike Messenger","Building Cleaning Worker","Bulldozer Operator","Bus Driver","Butcher","Cafeteria Cook","Cashier","Chauffeur","Coatroom Attendant","Commercial Diver","Commercial Pilot","Concierge","Construction Laborer","Construction Worker","Conveyor Operators","Courier","Data Entry Keyer","Dishwasher","Door-To-Door Salesman","Drywall Installer","Escort","Extraction Worker","Farmer","Farmworker","Fast Food Cook","Fisherman","Floor Layer","Floor Sander","Food Cooking Machine Operator","Food Preparation Worker","Forester","Gas Station Operator","Grinding and Polishing Worker","Groundskeeper","Hazardous Materials Removal Worker","Heavy Truck Driver","Highway Maintenance Worker","Home Appliance Installer","Hotel Clerk","Industrial Truck Operator","Insulation Worker","Janitor","Loading Machine Operator","Lobby Attendant","Locker Room Attendant","Maid","Maintenance Worker","Meat Packer","Motel Clerk","Movie Projectionist","Nanny","Packaging Machine Operator","Parking Enforcement Worker","Parking Lot Attendant","Personal Care Worker","Pest Control Worker","Pile-Driver Operator","Pipelayer","Plumber","Precious Metal Worker","Printing Machine Operator","Printing Press Operator","Refuse and Recyclable Material Collectors","Retail Salesperson","School Bus Driver","Screen Printing Machine Operator","Seaman","Secretary","Security Guard","Septic Tank Servicer","Sheet Metal Worker","Solderer","Stage Worker","Steel Worker","Street Vendor","Stripper","Taxi Driver","Telephone Operator","Teller","Tile and Marble Setter","Trailer Truck Driver","Typist","Usher","Utilities Meter Reader","Waiter","Waitress","Welder","Woodworker"]
    },

    "unemployed": {
        "gender": ["u"],
        "title": ["Unemployed"]
    },

    typeWeight: [8, 7, 9, 5, 6, 3, 9, 20, 25, 8]
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

//GET PERSON TYPE
//*********************************
DataPack.prototype.generateNameType = function () {
    //Select type of name according to weight of the type
    var aPeopleTypes = Object.keys(this.nameSource);
    aPeopleTypes.pop();
    
    sPrsType = randomWeighted (aPeopleTypes,this.nameSource.typeWeight);
    return(sPrsType);
};

//GET FULL NAME TYPE
//*********************************
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

//GET AGE AND AGEBRACKET
//*********************************
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

//GET CATEGORY
//*********************************
DataPack.prototype.generateJobCat = function () {
    //Create an array of all jobs present in jobPackImport
    var aJobTypes = Object.keys(this.jobSource);
    aJobTypes.pop();

    //Select type of job according to weight of the type
    sPrsJobCat = randomWeighted (aJobTypes,this.jobSource.typeWeight);

    return (sPrsJobCat);
};

//GET JOB TITLE
//*********************************

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

//RANDOM PERSON CONSTRUCTOR
//*****************************************************************************
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

//CREATE PEOPLE OBJECT FOR DEBUG
//*****************************************************************************
function loadData() {
    nameData = new DataPack(namePackImport, jobPackImport);
}


function debugPerson () {    
    loadData();
    person1 = new RandomPerson (nameData);
    console.log(person1);
    // var x = nameData.generateJobTitle();
    // console.log(x);
    
}

debugPerson();