const form = document.getElementById("numbersForm");

function handleSubmit(event: SubmitEvent){
    let result;
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const buttonValue: String = event.submitter?.getAttribute("value") || ""

    console.log(+(formData.get("First")|| 0))
    // result = event.submitter. === "multiply" ? data.First * data.Second :  data.First / data.Second ;
    result = buttonValue === 
    "multiply" ? 
     +(formData.get("First")|| 0) * +(formData.get("Second")|| 0) :
      +(formData.get("First")|| 0) / +(formData.get("Second")|| 0)

    const resultText: HTMLElement = document.getElementById("resultElement") as HTMLElement;
    resultText.innerText = `The result is:${result}`;
}


form?.addEventListener("submit",handleSubmit)