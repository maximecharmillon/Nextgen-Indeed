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
            insertAnnonce.append("userId", 5)
            insertAnnonce.append("corpId", createCorpId)
            insertAnnonce.append("jobId", 7)
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
        }).then ((r)=> { console.log(r)
            return r.text()
        })
    })   
    }

function modif_annonce(x){
    let modifAnnonce= document.querySelector("#annonce #modif"+x)
    if (modifAnnonce!= null){
        let form= document.querySelector("#annonce form")
        modifAnnonce.addEventListener("click", function(){
            if(getComputedStyle(form).display == "none"){
                form.style.display = "block";
                modifAnnonce.innerHTML= "Envoyer";
                update_annonce(x);
                }
            else{
                form.style.display = "none";
                modifAnnonce.innerHTML= "Modifier";
                } 
        })
    }
}

function delete_annonce(){
    suppAnnonce.addEventListener("click", function(){
            let deleteId= 4
            fetch(linka+ "?deleteId="+ deleteId, {
                method: "GET",  
            }).then(alert("delete done"))
        })
    }
        

select_annonce(1);
select_annonce(2);
select_annonce(3);
select_annonce(4);
select_annonce(5);
select_annonce(6);
select_annonce(7);
select_annonce2(1);
select_annonce2(2);
select_annonce2(3);
select_annonce2(4);
select_annonce2(5);
select_annonce2(6);
select_annonce2(7);

modif_annonce(1);
modif_annonce(2);
modif_annonce(3);
modif_annonce(4);
modif_annonce(5);
modif_annonce(6);
modif_annonce(7);



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


