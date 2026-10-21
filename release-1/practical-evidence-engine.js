/* IT Coach practical evidence scoring — prototype */
const ITCoachEvidenceRules={
 "document structure":{weight:1},formatting:{weight:1},"table use":{weight:1},readability:{weight:1},
 "slide structure":{weight:1},"content organization":{weight:1},consistency:{weight:1},
 structure:{weight:1},navigation:{weight:1},content:{weight:1},usability:{weight:1},
 "formula logic":{weight:2},"function selection":{weight:1},"absolute reference reasoning":{weight:2},
 "chart selection":{weight:1},"data interpretation":{weight:1},communication:{weight:1},
 "field selection":{weight:1},"record meaning":{weight:1},organization:{weight:1},
 criteria:{weight:1},"query purpose":{weight:1},"report purpose":{weight:1},
 sequence:{weight:1},logic:{weight:2},clarity:{weight:1},completeness:{weight:1},
 "test data":{weight:1},"variable tracking":{weight:2},"expected result":{weight:1},
 "selection/loop choice":{weight:2},termination:{weight:1},
 "test strategy":{weight:2},"error identification":{weight:2},correction:{weight:2},documentation:{weight:1}
};
function ITCoachScoreEvidence(activityId,evidence){
 const keys=Array.isArray(evidence)?evidence:[];
 const rules=keys.map(k=>ITCoachEvidenceRules[k]||{weight:1});
 const max=rules.reduce((n,r)=>n+r.weight,0);
 const earned=rules.filter((r,i)=>evidence[i]===true).reduce((n,r)=>n+r.weight,0);
 return {score:max?Math.round(earned/max*100):0,earned,max,evidenceCount:keys.length};
}
function ITCoachPracticalBand(score){return score>=85?"application":score>=70?"developing":"foundation";}
function ITCoachRenderEvidenceChecklist(activityId,evidence){
 const e=document.getElementById("practicalEvidence");if(!e)return;
 e.innerHTML='<div class="card"><h3>Evidence checklist</h3>'+evidence.map((x,i)=>'<label style="display:block;margin:8px 0"><input type="checkbox" id="ev'+i+'"> '+x+'</label>').join('')+'<button onclick="ITCoachSubmitEvidence('+JSON.stringify(evidence)+')">Submit evidence</button></div>';
}
function ITCoachSubmitEvidence(evidence){
 const values=evidence.map((x,i)=>document.getElementById("ev"+i)?.checked===true);
 const r=ITCoachScoreEvidence("activity",values);
 const e=document.getElementById("practicalEvidence");
 if(e)e.innerHTML='<div class="card"><h3>Practical result</h3><p class="score">'+r.score+'%</p><p>Band: <b>'+ITCoachPracticalBand(r.score)+'</b></p><p>This prototype score reflects the selected evidence checklist and is not an official examination mark.</p></div>';
 localStorage.setItem("itcoachLastPractical",JSON.stringify({result:r,date:new Date().toISOString()}));
}
