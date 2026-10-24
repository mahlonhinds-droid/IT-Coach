/* Topics 1–3 accessibility helpers */
function ITCoachSetAccessibleMode(enabled){
 document.documentElement.dataset.itcAccessible=enabled?"true":"false";
 localStorage.setItem("itcoachAccessibleMode",enabled?"true":"false");
}
function ITCoachInitAccessibility(){
 const on=localStorage.getItem("itcoachAccessibleMode")==="true";
 document.documentElement.dataset.itcAccessible=on?"true":"false";
}
if(typeof document!=="undefined")document.addEventListener("DOMContentLoaded",ITCoachInitAccessibility);
