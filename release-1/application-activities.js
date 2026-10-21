/* IT Coach application-level activities — prototype */
const ITCoachApplicationActivities=[
{topic:"4",lesson:"4.1",skill:"Word processing",type:"scenario",title:"Professional document challenge",prompt:"Create a one-page school notice using headings, consistent formatting, a table, and clear page layout.",evidence:["document structure","formatting","table use","readability"]},
{topic:"4",lesson:"4.3",skill:"Presentation software",type:"scenario",title:"Mini presentation challenge",prompt:"Plan a short presentation for a school audience. Organize the content into logical slides and apply consistent readable design.",evidence:["slide structure","content organization","readability","consistency"]},
{topic:"4",lesson:"4.4",skill:"Web page design",type:"scenario",title:"Web page planning challenge",prompt:"Design the structure of a simple school information web page, identifying page sections, navigation and appropriate content.",evidence:["structure","navigation","content","usability"]},
{topic:"5",lesson:"5.2",skill:"Formulae, functions and absolute references",type:"scenario",title:"Spreadsheet calculation challenge",prompt:"Design a spreadsheet calculation for a school activity. Identify the inputs, formulas and any value that should remain fixed when formulas are copied.",evidence:["formula logic","function selection","absolute reference reasoning"]},
{topic:"5",lesson:"5.4",skill:"Charts and multiple worksheets",type:"scenario",title:"Data communication challenge",prompt:"Choose an appropriate chart for a small dataset and explain what pattern or comparison the chart should communicate.",evidence:["chart selection","data interpretation","communication"]},
{topic:"6",lesson:"6.1",skill:"Database concepts and terminology",type:"scenario",title:"Database planning challenge",prompt:"Plan a small database for a school activity. Identify suitable fields and describe what one record represents.",evidence:["field selection","record meaning","organization"]},
{topic:"6",lesson:"6.3",skill:"Forms, queries and reports",type:"scenario",title:"Database information challenge",prompt:"Describe a query that would retrieve a selected group of records and explain how the result could be presented in a report.",evidence:["criteria","query purpose","report purpose"]},
{topic:"7",lesson:"7.3",skill:"Algorithms, pseudocode and flowcharts",type:"scenario",title:"Algorithm design challenge",prompt:"Develop an algorithm for a simple everyday computing problem using pseudocode or a flowchart.",evidence:["sequence","logic","clarity","completeness"]},
{topic:"7",lesson:"7.4",skill:"Trace tables and testing",type:"scenario",title:"Algorithm testing challenge",prompt:"Create a trace table for an algorithm using suitable test data and show how variable values change.",evidence:["test data","variable tracking","expected result"]},
{topic:"8",lesson:"8.3",skill:"Selection and loops",type:"scenario",title:"Pascal control-structure challenge",prompt:"Design Pascal-style logic that uses selection or repetition to solve a small problem. Explain why the chosen structure is appropriate.",evidence:["selection/loop choice","logic","termination","clarity"]},
{topic:"8",lesson:"8.4",skill:"Testing, debugging and documentation",type:"scenario",title:"Debugging challenge",prompt:"Given a suspected program error, describe how you would test it, identify the likely cause and document the correction.",evidence:["test strategy","error identification","correction","documentation"]}
];
function ITCoachApplicationForTopic(topicNo){return ITCoachApplicationActivities.filter(a=>a.topic===String(topicNo));}
function ITCoachRenderApplicationActivity(topicNo){
 const e=document.getElementById("applicationActivity");if(!e)return;
 const a=ITCoachApplicationForTopic(topicNo)[0];
 if(!a){e.innerHTML="<div class='card'><p>No approved application activity is available for this topic yet.</p></div>";return;}
 e.innerHTML='<div class="card"><h2>'+a.title+'</h2><p><b>Scenario task:</b> '+a.prompt+'</p><h3>Evidence to demonstrate</h3><ul>'+a.evidence.map(x=>'<li>'+x+'</li>').join('')+'</ul><p><b>Note:</b> This prototype activity is not an official CXC assessment task.</p></div>';
}
