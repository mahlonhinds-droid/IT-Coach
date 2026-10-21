/* Topic 4 rich student content — mapped to IT Coach CSEC Complete Draft, pp.46-53 */
const ITCoachTopic4Rich={
"4.1":[
{title:"Word processing: creating, formatting and editing",summary:"Create, edit, format and organise documents using text, imported content, graphics, tables and page features.",sections:[
["Editing essentials","Insert/delete characters, words, lines, sentences and paragraphs. Select text before applying a block operation. Copy keeps the original; cut and paste moves the selected text. Search and replace changes some or all copies of a word."],
["Page and character formatting","Use margins, tab stops, line spacing, justification, centre alignment, underline, highlight, uppercase, bold and italic. Character formatting includes font type/size, superscript and subscript."],
["Page features","Use page numbers, page breaks, headers, footers, footnotes, endnotes, columns and tables. A header repeats at the top of each page; a footer repeats at the bottom."],
["Review and protection","Use spell and grammar check, thesaurus, word count, language settings, comments and track changes. Protect work with automatic save, backup copies, passwords and edit restrictions."],
["Combining sources","A document can combine typed text, imported text, images, charts and shapes. Insert each object where needed and size it to fit the page."]
],check:["List three page-level formatting features.","Explain how drag and drop moves a paragraph.","State one use of track changes."]},
"4.2":[
{title:"Advanced word processing",summary:"Use an automatic table of contents, mail merge and fillable electronic forms.",sections:[
["Automatic table of contents","Apply heading styles such as Heading 1 and Heading 2. Insert an automatic table of contents, then update it after editing so headings and page numbers are current."],
["Mail merge","Create a primary document containing merge fields and a data file containing fields such as Title, Surname, Street and Town. Preview the merged letters and correct errors before merging."],
["Mail merge workflow","1. Create the primary document. 2. Create/open the data file. 3. Insert merge fields. 4. Preview and check. 5. Merge to a new document or printer."],
["Fillable forms","Use content controls such as text boxes, check boxes, date pickers and drop-down lists. Set labels/prompts and entries, lay the form out clearly, then restrict editing so users fill only the controls."]
],check:["State two steps for generating a table of contents.","Name three content controls.","Why is a data file used in mail merge?"]},
"4.3":[
{title:"Web page design",summary:"Plan, create, test, evaluate and publish a small website.",sections:[
["Plan","Identify the reason for the site, intended audience, number of pages, content of each page and layout. For practice, the workbook limits the site to no more than three pages; the SBA web-page task is limited to one page."],
["Create","Choose an appropriate design. Insert/delete text and graphics, wrap text around images, create a logo, define navigation and content areas, and create a home page with hyperlinks."],
["Hyperlinks","A hyperlink can connect to another web page, a location within the same page, an e-mail address or a user-created file."],
["Test and evaluate","Test in a browser, verify every hyperlink, use a test audience, and check that content is accurate, current, easy to use and attractive."],
["Publish and maintain","Register a domain name, use a hosting company and upload files using FTP."]
],check:["State the maximum practice site size.","Name two hyperlink types.","Why should a website be tested with an audience?"]},
"4.4":[
{title:"Presentation software — enrichment",summary:"Optional enrichment in the Complete Draft: plan and create a slide show using layouts, templates and masters, then manage and deliver it.",sections:[
["Planning and layouts","Plan the purpose and audience first. Use a suitable slide layout such as title, bullets or picture. A template provides a ready-made design."],
["Slide master","The slide master controls common design elements such as headers and footers across slides. It supports consistency."],
["Animation and transitions","Transitions control how one slide changes to the next. Animations control how objects on a slide appear."],
["Effective presentation design","Keep slides simple, use large readable fonts, maintain high contrast and consistent fonts/colours, and use relevant graphics, charts and short video clips. Too much animation can distract."],
["Managing and delivering","Insert/delete and rearrange slides with a slide sorter. Speaker notes provide private reminders. Rehearse timings, check equipment and use navigation/pointer options when presenting."]
],check:["State three guidelines for an effective presentation.","Distinguish a transition from an animation.","Give two uses of the slide master."]}
]};
function ITCoachTopic4RichContent(lesson){return ITCoachTopic4Rich[lesson]||null}
function ITCoachRenderTopic4Rich(lesson,containerId){
 const c=document.getElementById(containerId),d=ITCoachTopic4RichContent(lesson);if(!c||!d)return;
 c.innerHTML=d.map(x=>'<article class="card"><h3>'+x.title+'</h3><p>'+x.summary+'</p>'+x.sections.map(s=>'<h4>'+s[0]+'</h4><p>'+s[1]+'</p>').join('')+'<h4>Quick check</h4><ul>'+x.check.map(q=>'<li>'+q+'</li>').join('')+'</ul></article>').join('');
}
