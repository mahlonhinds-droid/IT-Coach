/* IT Coach curriculum-linked question bank — prototype */
const ITCoachCurriculumQuestions=[
{topic:"1",lesson:"1.1",skill:"Information technology and computer systems",prompt:"Which activity is part of information processing?",options:["Processing information","Painting a wall","Repairing a chair"],answer:0},
{topic:"1",lesson:"1.2",skill:"Hardware, memory and storage",prompt:"Which memory is used for temporary working storage?",options:["RAM","ROM","Printer"],answer:0},
{topic:"1",lesson:"1.3",skill:"Input and output devices",prompt:"Which is an input device?",options:["Keyboard","Monitor","Printer"],answer:0},
{topic:"1",lesson:"1.4",skill:"Software and user interfaces",prompt:"Which provides instructions that enable a computer to perform tasks?",options:["Software","Desk","Monitor"],answer:0},
{topic:"1",lesson:"1.5",skill:"Information processing",prompt:"In IPOS, what does I represent?",options:["Input","Internet","Instruction"],answer:0},
{topic:"1",lesson:"1.6",skill:"Performance and troubleshooting",prompt:"What should be done before selecting a troubleshooting solution?",options:["Identify the likely cause","Delete all files","Replace every component"],answer:0},
{topic:"1",lesson:"1.7",skill:"Number systems and codes",prompt:"Why are codes used in computing?",options:["To represent information","To clean hardware","To increase screen size"],answer:0},
{topic:"2",lesson:"2.1",skill:"Network types and wireless technologies",prompt:"Which network normally covers a local area such as a school building?",options:["LAN","WAN","MAN"],answer:0},
{topic:"2",lesson:"2.2",skill:"Network components and transmission media",prompt:"Which component provides a computer with network connectivity?",options:["NIC","Monitor","Printer"],answer:0},
{topic:"2",lesson:"2.3",skill:"Mobile communication technologies",prompt:"Which technology is associated with short-range wireless communication?",options:["Bluetooth","Ethernet cable","Optical disc"],answer:0},
{topic:"2",lesson:"2.4",skill:"Web technologies and Internet",prompt:"Which is an Internet service?",options:["Email","Keyboard","RAM"],answer:0},
{topic:"3",lesson:"3.1",skill:"Security, misuse and affected groups",prompt:"What is a vulnerability?",options:["A weakness that may be exploited","A security backup","A type of monitor"],answer:0},
{topic:"3",lesson:"3.2",skill:"Countermeasures and personal security",prompt:"Which is a security countermeasure?",options:["Encryption","Sharing passwords","Ignoring updates"],answer:0},
{topic:"3",lesson:"3.3",skill:"ICT, job skills and careers",prompt:"ICT can change careers by changing:",options:["Required skills","The laws of physics","The length of a day"],answer:0},
{topic:"3",lesson:"3.4",skill:"ICT applications and impacts",prompt:"Which is an ICT application in medicine?",options:["Electronic health records","Paper clips","Desk lamps"],answer:0},
{topic:"3",lesson:"3.5",skill:"Health, safety and ethics",prompt:"Which should be considered when using ICT responsibly?",options:["Health, safety and ethical issues","Only screen colour","Only computer brand"],answer:0},
{topic:"4",lesson:"4.1",skill:"Word processing",prompt:"Which task belongs to word processing?",options:["Formatting a document","Routing a network","Searching an array"],answer:0},
{topic:"4",lesson:"4.2",skill:"Advanced word processing",prompt:"Which feature can help create personalized documents for multiple recipients?",options:["Mail merge","Firewall","Trace table"],answer:0},
{topic:"4",lesson:"4.3",skill:"Presentation software",prompt:"What is a presentation made up of?",options:["Slides","Database records","Network packets"],answer:0},
{topic:"4",lesson:"4.4",skill:"Web page design",prompt:"What should a web page have?",options:["A planned structure and content","Only a password","Only a spreadsheet"],answer:0},
{topic:"5",lesson:"5.1",skill:"Spreadsheet terminology",prompt:"What is the intersection of a row and column called?",options:["Cell","Record","Slide"],answer:0},
{topic:"5",lesson:"5.2",skill:"Formulae, functions and absolute references",prompt:"Which function can add a range of values?",options:["SUM","QUERY","PRINT"],answer:0},
{topic:"5",lesson:"5.3",skill:"Layout, sorting and finding data",prompt:"Which feature arranges data according to selected criteria?",options:["Sorting","Encryption","Compilation"],answer:0},
{topic:"5",lesson:"5.4",skill:"Charts and multiple worksheets",prompt:"What can a chart help communicate?",options:["Patterns in data","A password","A network address"],answer:0},
{topic:"6",lesson:"6.1",skill:"Database concepts and terminology",prompt:"A database table contains:",options:["Records and fields","Slides and animations","Only formulas"],answer:0},
{topic:"6",lesson:"6.2",skill:"Creating and modifying databases",prompt:"What should be planned when creating a database?",options:["Fields and records","Slide transitions","Font colours only"],answer:0},
{topic:"6",lesson:"6.3",skill:"Forms, queries and reports",prompt:"Which database object retrieves records matching criteria?",options:["Query","Slide","Cell"],answer:0},
{topic:"7",lesson:"7.1",skill:"Problem solving and top-down design",prompt:"What is a benefit of breaking a problem into smaller parts?",options:["It makes the problem easier to manage","It removes the need for testing","It prevents planning"],answer:0},
{topic:"7",lesson:"7.2",skill:"Variables, constants, data types and operators",prompt:"A variable is used to:",options:["Store a value that can change","Print paper","Connect Wi-Fi"],answer:0},
{topic:"7",lesson:"7.3",skill:"Algorithms, pseudocode and flowcharts",prompt:"Which uses standard symbols to represent an algorithm?",options:["Flowchart","Spreadsheet","Database table"],answer:0},
{topic:"7",lesson:"7.4",skill:"Trace tables and testing",prompt:"A trace table is used to:",options:["Track variable values through an algorithm","Format a presentation","Store images"],answer:0},
{topic:"8",lesson:"8.1",skill:"Programming languages and program development",prompt:"What is part of program development?",options:["Testing the program","Changing monitor size","Cleaning the keyboard"],answer:0},
{topic:"8",lesson:"8.2",skill:"Pascal basics",prompt:"Which symbol is used for assignment in Pascal?",options:[":=","==","=>"],answer:0},
{topic:"8",lesson:"8.3",skill:"Selection and loops",prompt:"Which structure can repeat instructions?",options:["Loop","Constant","Comment"],answer:0},
{topic:"8",lesson:"8.4",skill:"Testing, debugging and documentation",prompt:"Debugging is used to:",options:["Find and correct program errors","Create a network","Format a table"],answer:0}
];
function ITCoachQuestionsForLesson(topic,lesson){return ITCoachCurriculumQuestions.filter(q=>q.topic===String(topic)&&q.lesson===String(lesson));}
function ITCoachQuestionsForSkill(topic,skill){return ITCoachCurriculumQuestions.filter(q=>q.topic===String(topic)&&q.skill===skill);}


