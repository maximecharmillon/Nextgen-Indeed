let insertUser= new FormData
insertUser.append("user", "max")
insertUser.append("pwd", 2)
insertUser.append("email", "mpointfr")
insertUser.append("userId", 4)
insertUser.append("jobId", 46)


let link= "http://localhost/Nextgen-Indeed/mvc/controler/c.php";

fetch(link,{
    method: "POST",
    mode: "cors",
    body: insertUser
}).then((r)=> { return r.text()
}).then((body)=> {
    console.log(body);
    let postUser= document.createElement("p");
    postUser.innerHTML= body;
    document.querySelector("div").appendChild(postUser);
})


let selectUser= 1

fetch(link+ "?userId="+ encodeURIComponent(selectUser), {
    method: "GET",
    mode: "cors",
    
}).then((r)=> { 
    r.text()
}).then((body)=> {
    let getUser= document.createElement("p")
    getUser.innerHTML= "Bonjour "+ body;
    document.querySelector("div").appendChild(getUser)
})

