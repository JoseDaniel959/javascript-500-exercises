const button: HTMLElement = document.getElementById('button1') as HTMLElement;
button.addEventListener('click',async ()=>{
  navigator.clipboard.writeText("have a nice day =)")

})


navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
  if (result.state == "granted" || result.state == "prompt") {
    alert("Write access granted!");
  }
});
