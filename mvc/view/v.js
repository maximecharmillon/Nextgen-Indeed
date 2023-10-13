let user= new FormData
user.append("user", "max")
user.append("pwd", 2)
user.append("email", "mpointfr")
user.append("userId", 4)
user.append("jobId", 46)

fetch("http://localhost/Nextgen-Indeed/mvc/controler/c.php",{
    method: "POST",
    mode: "cors",
    body: user
}).then((r)=> { return r.text()
}).then((body)=> {
    console.log(body);
    let text= document.createElement("p");
    text.innerHTML= body;
    document.querySelector("div").appendChild(text);
})

