let learnMore= document.querySelector("button");
let jobId= document.getElementById("jobId").textContent;

learnMore.addEventListener('click', function(){

    fetch_fullDescription();

});

    
function fetch_fullDescription(){

    let formData= new FormData();
    formData.append("button", jobId);
    
    fetch("http://localhost/Nextgen-Indeed/script.php",{
        method: "POST",
        body: formData,
        mode: "cors"
    }).then((r)=> { return r.text()
    }).then((body)=> {
        fullDescription= document.createElement("p");
        fullDescription.innerText= body;
        document.querySelector("div").appendChild(fullDescription);
    })
}