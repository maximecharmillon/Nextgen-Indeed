let link= "http://localhost/Nextgen-Indeed/mvc/controler/c.php";

let create= document.getElementById("create")
create.addEventListener("click", function(){

    let insertUser= new FormData
    insertUser.append("user", username.value)
    insertUser.append("pwd", password.value)
    insertUser.append("email", mail.value)
    insertUser.append("userId", 4)
    insertUser.append("jobId", 0)

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
read.addEventListener("click", function(){
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
update.addEventListener("click", function(){
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
delet.addEventListener("click", function(){
    let deleteId= 4

    fetch(link+ "?deleteId="+ deleteId, {
        method: "GET",  
        
    }).then ((r)=> { 
    }).then((body)=> alert("delete done"))

})
