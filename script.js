let learnMore= document.querySelector("div button")
let jobId= document.getElementById("jobId")

$(document).ready(function(){
    let valueJobId= $("#jobId").text()

    learnMore.addEventListener('click', function(){

    let formData= new FormData();
    formData.append("jobId", valueJobId);
    console.log(jobId)

        fetch("http://localhost/Nextgen-Indeed/script.php",{
            method: "POST",
            body: formData,
            mode: "cors"
        }).then((r)=> { return r.text()
        }).then((body)=> {
            console.log(body)
            fullDescription= document.createElement("p");
            fullDescription.innerText= body;
            document.querySelector("div").appendChild(fullDescription);
        })

    });

})