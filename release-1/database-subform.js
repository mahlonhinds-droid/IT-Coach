/* Topic 6 main form + sub-form learning prototype */
function ITCoachDBEnsureLibraryDemo(){
 const d=ITCoachDB.load();
 d.tables.BOOK=d.tables.BOOK||{fields:[["BookID","Text",true],["Title","Text",false],["Author","Text",false],["Category","Text",false],["Copies","Number",false]],rows:[]};
 d.tables.LOAN=d.tables.LOAN||{fields:[["LoanID","Text",true],["StudentID","Text",false],["BookID","Text",false],["DateOut","Date",false],["Returned","Logical",false]],rows:[]};
 if(!d.tables.BOOK.rows.length)d.tables.BOOK.rows=[{BookID:"B01",Title:"Island Tales",Author:"Smith",Category:"Fiction",Copies:3},{BookID:"B02",Title:"Basic Maths",Author:"Persad",Category:"Education",Copies:5},{BookID:"B03",Title:"Space Facts",Author:"Lee",Category:"Science",Copies:2}];
 if(!d.tables.LOAN.rows.length)d.tables.LOAN.rows=[{LoanID:"L01",StudentID:"S01",BookID:"B01",DateOut:"2026-10-10",Returned:"No"},{LoanID:"L02",StudentID:"S01",BookID:"B03",DateOut:"2026-10-12",Returned:"Yes"}];
 ITCoachDB.save(d);return d;
}
function ITCoachDBRenderMainSubForm(containerId,studentId){
 ITCoachDBEnsureLibraryDemo();const d=ITCoachDB.load(),e=document.getElementById(containerId);if(!e)return;
 const s=d.tables.STUDENT.rows.find(x=>String(x.StudentID)===String(studentId))||d.tables.STUDENT.rows[0];if(!s){e.innerHTML="<p>No student records available.</p>";return}
 const loans=d.tables.LOAN.rows.filter(x=>String(x.StudentID)===String(s.StudentID));
 const books=d.tables.BOOK.rows;
 e.innerHTML='<div class="card"><h2>Main Form: Student</h2><p><b>Student ID:</b> '+s.StudentID+' &nbsp; <b>Name:</b> '+s.Name+' &nbsp; <b>Form:</b> '+s.Form+'</p><h3>Sub-form: Loans</h3><table border="1" cellpadding="6" style="border-collapse:collapse;width:100%"><tr><th>Loan ID</th><th>Book</th><th>Date Out</th><th>Returned</th></tr>'+loans.map(l=>{const b=books.find(x=>x.BookID===l.BookID);return '<tr><td>'+l.LoanID+'</td><td>'+(b?b.Title:l.BookID)+'</td><td>'+l.DateOut+'</td><td>'+l.Returned+'</td></tr>'}).join('')+'</table><p><button onclick="ITCoachDBAddLoanFromSubForm(\''+containerId+'\',\''+s.StudentID+'\')">Add Loan</button></p><div id="'+containerId+'Status"></div></div>';
}
function ITCoachDBAddLoanFromSubForm(containerId,studentId){
 const d=ITCoachDBEnsureLibraryDemo(),books=d.tables.BOOK.rows,loan={LoanID:"L"+String(d.tables.LOAN.rows.length+1).padStart(2,"0"),StudentID:studentId,BookID:books[0].BookID,DateOut:new Date().toISOString().slice(0,10),Returned:"No"};
 d.tables.LOAN.rows.push(loan);ITCoachDB.save(d);ITCoachDBRenderMainSubForm(containerId,studentId);const e=document.getElementById(containerId+"Status");if(e)e.textContent="Sub-form record added.";
}
