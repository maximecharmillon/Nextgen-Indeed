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
}).then((r)=> { 
    return r.text()
}).then((body)=> {
    let postUser= document.createElement("p");
    postUser.innerHTML= body;
    document.querySelector("div").appendChild(postUser);
})



let userId= 4
fetch(link+ "?selectUser="+ encodeURIComponent(userId), {
    method: "GET",
    mode: "cors",
    
}).then((r)=> { return r.text()
}).then((body)=> {
    let getUser= document.createElement("p")
    getUser.innerText=  body;
    document.querySelector("div").appendChild(getUser)
})



let deleteId= 4

fetch(link+ "?deleteId="+ deleteId, {
    method: "GET",  
    
}).then ((r)=> { console.log(r)
    return r.text()
}).then((body)=> console.log(body))


