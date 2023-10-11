
let tmpForm= new FormData;
tmpForm.append("display", "display")


    fetch("http://localhost/Nextgen-Indeed/script.php",{
                method: "POST",
                mode: "cors",
                body: tmpForm
    }).then((r)=> { return r.text()
    }).then((body)=> {
        let id= document.createElement("p");
        id.innerText= body;

        let valueJobId= body

        let button= document.createElement("button");
        
        document.querySelector("div").appendChild(id);
        document.querySelector("div").appendChild(button);

        let learnMore= document.querySelector("button");

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
    
