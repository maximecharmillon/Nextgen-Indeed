let link= "http://localhost/Nextgen-Indeed/mvc/controler/c.php";

let createUser= document.getElementById("createUser")
createUser.addEventListener("click", function(){

    let createUsername= document.getElementById("createUsername").value
    let createEmail= document.getElementById("createEmail").value
    let createPwd= document.getElementById("createPwd").value
    let insertUser= new FormData
    insertUser.append("user", createUsername)
    insertUser.append("pwd", createPwd)
    insertUser.append("email", createEmail)
    insertUser.append("userId", 5)
    insertUser.append("jobId", 46)
        fetch(link,{
            method: "POST",
            mode: "cors",
            body: insertUser
        }).then((r)=> { 
            return r.text()
        }).then((body)=> {
            console.log(body)
        })
})


function select_user(){
    let userId= 4
fetch(link+ "?selectUser="+ encodeURIComponent(userId), {
    method: "GET",
    mode: "cors", 
}).then((r)=> { return r.text()
}).then((body)=> {
    let getUser= document.querySelector("#user p")
    if(getUser!= null){
        getUser.innerHTML= body;
    }
    
})
}

function update_user(){
    buttonModif.addEventListener("click", function(){
        let username= document.getElementById("username").value
        let email= document.getElementById("email").value
        let pwd= document.getElementById("pwd").value
        let updateUser= new FormData
        updateUser.append("updateUser", username)
        updateUser.append("updateEmail", email)
        updateUser.append("updatePwd", pwd)
        updateUser.append("updateUserId", 4)
    
        fetch(link, {
            method: "POST",  
            mode: "cors",
            body: updateUser
        }).then ((r)=> { console.log(r)
            return r.text()
        }).then((body)=> console.log(body))
    })   
    }

function delete_user(){
    buttonSupp.addEventListener("click", function(){
            let deleteId= 4
            fetch(link+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then(alert("delete done"))
        })
    }
        

select_user();

let buttonModif= document.querySelector("#user #modif")
if (buttonModif!= null){
    let form= document.querySelector("#user form")
buttonModif.addEventListener("click", function(){
    if(getComputedStyle(form).display == "none"){
        form.style.display = "block";
        buttonModif.innerHTML= "Envoyer";
        update_user();
        }
    else{
        form.style.display = "none";
        buttonModif.innerHTML= "Modifier";
    } 
})
}


let buttonSupp= document.querySelector("#user #supp")
if(buttonSupp!= null){
    buttonSupp.addEventListener("click", function(){
        if(buttonSupp.innerHTML= "Supprimer"){
            buttonSupp.innerHTML= "Vous etes sur !";
            delete_user();
            }
        else{
            
            buttonSupp.innerHTML= "Supprimer";
        } 
    })
}


