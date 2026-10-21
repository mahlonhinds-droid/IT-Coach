/* Browser-only practical learning workspaces.
   These are learning simulations, not replacements for commercial software. */
const ITCoachPracticalWorkspaces={
"4":{name:"Document & Web Workspace",tasks:["Draft a short document and identify appropriate formatting choices.","Plan a simple web-page structure for a stated audience."]},
"5":{name:"Spreadsheet Workspace",tasks:["Enter values and calculate a total using SUM.","Identify a suitable chart for a data set.","Apply an absolute reference in a formula scenario."]},
"6":{name:"Database Workspace",tasks:["Identify fields and records in a sample table.","Select a query for a stated criterion.","Choose a suitable form or report for a scenario."]},
"7":{name:"Algorithm Workspace",tasks:["Break a problem into smaller components.","Write pseudocode for a simple process.","Complete a trace table.","Identify the expected output."]},
"8":{name:"Pascal Workspace",tasks:["Identify declarations and assignment.","Write a simple input/output sequence.","Choose a conditional or loop.","Identify a likely testing or debugging step."]}
};
function ITCoachGetWorkspace(topic){return ITCoachPracticalWorkspaces[String(topic)]||null;}
