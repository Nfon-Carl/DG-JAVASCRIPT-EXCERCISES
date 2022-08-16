let styleButton = document.querySelector("jsstyle");
// let submitButton = document.querySelector("submitbtn")

function changeState(){

    if(state===1)
    {
        state=0
        js_style(state)
    }
     if (state===0){
        state=1
        js_style(state)
    }
}

function js_style(state) 
{
//font styles added by JS:

if (state === 1){


 text.style.fontSize = "14pt";
 text.style.fontFamily = "Comic Sans MS";
 text.style.color = "green";

}
if (state===0){
    text.style.fontSize = "10pt";
    text.style.fontFamily = "Tahoma";
    text.style.color = "black";
}

}


function getFormvalue()
{
  let x=document.getElementById("form1");
  for (let i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
      console.log(x.elements[i].value);
     }  
   }
}



styleButton.addEventListener("click", changeState);

