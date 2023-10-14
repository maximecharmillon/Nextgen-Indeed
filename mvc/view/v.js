let insertUser= new FormData
insertUser.append("user", "max")
insertUser.append("pwd", 2)
insertUser.append("email", "mpointfr")
insertUser.append("userId", 4)
insertUser.append("jobId", 46)

let link= "http://localhost/Nextgen-Indeed/mvc/controler/c.php";

let create= document.getElementById("create")
button.addEventListener("click", function(){
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
})


let read= document.getElementById("read")
button.addEventListener("click", function(){
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
})

let update= document.getElementById("update")
button.addEventListener("click", function(){
    let updateUser= new FormData
    updateUser.append("updateUser", "jeff")
    updateUser.append("updateEmail", "pointf")
    updateUser.append("updatePwd", 42)
    updateUser.append("updateUserId", 4)

    fetch(link, {
        method: "POST",  
        mode: "cors",
        body: updateUser
    }).then ((r)=> { console.log(r)
        return r.text()
    }).then((body)=> console.log(body))
})


let delet= document.getElementById("delete")
button.addEventListener("click", function(){
    let deleteId= 4

    fetch(link+ "?deleteId="+ deleteId, {
        method: "GET",  
        
    }).then ((r)=> { 
    }).then((body)=> alert("delete done"))

})
