let link= "http://localhost/Nextgen-Indeed/mvc/controler/Cuser.php";

let createUser= document.getElementById("createUser")
if(createUser!= null){
    let idUser= Math.floor(Math.random()*100)
    createUser.addEventListener("click", function(){
        let createUsername= document.getElementById("createUsername").value
        let createEmail= document.getElementById("createEmail").value
        let createPwd= document.getElementById("createPwd").value
        let insertUser= new FormData
        insertUser.append("user", createUsername)
        insertUser.append("pwd", createPwd)
        insertUser.append("email", createEmail)
        insertUser.append("userId", idUser)
        insertUser.append("jobId", null)
            fetch(link,{
                method: "POST",
                mode: "cors",
                body: insertUser
            }).then((r)=> { 
                console.log(r)
            })
    })
}


function select_user(){
    let userId= idUser
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
        updateUser.append("updateUserId", idUser)
    
        fetch(link, {
            method: "POST",  
            mode: "cors",
            body: updateUser
        }).then ((r)=> { 
            return r.text()
        })
    })   
    }

function delete_user(){
    buttonSupp.addEventListener("click", function(){
            let deleteId= IdUser
            fetch(link+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then((alert("delete done")))
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
        if(buttonSupp.innerHTML== "Supprimer"){
            buttonSupp.innerHTML= "Vous êtes sur !";
            delete_user();
            }
        else{
            
            buttonSupp.innerHTML= "Supprimer";
        } 
    })
}


