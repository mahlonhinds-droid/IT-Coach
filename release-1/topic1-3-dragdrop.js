/* Topics 1–3 richer drag/drop-style interaction foundation */
function ITCoachRenderDragMatch(containerId,items,targetLabels,onComplete){
 const e=document.getElementById(containerId);if(!e)return;
 const shuffled=[...items].sort(()=>Math.random()-.5);
 e.innerHTML='<div class="itc-drag-grid">'+shuffled.map((x,i)=>'<button draggable="true" data-item="'+x.id+'" style="margin:4px;padding:8px" ondragstart="event.dataTransfer.setData(\'text/plain\',\''+x.id+'\')">'+x.label+'</button>').join('')+'</div><div class="itc-drop-grid">'+targetLabels.map(t=>'<div data-target="'+t.id+'" ondragover="event.preventDefault()" ondrop="ITCoachDropMatch(event,\''+containerId+'\')" style="min-height:45px;border:2px dashed #aaa;margin:6px;padding:8px"><b>'+t.label+'</b><span class="drop-items"></span></div>').join('')+'</div><button onclick="ITCoachEvaluateDragMatch(\''+containerId+'\')">Check Matches</button>';
 window.ITCoachDragMatchComplete=onComplete||function(){};
}
function ITCoachDropMatch(event,containerId){
 const id=event.dataTransfer.getData("text/plain"),drop=event.currentTarget;
 const source=document.querySelector('[data-item="'+id+'"]');if(!source)return;
 const clone=source.cloneNode(true);clone.draggable=false;drop.querySelector(".drop-items").appendChild(clone);
}
function ITCoachEvaluateDragMatch(containerId){
 const e=document.getElementById(containerId);if(!e)return;
 const drops=e.querySelectorAll("[data-target]");let filled=0;drops.forEach(d=>{if(d.querySelector("[data-item]"))filled++});
 e.insertAdjacentHTML("beforeend",'<p><b>'+filled+' area(s) completed.</b> Review your reasoning, then continue to the evidence step.</p>');
}
