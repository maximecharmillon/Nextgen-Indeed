let link= "http://localhost/Nextgen-Indeed/mvc/controler/Cannonce.php";

let createAnnonce= document.getElementById("createAnonce")
createAnnonce.addEventListener("click", function(){

    let createDate= document.getElementById("createDate").value
    let createShort= document.getElementById("createShort").value
    let createFull= document.getElementById("createFull").value
    let createAdresse= document.getElementById("createAdresse").value
    let createSalaire= document.getElementById("createSalaire").value
    let createHonoraires= document.getElementById("createHoraires").value
    let createAvantage= document.getElementById("createAvantage").value

    let insertAnnonce= new FormData
    insertAnnonce.append("date", createDate)
    insertAnnonce.append("short", createShort)
    insertAnnonce.append("full", createFull)
    insertAnnonce.append("adresse", createAdresse)
    insertAnnonce.append("salaire", createSalaire)
    insertAnnonce.append("horaires", createHonoraires)
    insertAnnonce.append("avantage", createAvantage)
    insertAnnonce.append("userId", 5)
    insertAnnonce.append("corpId", 3)
    insertAnnonce.append("jobId", 46)
        fetch(link,{
            method: "POST",
            mode: "cors",
            body: insertAnnonce
        }).then((r)=> { 
            return r.text()
        }).then((body)=> {
            console.log(body)
        })
})


function select_annonce(){
    let jobId= 4
fetch(link+ "?selectAnnonce="+ encodeURIComponent(jobId), {
    method: "GET",
    mode: "cors", 
}).then((r)=> { return r.text()
}).then((body)=> {
    let getAnnonce= document.querySelector("#Annonce p")
    if(getAnnonce!= null){
        getAnnonce.innerHTML= body;
    }
    
})
}

function update_annonce(){
    modifAnnonce.addEventListener("click", function(){
        let updateDate= document.getElementById("createDate").value
        let updateShort= document.getElementById("createShort").value
        let updateFull= document.getElementById("createFull").value
        let updateAdresse= document.getElementById("createAdresse").value
        let updateSalaire= document.getElementById("createSalaire").value
        let updateHonoraires= document.getElementById("createHoraires").value
        let updateAvantage= document.getElementById("createAvantage").value
        let updateAnnonce= new FormData
        updateAnnonce.append("date", updateDate)
        updateAnnonce.append("short", updateShort)
        updateAnnonce.append("full", updateFull)
        updateAnnonce.append("adresse", updateAdresse)
        updateAnnonce.append("salaire", updateSalaire)
        updateAnnonce.append("honoraires", updateHonoraires)
        updateAnnonce.append("avantage", updateAvantage)
        updateAnnonce.append("userId", 5)
        updateAnnonce.append("corpId", 3)
        updateAnnonce.append("jobId", 46)
        fetch(link, {
            method: "POST",  
            mode: "cors",
            body: updateAnnonce
        }).then ((r)=> { console.log(r)
            return r.text()
        }).then((body)=> console.log(body))
    })   
    }

function delete_annonce(){
    suppAnnonce.addEventListener("click", function(){
            let deleteId= 4
            fetch(link+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then(alert("delete done"))
        })
    }
        

select_annonce();

let modifAnnonce= document.querySelector("#annonce #modif")
if (modifAnnonce!= null){
    let form= document.querySelector("#annonce form")
modifAnnonce.addEventListener("click", function(){
    if(getComputedStyle(form).display == "none"){
        form.style.display = "block";
        modifAnnonce.innerHTML= "Envoyer";
        update_annonce();
        }
    else{
        form.style.display = "none";
        modifAnnonce.innerHTML= "Modifier";
    } 
})
}


let suppAnnonce= document.querySelector("#annonce #supp")
if(suppAnnonce!= null){
    suppAnnonce.addEventListener("click", function(){
        if(suppAnnonce.innerHTML= "Supprimer"){
            suppAnnonce.innerHTML= "Vous etes sur !";
            delete_user();
            }
        else{
            
            suppAnnonce.innerHTML= "Supprimer";
        } 
    })
}


