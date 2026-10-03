"use strict";
const button = document.getElementById('button1');
button.addEventListener('click', async () => {
    navigator.clipboard.writeText("have a nice day =)");
});
navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state == "granted" || result.state == "prompt") {
        alert("Write access granted!");
    }
});
