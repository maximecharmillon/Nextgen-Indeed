let link= "http://localhost/Nextgen-Indeed/mvc/controler/Cuser.php";

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
        insertUser.append("jobId", 0)
            fetch(link,{
                method: "POST",
                mode: "cors",
                body: insertUser
            }).then((r)=> { 
                select_userId(createUsername)
                return r.text()
            })

            
        
        //document.location.href="http://localhost/Nextgen-Indeed/pages/Profile.html"
            
    })
}



function select_userId(createUsername){
        let insertId
        console.log(createUsername)
        fetch(link+ "?createUserId="+ encodeURIComponent(createUsername), {
            method: "GET",
            mode: "cors",
        }).then((r)=> { 
            return r.text()}
        ).then((body)=>{
            insert_id(body)
            
        } ) 
        

}
function insert_id(insertId){
    let insertData = new FormData
        insertData.append("insertId", insertId)
        fetch(link,{
            method: "POST",
            mode: "cors",
            body: insertData
        }).then((r)=> { 
            return r.text()
        })
}

function find_userId(){
    let display= 0
    fetch(link+ "?findId="+ encodeURIComponent(display), {
        method: "GET",
        mode: "cors", 
    }).then((r)=> {
        return r.text()
    }).then((body) => {console.log(body)
        return body})
}

let user= find_userId()
console.log(user+ "=user")

select_user(user);

    let signIn= document.getElementById("loginForm")
if(signIn!= null){
    
    signIn.addEventListener("click", function(){
        let connUser= document.getElementById("username").value
        select_userId(connUser)
        fetch(link+ "?selectUserId="+ encodeURIComponent(connUser), {
            method: "GET",
            mode: "cors", 
        }).then((r)=> { return r.text()
        }).then((body)=> {
            return body
            
        })
        
})
}


function select_user(user){
    let userId= user
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
