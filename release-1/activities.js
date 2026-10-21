/* IT Coach Release 1 activity engine — browser-only prototype */
const ITCoachActivities={
 spreadsheet:{
  title:"Spreadsheet Formula Lab",
  instructions:"Enter the formula that calculates the total of cells B2 through B5.",
  data:[12,18,10,20],
  expected:["=SUM(B2:B5)","=SUM(B2:B5)"],
  feedback:"Use the SUM function with the cell range B2:B5."
 },
 database:{
  title:"Database Query Lab",
  instructions:"Select records where Form is 4A AND Age is greater than 15.",
  rows:[{Name:"Ann",Form:"4A",Age:16},{Name:"Ben",Form:"4B",Age:15},{Name:"Cal",Form:"4A",Age:15},{Name:"Dee",Form:"4A",Age:17}],
  expected:["Ann","Dee"],
  feedback:"The query requires both conditions to be true."
 },
 algorithm:{
  title:"Algorithm Trace Lab",
  instructions:"Trace the algorithm for x = 5: set y = x + 3, then y = y * 2.",
  expected:"16",
  feedback:"Start with x=5, calculate 5+3=8, then 8*2=16."
 },
 pascal:{
  title:"Pascal Code Lab",
  instructions:"Complete the assignment statement so total becomes price plus tax.",
  prompt:"total := ________;",
  expected:["price + tax","price+tax"],
  feedback:"The assignment expression should add price and tax."
 }
};
function ITCoachCheckActivity(type,input){
 const a=ITCoachActivities[type];
 if(!a)return {correct:false,feedback:"Activity not found."};
 const normalized=String(input||"").trim().toLowerCase().replace(/\s+/g,"");
 const expected=(Array.isArray(a.expected)?a.expected:[a.expected]).map(String).map(x=>x.toLowerCase().replace(/\s+/g,""));
 return {correct:expected.includes(normalized),feedback:a.feedback};
}
