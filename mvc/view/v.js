form = new FormData;
form.append("USER", "max123")

fetch("http://localhost/Nextgen-Indeed/mvc/controler/c.php",{
    method: "POST",
    mode: "cors",
    body: form
}).then((r)=> {return r.text()})
.then((body)=> {
    console.log(body);
    let text= document.createElement("p");
    text.innerHTML= body;
    document.querySelector("div").appendChild(text);
})