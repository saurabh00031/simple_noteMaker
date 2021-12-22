console.log("NotesApp");
mynotes();
let addBtn = document.getElementById('addbtn');

addBtn.addEventListener("click", function (e) {

  let addtxt = document.getElementById('addtxt');

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  }
  else 
  {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  console.log(notesObj);

  mynotes();

});

//function to show elements of localStorage

function mynotes() {
  let notes = localStorage.getItem("notes");

  if(notes == null) 
  {
    notesObj = [];
  }
  else 
  {
    notesObj = JSON.parse(notes);
  }


  let htmls = "";

  notesObj.forEach(function (element, index) {
    htmls +=
      `
      <div class="noteCard"  style="width: 18rem;">    
      <div class="card-body">
        <h5 class="card-title"> ${index+1}</h5>
        <p class="card-text"> ${element}</p>
        <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>

 `

  });

  let notesElem = document.getElementById('notes');

  if (notesObj.length!=0)
   {
    notesElem.innerHTML = htmls;
  }
  else{
    notesElem.innerHTML = "Nothing to show,plxz add notes";
  }

}


//function to delete a note


function deleteNote(index)
{
  let notes = localStorage.getItem("notes");

   console.log("i m deleting a note",index);

   if (notes == null) 
   {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  mynotes();

  
   


}




let search=document.getElementById('sch');

search.addEventListener("input",function()
{

 
let vali=search.value.toLowerCase();
console.log("input event fired",vali);

let noteCards=document.getElementsByClassName('noteCard');



Array.from(noteCards).forEach(function(element)
{
    let cardtxt=element.getElementsByTagName("p")[0].innerText;
    console.log(cardtxt)
    console.log('.......');
    
    if(cardtxt.includes(vali))
    {
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
   
});



});
