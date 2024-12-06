//------ Uppgift 4 --------

//1. Hämtar upp checboxen
let checkboxData = document.querySelector("#divStyle");

//2. Hämtar upp alla element med classen "textField"
let textFieldElements = document.querySelectorAll(".textfield")

//3. Hämtar upp tabort-knappen
let removebtn = document.getElementById("removeButton");

//4. Hämtar upp emptyDiv
let displayDiv = document.querySelector("#emptyDiv");



//------ Uppgift 5 --------
function handleContentField(e) {
//e.target = elementet där det har hänt någonting 
    console.log("event genererat av:",e.target);
    // hämtar namnet från innehålsfältet och spara det i en variabel.
    const contentField = e.target.name; 
    console.log("namn artibutet som hämtades upp är ", contentField);

    // kontrollerar om namn atributet är content
    if (contentField == "content") {
        //hämtar värdet från content fältet
        let inputvalue = e.target.value;
        //skriver ut det hämtade värdet till display div
        displayDiv.innerHTML = inputvalue;
    }
}

//------ Uppgift 6 Del 1 --------
//Eventlyssnare för checkboxen
checkboxData.addEventListener("change", function () {
    let chosenColor = "";
    //hämtar upp fältet med id color 
    for (let i = 0; i < textFieldElements.length; i++) {
        if (textFieldElements[i].id === "color"){
            // hämtar upp den valde färgen och sparar det i en variabel
            chosenColor = textFieldElements[i].value; 
            break;
        }
    }
    // Ändrar färg på display diven
    displayDiv.style.backgroundColor= chosenColor;
});


//------ Uppgift 6 Del 2 --------
// Kopplar funtionen "handleContentField" till båda textfälten
for (let i=0 ; i < textFieldElements.length ; i++) {
    textFieldElements[i].addEventListener("input", handleContentField) ;
}


//------ Uppgift 6 Del 3 --------
// Event Listener för knappen.
removebtn.addEventListener("click", function (e){
    
    //Gör att knappen inte beter sig som submit-knapp.
    e.preventDefault();

    //Tar bort div elementet från DOM-Trädet
    displayDiv.remove();

  });
  