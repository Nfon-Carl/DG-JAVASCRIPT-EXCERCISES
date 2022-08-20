let styleButton = document.querySelector("#jsstyle");
let ex3btn = document.querySelector("#ex3buttton")

// ex 1
let state = 0;
let ex3State = 0;

function changeState() {
  console.log(state);
  if (state === 1) {
    state = 0;
    js_style(state);
  } else if (state === 0) {
    state = 1;
    js_style(state);
  }
  console.log(state);
}

function js_style(state) {
  if (state === 1) {
    text.style.fontSize = "14pt";
    text.style.fontFamily = "Comic Sans MS";
    text.style.color = "green";
  } else if (state === 0) {
    text.style.fontSize = "10pt";
    text.style.fontFamily = "Tahoma";
    text.style.color = "black";
  }
}

function getFormvalue() {
  let x = document.getElementById("form1");
  for (let i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
}

// styleButton.addEventListener("click", js_style);
styleButton.addEventListener("click", changeState);
ex3btn.addEventListener("click",changeex3State)

// ex 1 ends here




// ex3

function changeex3State() {
    console.log(ex3State);
    if (ex3State === 1) {
      ex3State = 0;
      ex3_style(ex3State);
    } else if (ex3State === 0) {
      ex3State = 1;
      ex3_style(ex3State);
    }
    console.log(ex3State);
  }


function ex3_style(ex3State) {
    if (ex3State === 1) {
      text3.style.backgroundColor = "#4875df";
    //   text3.style.fontFamily = "Comic Sans MS";
      text3.style.color = "white";
    } else if (state === 0) {
      text3.style.backgroundColor = "#F9F5EB";
    //   text3.style.fontFamily = "Tahoma";
      text3.style.color = "black";
    }
  }





/*
     other methods of defonong functions
   const greet = ()=>{

  }
     spread operator
     map

     Smart goals
  */