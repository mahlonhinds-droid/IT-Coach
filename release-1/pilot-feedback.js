/* IT Coach Student Pilot Feedback 1.0
 * Browser-only pilot feedback and lightweight usage telemetry.
 * No names, email addresses, or external transmission.
 */
(function(){
  var KEY="itcoachPilotFeedbackV1";
  var EVENT_KEY="itcoachPilotEventsV1";
  function active(){return typeof ITCoachGetActiveStudentId==="function"?String(ITCoachGetActiveStudentId()):"1";}
  function read(k){try{return JSON.parse(localStorage.getItem(k)||"[]");}catch(e){return[];}}
  function write(k,v){localStorage.setItem(k,JSON.stringify(v));}
  function recordFeedback(rating,comment,context){
    var rows=read(KEY); rows.push({studentId:active(),rating:Number(rating),comment:String(comment||"").slice(0,500),context:context||"general",at:new Date().toISOString()}); write(KEY,rows); return rows[rows.length-1];
  }
  function recordEvent(type,data){
    var rows=read(EVENT_KEY); rows.push({studentId:active(),type:String(type),data:data||{},at:new Date().toISOString()}); write(EVENT_KEY,rows); return true;
  }
  function summary(){
    var rows=read(KEY), events=read(EVENT_KEY), ratings=rows.map(function(x){return x.rating;}).filter(Boolean);
    return {feedbackCount:rows.length,eventCount:events.length,averageRating:ratings.length?Math.round(ratings.reduce(function(a,b){return a+b;},0)/ratings.length*10)/10:0};
  }
  function renderFeedback(el,context){
    if(!el)return;
    el.innerHTML='<div class="card"><h3>Help us improve IT Coach</h3><p class="small">You are part of the Student Pilot. Your feedback helps us build a better learning experience.</p><p>How helpful was this activity?</p><div id="pilotStars">'+[1,2,3,4,5].map(function(n){return '<button class="secondary" onclick="ITCoachPilotRate('+n+')">'+n+' ★</button>';}).join("")+'</div><textarea id="pilotComment" rows="3" style="width:100%;margin-top:10px;box-sizing:border-box" placeholder="What should we improve? (optional)"></textarea><button onclick="ITCoachPilotSubmitFeedback(\''+String(context||"general").replace(/'/g,"")+"\')">Submit feedback</button><div id="pilotFeedbackStatus" class="small"></div></div>';
  }
  var selected=0;
  window.ITCoachPilotRate=function(n){selected=Number(n);var e=document.getElementById("pilotFeedbackStatus");if(e)e.textContent="Rating selected: "+n+"/5";};
  window.ITCoachPilotSubmitFeedback=function(context){
    if(!selected){var e=document.getElementById("pilotFeedbackStatus");if(e)e.textContent="Please select a rating first.";return;}
    var c=document.getElementById("pilotComment"),status=document.getElementById("pilotFeedbackStatus");
    recordFeedback(selected,c?c.value:"",context); recordEvent("feedback_submitted",{context:context,rating:selected}); selected=0;
    if(status)status.textContent="Thank you — your feedback was saved on this device.";
    if(c)c.value="";
  };
  window.ITCoachPilotRecordEvent=recordEvent;
  window.ITCoachPilotFeedbackSummary=summary;
  window.ITCoachPilotRenderFeedback=renderFeedback;
})();
