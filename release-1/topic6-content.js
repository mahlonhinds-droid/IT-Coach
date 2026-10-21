/* Topic 6 rich student content — mapped to Complete Draft pp.70-77 */
const ITCoachTopic6Content={
"6.1":{title:"Database concepts and terminology",sections:[
["Database basics","A database is an organised collection of related data. A DBMS is software used to create and manage databases."],
["Core terms","A table stores related data. A record is one row. A field is one attribute/column. An entity is the thing represented; an attribute describes it."],
["Keys and relationships","A primary key uniquely identifies a record. A foreign key holds the primary key value from another table. A composite key uses two or more fields together."],
["Data types","Choose suitable types for text, numbers, dates and logical Yes/No values. Suitable types support accurate storage and queries."],
["Queries","A query retrieves records meeting criteria. Use operators such as =, <>, >, <, >= and <=. AND requires both conditions; OR allows either condition. A calculated field is worked out from other fields."],
["Database administration","A database administrator manages areas such as security and backup."]
]},
"6.2":{title:"Creating and modifying a database",sections:[
["Design","Identify entities and attributes, choose primary keys, select data types and plan relationships before entering data."],
["Tables and records","Create tables, define fields and keys, enter records and modify table structures when requirements change."],
["Relationships","One-to-one and one-to-many relationships connect related tables. Separate related information to reduce unnecessary repetition and support integrity."],
["Practical target","The Complete Draft's SBA guidance limits the database component to no more than three tables."]
]},
"6.3":{title:"Forms, queries and reports",sections:[
["Forms","Forms support easier data entry, including one record at a time. A main form can be associated with a sub-form for related records."],
["Queries","Create single-table and multi-table queries, apply criteria and include a calculated field where required."],
["Reports","Reports present selected information for viewing/printing. They can use sorting, grouping and summaries such as totals or averages."],
["SBA-oriented practice","The Complete Draft describes one form with a main form and sub-form, two queries and one report with grouping and sorting using two or three tables."]
]};
function ITCoachRenderTopic6Content(lesson,containerId){const e=document.getElementById(containerId),d=ITCoachTopic6Content[lesson];if(!e||!d)return;e.innerHTML='<div class="card"><h2>'+d.title+'</h2>'+d.sections.map(s=>'<h3>'+s[0]+'</h3><p>'+s[1]+'</p>').join('')+'</div>'}
