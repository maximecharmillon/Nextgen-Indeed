let linka= "http://localhost/Nextgen-Indeed/mvc/controler/Cannonce.php"

const salaryRange = document.getElementById("salaryRange");
  const selectedSalary = document.getElementById("selectedSalary");
let selectedValue= ""
  if(salaryRange!= null){
        salaryRange.addEventListener("input", function() {
            selectedValue = parseInt(salaryRange.value);
            selectedSalary.textContent = `Select a salary : $${selectedValue}/month`;
        });
  }

let createAnnonce= document.getElementById("createAnnonce")
if(createAnnonce!= null){
        createAnnonce.addEventListener("click", function(){
            let createCorpId= document.getElementById("createCorpId").value
            let createDate= document.getElementById("createDate").value
            let createShort= document.getElementById("createShort").value
            let createFull= document.getElementById("createFull").value
            let createAdresse= document.getElementById("createAdresse").value
            let createSalaire= selectedValue;
            // let createHoraires= document.getElementById("createHoraires").value
            let createAvantage= document.getElementById("createAvantage").value
        
            let insertAnnonce= new FormData
            insertAnnonce.append("date", createDate)
            insertAnnonce.append("short", createShort)
            insertAnnonce.append("full", createFull)
            insertAnnonce.append("adresse", createAdresse)
            insertAnnonce.append("salaire", createSalaire)
            insertAnnonce.append("horaires", "As you want")
            insertAnnonce.append("avantage", createAvantage)
            insertAnnonce.append("userId", 4)
            insertAnnonce.append("corpId", createCorpId)
            insertAnnonce.append("jobId", 1)
                fetch(linka,{
                    method: "POST",
                    mode: "cors",
                    body: insertAnnonce
                }).then((r)=> { 
                    return r.text()
                })
        });
    }

function select_annonce(x){
    let annonce= "selectAnnonce"+x
    let selectAnnonce= document.getElementById(annonce)
    if(selectAnnonce!= null){
        selectAnnonce.addEventListener("click", function(){
            let jobId= x
            fetch(linka+ "?selectAnnonce="+ encodeURIComponent(jobId), {
                method: "GET",
                mode:"cors"
            }).then((r)=> { 
                return r.text()
            }).then((body)=> {
                let texta= "textAnnonce"+x
                let getAnnonce= document.getElementById(texta)
                    getAnnonce.innerHTML= body;
                if(selectAnnonce.textContent== "Learn More"){
                    selectAnnonce.innerHTML= "Learn Less"
                }
                else{
                    selectAnnonce.innerHTML= "Learn More"
                    getAnnonce.innerHTML= null
                }
                
            })
        }) 
    }
    }
    

function select_annonce2(x){
        let jobId= x
        fetch(linka+ "?selectAnnonce2="+ encodeURIComponent(jobId), {
            method: "GET",
            mode:"cors"
        }).then((r)=> { 
            return r.text()
        }).then((body)=> {
            let texta= "textShort"+x
            let getAnnonce= document.getElementById(texta)
            if(getAnnonce!= null){
                getAnnonce.innerText= body;
            }
                
    }) 
}


function update_annonce(x){
    let modifAnnonce= document.querySelector("#annonce #modif"+x)
    if(modifAnnonce!= null){
        modifAnnonce.addEventListener("click", function(){
            let updateDate= document.getElementById("date").value
            let updateShort= document.getElementById("short").value
            let updateAdresse= document.getElementById("adresse").value

            let updateAnnonce= new FormData
            updateAnnonce.append("updateDate", updateDate)
            updateAnnonce.append("updateShort", updateShort)
            updateAnnonce.append("updateAdresse", updateAdresse)
            updateAnnonce.append("updateJobId", x)

            fetch(linka, {
                method: "POST",  
                mode: "cors",
                body: updateAnnonce
            }).then ((r)=> {
                return r.text()
            })
        })
    
    }   
}

function modif_annonce(x){
    let modifAnnonce= document.querySelector("#annonce #modif"+x)
    if (modifAnnonce!= null){
        let form= document.querySelector("#annonce form")
        modifAnnonce.addEventListener("click", function(){
            if(modifAnnonce.textContent== "Modify"){
                console.log(modifAnnonce.textContent)
                form.style.display = "block";
                modifAnnonce.innerHTML= "Send";
                update_annonce(x);
                }
            else{
                console.log(modifAnnonce.textContent)
                form.style.display = "none";
                modifAnnonce.innerHTML= "Modify";
                location.reload()
                } 
                
        })
        
    
    }
}

