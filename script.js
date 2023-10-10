let learnMore= document.querySelector("div button")
let jobId= document.getElementById("jobId")
learnMore.addEventListener('click', function(){
   

    jobId= "42";

    fetch("script.php"+ encodeURIComponent(jobId),{
        method: "GET"
    }).then((r)=> {return r.json()})
    .then((body)=> {
        fullDescription= document.createElement("p");
        fullDescription.innerText= body;
        document.querySelector("div").appendChild(fullDescription);
    })

});