/* Expanded prototype question metadata/variants. These are author-generated practice items and require workbook/teacher-key review. */
ITCoachCurriculumQuestions.forEach(q=>q.difficulty="foundation");
const ITCoachExpandedPrototypeQuestions=[
{topic:"1",lesson:"1.2",skill:"Hardware, memory and storage",difficulty:"developing",prompt:"Which storage device retains data when power is removed?",options:["SSD","RAM","Cache"],answer:0},
{topic:"1",lesson:"1.5",skill:"Information processing",difficulty:"developing",prompt:"Which IPOS stage changes input data into useful information?",options:["Processing","Output","Storage"],answer:0},
{topic:"1",lesson:"1.6",skill:"Performance and troubleshooting",difficulty:"developing",prompt:"A computer is slow. Which is an appropriate first step?",options:["Gather symptoms and identify possible causes","Replace every device","Delete the operating system"],answer:0},
{topic:"2",lesson:"2.1",skill:"Network types and wireless technologies",difficulty:"developing",prompt:"Which network generally connects devices across a large geographic area?",options:["WAN","LAN","PAN"],answer:0},
{topic:"2",lesson:"2.2",skill:"Network components and transmission media",difficulty:"developing",prompt:"Which device directs traffic between networks?",options:["Router","Keyboard","Scanner"],answer:0},
{topic:"2",lesson:"2.3",skill:"Mobile communication technologies",difficulty:"developing",prompt:"A mobile phone connects to a cellular network mainly through:",options:["A mobile network connection","A printer cable","A spreadsheet"],answer:0},
{topic:"2",lesson:"2.4",skill:"Web technologies and Internet",difficulty:"developing",prompt:"Which term refers to a network of linked web pages and resources accessed through the Internet?",options:["World Wide Web","RAM","LAN"],answer:0},
{topic:"3",lesson:"3.1",skill:"Security, misuse and affected groups",difficulty:"developing",prompt:"Which activity is an example of computer misuse?",options:["Phishing","Backing up files","Updating software"],answer:0},
{topic:"3",lesson:"3.2",skill:"Countermeasures and personal security",difficulty:"developing",prompt:"Which practice strengthens account security?",options:["Using strong unique passwords","Sharing passwords","Using the same password everywhere"],answer:0},
{topic:"3",lesson:"3.4",skill:"ICT applications and impacts",difficulty:"developing",prompt:"Which is a possible organizational impact of a cyber attack?",options:["Loss of data and customer trust","Guaranteed higher profits","No operational effect"],answer:0},
{topic:"4",lesson:"4.1",skill:"Word processing",difficulty:"developing",prompt:"Which feature changes the appearance of selected text?",options:["Text formatting","Routing","Compilation"],answer:0},
{topic:"4",lesson:"4.2",skill:"Advanced word processing",difficulty:"developing",prompt:"Mail merge combines a main document with:",options:["A data source containing recipient information","A network router","A trace table"],answer:0},
{topic:"4",lesson:"4.3",skill:"Presentation software",difficulty:"developing",prompt:"Which design choice can improve presentation readability?",options:["Clear hierarchy and appropriate text size","Filling every slide with text","Using unrelated animations everywhere"],answer:0},
{topic:"4",lesson:"4.4",skill:"Web page design",difficulty:"developing",prompt:"Why is consistent navigation useful on a website?",options:["It helps users find content predictably","It prevents all errors","It removes the need for content"],answer:0},
{topic:"5",lesson:"5.2",skill:"Formulae, functions and absolute references",difficulty:"developing",prompt:"What is the purpose of an absolute cell reference?",options:["Keep a referenced cell fixed when a formula is copied","Delete a worksheet","Sort records"],answer:0},
{topic:"5",lesson:"5.3",skill:"Layout, sorting and finding data",difficulty:"developing",prompt:"Which operation arranges records from smallest to largest?",options:["Ascending sort","Encryption","Mail merge"],answer:0},
{topic:"5",lesson:"5.4",skill:"Charts and multiple worksheets",difficulty:"developing",prompt:"Why might a spreadsheet use multiple worksheets?",options:["To organize related data separately","To remove all formulas","To replace the operating system"],answer:0},
{topic:"6",lesson:"6.1",skill:"Database concepts and terminology",difficulty:"developing",prompt:"In a database table, a field represents:",options:["An attribute or category of data","A complete collection of tables","A presentation slide"],answer:0},
{topic:"6",lesson:"6.3",skill:"Forms, queries and reports",difficulty:"developing",prompt:"What is a report commonly used for?",options:["Presenting selected database information in a readable format","Connecting a computer to Wi-Fi","Writing Pascal code"],answer:0},
{topic:"7",lesson:"7.1",skill:"Problem solving and top-down design",difficulty:"developing",prompt:"Top-down design starts by considering:",options:["The overall problem before breaking it into smaller tasks","Only the final output","Only the programming language"],answer:0},
{topic:"7",lesson:"7.3",skill:"Algorithms, pseudocode and flowcharts",difficulty:"developing",prompt:"Pseudocode is useful because it:",options:["Describes algorithm logic in a structured human-readable form","Automatically compiles into machine code","Stores database records"],answer:0},
{topic:"7",lesson:"7.4",skill:"Trace tables and testing",difficulty:"developing",prompt:"A trace table can help a programmer:",options:["Follow changes in variables step by step","Design a presentation","Connect a router"],answer:0},
{topic:"8",lesson:"8.2",skill:"Pascal basics",difficulty:"developing",prompt:"Which Pascal statement is an assignment statement?",options:["total := price + tax;","total == price + tax;","total => price + tax;"],answer:0},
{topic:"8",lesson:"8.3",skill:"Selection and loops",difficulty:"developing",prompt:"Which control structure selects between alternative actions?",options:["IF...THEN...ELSE","FOR printing","COMMENT"],answer:0},
{topic:"8",lesson:"8.4",skill:"Testing, debugging and documentation",difficulty:"developing",prompt:"Why is testing performed after a program is developed?",options:["To identify whether the program behaves as expected","To increase monitor resolution","To create database fields"],answer:0}
];
ITCoachCurriculumQuestions.push(...ITCoachExpandedPrototypeQuestions);
