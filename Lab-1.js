//------ Uppgift 4 --------

//1. Hämtar upp checboxen
let checkboxData = document.getElementById("divStyle");

//2. Hämtar upp alla element med classen "textField"
let textFieldElements = document.getElementsByClassName("textfield"); 

//3. Hämtar upp tabort-knappen
let removebtn = document.getElementsByTagName("button");

//4. Hämtar upp emptyDiv
let displayDiv = document.querySelector("#emptyDiv");



//------ Uppgift 5 --------


function handleContentField(e) {
//e.target = elementet där det har hänt någonting 
    console.log("event genererat av:",e.target);
    // hämtar namnet från innehålsfältet och spara det i en variabel.
    let contentField = e.target.name;
    console.log("namn artibutet som hämtades upp är ", contentField);

    // kontrollerar om namn atributet är content
    if (contentField == "content") {
        //hämtar värdet från content fältet
        let inputvalue = e.target.value;
        //skriver ut det hämtade värdet till display div
        displayDiv.innerHTML = inputvalue;
    }
}

//en annonym fuktion till checkboxen som körs vid eventet change och målet är när checkboxen är märkerat ska display div agerar 

checkboxData.addEventListener("change", function () {
    //hämtar upp fältet med id color 
    let colorField = document.getElementById("color");
    // hämtar upp den valde färgen och sparar det i en variabel
    let chosenColor = colorField.value;
    // ändrar färg på display diven
    displayDiv.style.backgroundColor= chosenColor;
});

// Koppla eventlyssnare handel content field i text fältet 
for (let i=0 ; i < textFieldElements.length ; i++) {
    textFieldElements[i].addEventListener("input", handleContentField) ;
}



// Event Listener for Remove Button
removebtn.addEventListener("click", function (){
    displayDiv.innerHTML= "";
  });
  