/* IT Coach source-mapped Topics 4–8 integration map.
   Lesson titles follow the current Complete Draft lesson map. Detailed student content and answer keys require final review. */
const ITCoachContent48={
"4":{
"4.1":{title:"Word processing: creating, formatting and editing",activity:"Create and format a short document."},
"4.2":{title:"Advanced word processing: tables, mail merge and forms",activity:"Plan a document using a table or mail-merge/form feature."},
"4.3":{title:"Presentation software",activity:"Plan a short presentation with clear structure and visual support."},
"4.4":{title:"Web page design and development",activity:"Plan a simple web page structure and content."}},
"5":{
"5.1":{title:"Spreadsheet purpose and terminology",activity:"Identify spreadsheet rows, columns, cells and ranges."},
"5.2":{title:"Formulae, functions and absolute references",activity:"Build a formula using a function and identify when an absolute reference is needed."},
"5.3":{title:"Layout, sorting and finding data",activity:"Organize a small data set and apply sorting/finding."},
"5.4":{title:"Charts, multiple worksheets and spreadsheet applications",activity:"Select a suitable chart and plan a multi-sheet workbook."}},
"6":{
"6.1":{title:"Database concepts and terminology",activity:"Identify fields, records, tables and relationships in a sample data set."},
"6.2":{title:"Creating and modifying a database",activity:"Plan fields and records for a simple database."},
"6.3":{title:"Forms, queries and reports",activity:"Create a query criterion and describe the purpose of a form/report."}},
"7":{
"7.1":{title:"Problem-solving process and top-down design",activity:"Break a problem into smaller components."},
"7.2":{title:"Data types, variables, constants and operators",activity:"Identify suitable data types and operators for a problem."},
"7.3":{title:"Algorithms, pseudocode and flowcharts",activity:"Write pseudocode and outline a flowchart."},
"7.4":{title:"Testing algorithms with trace tables",activity:"Trace variable values through an algorithm."}},
"8":{
"8.1":{title:"Programming languages and implementing a program",activity:"Describe stages from problem to implemented program."},
"8.2":{title:"Declaring variables/constants, input, output and assignment",activity:"Write a small Pascal-style input/output and assignment sequence."},
"8.3":{title:"Conditional branching and loops",activity:"Choose a suitable selection or loop structure."},
"8.4":{title:"Testing, debugging and documentation",activity:"Identify an error and describe a testing/debugging approach."}}
};
function ITCoachContentForLesson48(topic,lesson){return ITCoachContent48[String(topic)]?.[String(lesson)]||null;}
