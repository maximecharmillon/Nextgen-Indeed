// let tmpForm= new FormData;
// tmpForm.append("display", "display")


//     fetch("http://localhost/bbdconnexion.php",{
//                 method: "POST",
//                 mode: "cors",
//                 body: tmpForm
//     }).then((r)=> { return r.text();
       
//     }).then((body)=> {
//         console.log(body);
//         let id= document.createElement("p");
//         id.innerText= body;

//         let valueJobId= body

//         let button= document.createElement("button");
        
//         document.querySelector("div").appendChild(id);
//         document.querySelector("div").appendChild(button);

//         let learnMore= document.querySelector("button");

//         learnMore.addEventListener('click', function(){

//             let formData= new FormData();
//             formData.append("button", valueJobId);
    
//             fetch("http://localhost/bddconnexion.php",{
//                 method: "POST",
//                 body: formData,
//                 mode: "cors"
//             }).then((r)=> { return r.text()
//             }).then((body)=> {
//                 fullDescription= document.createElement("p");
//                 fullDescription.innerText= body;
//                 document.querySelector("div").appendChild(fullDescription);
//             })
    
//         });
//     })


document.getElementById("envoie").addEventListener("click", function (e) {
    
    e.preventDefault;
    let username = document.getElementById("username").value;
    let pwd = document.getElementById("pwd").value ; 
    
    console.log(username)
    console.log(pwd);
    
    let formData = new FormData() ;
    formData.append('pwd', pwd);
    formData.append('username', username);

    fetch("http://localhost/identification.php", {
        method: "POST",
        body: formData,
        mode: "cors",
    }) .then ((response) => response.text()) 
    .then ((response) => {
        console.log(response);

        if (response == 42 ) {
            console.log('Et on déroule le tapis rouge !!!')
        }
        
        if (response == "Invalid creditentials !") {
            console.log('Peu peu peu pas si vite mon gars !!!')
        } else if (response == "Creditentials not provided !") {
            console.log('Vasy met quelque chose BROOO !!!!')
        }
    })
})