function delete_annonce(x){
    let suppAnnonce= document.querySelector("#annonce #supp"+x)
    suppAnnonce.addEventListener("click", function(){
            let deleteId= x
            fetch(linka+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then((r)=> console.log(r))
        })
    }
function supp_annonce(x){
    let suppAnnonce= document.querySelector("#annonce #supp"+x)
    if(suppAnnonce!= null){
        suppAnnonce.addEventListener("click", function(){
            if(suppAnnonce.innerHTML== "Delete"){
                suppAnnonce.innerHTML= "Vous etes sur !";
                delete_annonce(x);
                }
            else{
                
                suppAnnonce.innerHTML= "Supprimer";
            } 
        })
    }
}
  
let displayAnnonce = 0
fetch(linka+ "?displayAnnonce="+ encodeURIComponent(displayAnnonce), {
    method: "GET",
    mode: "cors"
}).then((r)=> {
    return r.text()
}).then((body)=> {
    body= body.split("")
    for (let i= 0; i<body.length; i++){
        let title= document.createElement("h1")
        title.innerText= "Advertising "+body[i]
        title.setAttribute("id", "title"+body[i])
        let amorce= document.createElement("p")
        amorce.setAttribute("id","textShort"+body[i])
        amorce.innerText= ""
        let learnMore= document.createElement("button")
        learnMore.setAttribute("id", "selectAnnonce"+body[i])
        learnMore.innerText= "Learn More"
        let fullDesc= document.createElement("p")
        fullDesc.setAttribute("id", "textAnnonce"+body[i])
        fullDesc.innerText= ""
        let apply= document.createElement("button")
        apply.setAttribute("id", "buttonApply"+body[i])
        apply.innerText= "Apply"
        let formApply= document.createElement("form")
        formApply.setAttribute("id", "form")
            let labelUser= document.createElement("label")
            labelUser.setAttribute("for", "username")
            labelUser.innerText= "Username"
            let inputUser= document.createElement("input")
            inputUser.setAttribute("type", "text")
            inputUser.setAttribute("id", "username")
            let labelEmail= document.createElement("label")
            labelEmail.setAttribute("for", "email")
            labelEmail.innerText= "email"
            let inputEmail= document.createElement("input")
            inputEmail.setAttribute("type", "text")
            inputEmail.setAttribute("id", "email")
            let labelPhone= document.createElement("label")
            labelPhone.setAttribute("for", "phone")
            labelPhone.innerText= "Phone"
            let inputPhone= document.createElement("input")
            inputPhone.setAttribute("type", "tel")
            inputPhone.setAttribute("id", "phone")
            let labelDate= document.createElement("label")
            labelDate.setAttribute("for", "date")
            labelDate.innerText= "Date"
            let inputDate= document.createElement("input")
            inputDate.setAttribute("type", "date")
            inputDate.setAttribute("id", "date")
            let labelMessage= document.createElement("label")
            labelMessage.setAttribute("for", "message")
            labelMessage.innerText= "Message"
            let inputMessage= document.createElement("textarea")
            inputMessage.setAttribute("type", "text")
            inputMessage.setAttribute("id", "message")
        document.querySelector("main").appendChild(title)
        document.querySelector("main").appendChild(amorce)
        document.querySelector("main").appendChild(learnMore)
        document.querySelector("main").appendChild(fullDesc)
        document.querySelector("main").appendChild(apply)
        document.querySelector("main").appendChild(formApply)
        apply.addEventListener("click", function(){
            if(apply.innerText== "Apply"){
                document.querySelector("#form").appendChild(labelUser)
                document.querySelector("#form").appendChild(inputUser)
                document.querySelector("#form").appendChild(labelEmail)
                document.querySelector("#form").appendChild(inputEmail)
                document.querySelector("#form").appendChild(labelPhone)
                document.querySelector("#form").appendChild(inputPhone)
                document.querySelector("#form").appendChild(labelDate)
                document.querySelector("#form").appendChild(inputDate)
                document.querySelector("#form").appendChild(labelMessage)
                document.querySelector("#form").appendChild(inputMessage)  
                apply.innerText= "Send"
                formApply.style.display= "block";
            }
            else{
                apply.innerText= "Apply";
                formApply.style.display= "none";
            }
        })
    select_annonce2(body[i])
    select_annonce(body[i])
    }
})




modif_annonce(1);
modif_annonce(2);
modif_annonce(3);
modif_annonce(4);
modif_annonce(5);
modif_annonce(6);
modif_annonce(7);

supp_annonce(1);
supp_annonce(2);
supp_annonce(3);
supp_annonce(4);
supp_annonce(5);
supp_annonce(6);
supp_annonce(7);




