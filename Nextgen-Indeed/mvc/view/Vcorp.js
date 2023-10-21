
let namecorp = document.getElementById("corpname");
let corpId = document.getElementById("Id");
let Emailcorp = document.getElementById("E_mail");
let employeeId = document.getElementById("User_Id");
let advId = document.getElementById("Job_Id");
let NewNameCorp = document.getElementById("Newcorpname");
let NewEmailCorp = document.getElementById("NewE_mail");

function Create() {

    let createCorps = new FormData;
    createCorps.append("NameCorp", namecorp.value)
    createCorps.append("E_mail", Emailcorp.value)
    createCorps.append("Id",  corpId.value)
    createCorps.append("User_Id", employeeId.value)
    createCorps.append("Job_Id", advId.value)

    fetch ("http://localhost/CRUD_CORPS/controler.php", {
        method : "POST",
        body : createCorps, 
        mode : "cors"
    }) .then ((response) => {
        return response.text();
    }) .then ((post) => {
        let corporation = document.createElement("p");
        corporation.innerHTML = post ; 
        document.querySelector("div").appendChild(corporation);
    })

}

function Read () {
    
    fetch("http://localhost/CRUD_CORPS/controler.php" + "?selectCorp="+ encodeURIComponent(namecorp), {
        method: "GET",
        mode: "cors", 
    }).then((response)=> { return response.text()
    }).then((body)=> {
        let getCorp= document.getElementById(("corpname"))
        if(getCorp != null){
            getCorp.innerHTML= body;
        }
        
    })
}


function Update() {
    let data = {
        CORP: namecorp.value,
        EMAIL: Emailcorp.value,
        NEW_CORP: NewEmailCorp.value,
        NEW_EMAIL: NewEmailCorp.value,
    };

    fetch("http://localhost/CRUD_CORPS/controler.php?updateCorp=true", {
        method: 'PUT',
        body: JSON.stringify(data),
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('PUT request failed');
        }
    });
}

function Delete () {
    fetch(url, {
        method: 'DELETE',
        mode : "cors",
      }) .then(response => {
          if (response.ok) {
            console.log("See ya !")

          } else {
            throw new Error('DELETE request failed');
          }
        })      
}
