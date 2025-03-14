function firstChar(text) {
   text = text.trim();
   if(text==='') return '' ;
    return text[0];
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

