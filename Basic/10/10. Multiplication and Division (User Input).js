"use strict";
const form = document.getElementById("numbersForm");
function handleSubmit(event) {
    let result;
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const buttonValue = event.submitter?.getAttribute("value") || "";
    console.log(+(formData.get("First") || 0));
    // result = event.submitter. === "multiply" ? data.First * data.Second :  data.First / data.Second ;
    result = buttonValue ===
        "multiply" ?
        +(formData.get("First") || 0) * +(formData.get("Second") || 0) :
        +(formData.get("First") || 0) / +(formData.get("Second") || 0);
    const resultText = document.getElementById("resultElement");
    resultText.innerText = `The result is:${result}`;
}
form?.addEventListener("submit", handleSubmit);
