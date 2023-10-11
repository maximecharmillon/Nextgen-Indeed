
let tmpForm= new FormData;
tmpForm.append("display", "display")

fetch("http://localhost/Nextgen-Indeed/script.php",{
            method: "POST",
            mode: "cors",
            body: tmpForm
}).then((r)=> { return r.text()
}).then((body)=> {
     let title= document.createElement("h1");
     let button= document.createElement("button");
     title.innerText= body;
     document.querySelector("div").appendChild(title);
     document.querySelector("div").appendChild(button);
     
})


let learnMore= document.querySelector("div button");

$(document).ready(function(){
    let valueJobId= $("p").text()

    learnMore.addEventListener('click', function(){

        let formData= new FormData();
        formData.append("button", valueJobId);

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

    });

})