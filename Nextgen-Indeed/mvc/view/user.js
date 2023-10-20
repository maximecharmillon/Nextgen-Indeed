let link= "http://localhost/Nextgen-Indeed/mvc/controler/Cuser.php";

let user= select_userId()
select_user();

let createUser= document.getElementById("createUser")
if(createUser!= null){
    
    createUser.addEventListener("click", function(){
        let createUsername= document.getElementById("createUsername").value
        let createEmail= document.getElementById("createEmail").value
        let createPwd= document.getElementById("createPwd").value
        let insertUser= new FormData
        insertUser.append("user", createUsername)
        insertUser.append("pwd", createPwd)
        insertUser.append("email", createEmail)
        insertUser.append("jobId", null)
            fetch(link,{
                method: "POST",
                mode: "cors",
                body: insertUser
            }).then((r)=> { 
                return r.text()
            })
          
        document.location.href="http://localhost/Nextgen-Indeed/pages/Profile.html"
            
    })
}

function select_userId(createUsername){
        displayId = new FormData
        displayId.append("user", createUser)
        fetch(link, {
            methode: "POST",
            mode: "cors",
            body: displayId
        })
        let displayUsername= 0
        fetch(link+ "?selectUserId="+ encodeURIComponent(displayUsername), {
            method: "GET",
            mode: "cors", 
        }).then((r)=> { return r.text()
        }).then((body)=> {

            return body
            
        })
        
}

    let signIn= document.getElementById("loginForm")
if(signIn!= null){
    
    signIn.addEventListener("click", function(){
        let connUser= document.getElementById("username").value
        fetch(link+ "?selectUserId="+ encodeURIComponent(connUser), {
            method: "GET",
            mode: "cors", 
        }).then((r)=> { return r.text()
        }).then((body)=> {
            return body
            
        })
        
})
}


function select_user(){
    let userId= select_userId()
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
        updateUser.append("updateUserId", user)
    
        fetch(link, {
            method: "POST",  
            mode: "cors",
            body: updateUser
        }).then ((r)=> { 
            return r.text()
        })
    }) 
    location.reload()  
    }

function delete_user(){
    buttonSupp.addEventListener("click", function(){
            let deleteId= user
            fetch(link+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then((alert("deleting done")))
        })
    }
        



let buttonModif= document.querySelector("#user #modif")
if (buttonModif!= null){
    let form= document.querySelector("#user form")
buttonModif.addEventListener("click", function(){
    if(getComputedStyle(form).display == "none"){
        form.style.display = "block";
        buttonModif.innerHTML= "Send";
        update_user();
        }
    else{
        form.style.display = "none";
        buttonModif.innerHTML= "Modify";
    } 
})
}


let buttonSupp= document.querySelector("#user #supp")
if(buttonSupp!= null){
    buttonSupp.addEventListener("click", function(){
        if(buttonSupp.innerHTML== "Delete"){
            buttonSupp.innerHTML= "Are you sure !";
            delete_user();
            }
        else{
            
            buttonSupp.innerHTML= "Delete";
        } 
    })
}



let password= document.getElementById("loginForm")
if(password!= null){
    document.addEventListener("click", function(event) {
        event.preventDefault();
    
        let username = document.getElementById("username").value;
        let password = document.getElementById("pwd").value;
        console.log(password)
        let buttonSignIn= document.getElementById("loginForm")
        buttonSignIn.addEventListener("click", ()=>{
            fetch("http://localhost/Nextgen-Indeed/mvc/controler/Cuser.php", {
                method: "POST",
                mode: "cors",
                body: { username, password },
                
            })
            .then(res => res.text)
            .then(data => {
                (body)=> console.log((body))
                if (data.success) {
                    window.location.href = "../../pages/accueil.html";
                } else {
                    let fail= document.getElementById("message")
                    if(fail!= null)
                        fail.innerHTML = "Login failed. Please try again.";
                }
            });
        })
    });
}
