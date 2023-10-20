let linka= "http://localhost/Nextgen-Indeed/mvc/controler/Cannonce.php"


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
    let modifAnnonce= document.querySelector("#modif"+x)
    if(modifAnnonce!= null){
        modifAnnonce.addEventListener("click", function(){
            let updateDate= document.getElementById("date").value
            let updateShort= document.getElementById("ShortDescription").value
            let updateAdresse= document.getElementById("adress").value
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
        location.reload()
    }   
}

function modif_annonce(x){
    let modifAnnonce= document.querySelector(" #modif"+x)
    console.log(modifAnnonce)
    if (modifAnnonce!= null){
        let form= document.querySelector("#formUpdate"+x)
        modifAnnonce.addEventListener("click", function(){
            if(modifAnnonce.textContent== "Update"){
                form.style.display = "block";
                modifAnnonce.innerHTML= "Send";
                update_annonce(x);

                }
            else{
                
                form.style.display = "none";
                modifAnnonce.innerHTML= "Update";  
                }     
        })
    }
}

function delete_annonce(x){
    let suppAnnonce= document.querySelector("#supp"+x)
    suppAnnonce.addEventListener("click", function(){
            let deleteId= x
            fetch(linka+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then((r)=> console.log(r))
        })
        location.reload()
    }

function supp_annonce(x){
    let suppAnnonce= document.querySelector("#supp"+x)
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
  
idJob= 1
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
            insertAnnonce.append("salaire", "As you want")  // c'est fait exprès oui tkt popiette
            insertAnnonce.append("horaires", createSalaire)
            insertAnnonce.append("avantage", createAvantage)
            insertAnnonce.append("userId", idUser)
            insertAnnonce.append("corpId", createCorpId)
            insertAnnonce.append("jobId", idJob)
                fetch(linka,{
                    method: "POST",
                    mode: "cors",
                    body: insertAnnonce
                }).then((r)=> { 
                    return r.text()
                })
        });
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
        title.style.color= "#2596BE";
        title.setAttribute("id", "title"+body[i])
        let amorce= document.createElement("p")
        amorce.setAttribute("id","textShort"+body[i])
        amorce.innerText= ""
        let learnMore= document.createElement("button")
        learnMore.setAttribute("id", "selectAnnonce"+body[i])
        learnMore.innerText= "Learn More"
        learnMore.style.backgroundColor= "#2596BE";
        learnMore.style.color= "white";
        learnMore.style.borderRadius= "10px";
        let fullDesc= document.createElement("p")
        fullDesc.setAttribute("id", "textAnnonce"+body[i])
        fullDesc.innerText= ""
        let apply= document.createElement("button")
        apply.setAttribute("id", "buttonApply"+body[i])
        apply.innerText= "Apply"
        apply.style.backgroundColor= "#2596BE";
        apply.style.color= "white";
        apply.style.borderRadius= "10px";
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
        let acceuil= document.querySelector("#acceuil")
        if(acceuil!= null){
            document.querySelector("#acceuil").appendChild(title)
            document.querySelector("#acceuil").appendChild(amorce)
            document.querySelector("#acceuil").appendChild(learnMore)
            document.querySelector("#acceuil").appendChild(fullDesc)
            document.querySelector("#acceuil").appendChild(apply)
            document.querySelector("#acceuil").appendChild(formApply)
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
        let br= document.createElement("br")
        document.querySelector("#acceuil").appendChild(br)
        }
        
   
    }
})


fetch(linka+ "?displayAnnonce="+ encodeURIComponent(displayAnnonce), {
    method: "GET",
    mode: "cors"
}).then((r)=> {
    return r.text()
}).then((body)=> {
    body= body.split("")
    for (let i= 0; i<body.length; i++){
        let divModify= document.createElement("div")
    divModify.setAttribute("id", "divUpdate"+body[i])
    divModify.style.border= "1px black solid"
    divModify.style.borderRadius= "10px"
    divModify.style.padding= "1em"
    let doc= document.querySelector("#profilePage")
    if(doc!= null){
        document.querySelector("#profilePage").appendChild(divModify)
        let amorce= document.createElement("p")
        amorce.setAttribute("id","textShort"+body[i])
        amorce.innerText= ""
        let modifyButton= document.createElement("button")
        modifyButton.setAttribute("id", "modif"+body[i])
        modifyButton.innerText= "Update"
        modifyButton.style.backgroundColor= "#2596BE";
        modifyButton.style.color= "white";
        modifyButton.style.borderRadius= "10px";
        let deleteButton= document.createElement("button")
        deleteButton.setAttribute("id", "supp"+body[i])
        deleteButton.innerText= "Delete"
        deleteButton.style.backgroundColor= "#2596BE";
        deleteButton.style.color= "white";
        deleteButton.style.borderRadius= "10px";
        let formModify= document.createElement("form")
        formModify.setAttribute("id", "formUpdate"+body[i])
        formModify.style.display= "none"
            let labelAdress= document.createElement("label")
            labelAdress.setAttribute("for", "adress")
            labelAdress.innerText= "adress"
            let inputAdress= document.createElement("input")
            inputAdress.setAttribute("type", "text")
            inputAdress.setAttribute("id", "adress")
            let labelShortDesc= document.createElement("label")
            labelShortDesc.setAttribute("for", "ShortDescription")
            labelShortDesc.innerText= "Short description"
            let inputShortDesc= document.createElement("input")
            inputShortDesc.setAttribute("type", "text")
            inputShortDesc.setAttribute("id", "ShortDescription")
            let labelDate= document.createElement("label")
            labelDate.setAttribute("for", "date")
            labelDate.innerText= "Date"
            let inputDate= document.createElement("input")
            inputDate.setAttribute("type", "date")
            inputDate.setAttribute("id", "date")
        document.querySelector("#divUpdate"+body[i]).appendChild(amorce)
        document.querySelector("#divUpdate"+body[i]).appendChild(modifyButton)
        document.querySelector("#divUpdate"+body[i]).appendChild(deleteButton)
        document.querySelector("#divUpdate"+body[i]).appendChild(formModify)
        document.querySelector("#divUpdate"+body[i]).appendChild(formModify)
        document.querySelector("#formUpdate"+body[i]).appendChild(labelAdress)
        document.querySelector("#formUpdate"+body[i]).appendChild(inputAdress)
        document.querySelector("#formUpdate"+body[i]).appendChild(labelDate)
        document.querySelector("#formUpdate"+body[i]).appendChild(inputDate)
        document.querySelector("#formUpdate"+body[i]).appendChild(labelShortDesc)
        document.querySelector("#formUpdate"+body[i]).appendChild(inputShortDesc)
        modif_annonce(body[i])
        select_annonce2(body[i])
        supp_annonce(body[i])
        let br= document.createElement("br")
        document.querySelector("#profilePage").appendChild(br)
    }
    }
})








