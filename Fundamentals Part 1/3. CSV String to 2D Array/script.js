"use strict";
const inputButton = document.getElementById("csvFile");
let _2dArray = [];
function handleSelectedFile(event, result) {
    const file = event.target.files[0];
    console.log("entroo");
    console.log(file);
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        // let view = new Uint8Array(reader.result as ArrayBuffer)
        const csvArray = reader.result?.toString().split('\n');
        result = csvArray;
    };
}
inputButton?.addEventListener("change", (event) => handleSelectedFile(event, _2dArray));
console.log(_2dArray);
