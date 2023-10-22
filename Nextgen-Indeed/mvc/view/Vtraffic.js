let linkt = "http://localhost/Nextgen-Indeed/mvc/controler/Ctraffic.php";
let lien= "http://localhost/Nextgen-Indeed/mvc/controler/Cannonce.php";

export function create_message(){
        let displayAnnonce1= 0
    fetch(lien+ "?displayAnnonce="+ encodeURIComponent(displayAnnonce1), {
        method: "GET",
        mode: "cors"
    }).then((r)=> {
        
        return r.text()
    }).then((body)=> {
        body= body.split("")
        
        for (let i= 0; i<body.length; i++){
            let FormSend1 = document.getElementById("sendApply"+body[i]);
            console.log("form= "+ FormSend1)
            if(FormSend1!=null){
                FormSend1.addEventListener("click", function(){
                    console.log("tt")
                    let FormUsername1 = document.getElementById("username"+body[i]).value;
                    let FormMessage1 = document.getElementById("message"+body[i]).value;
                    let FormDate1 = document.getElementById("createdate"+body[i]).value;

                    let insert = new FormData();

                    insert.append("username", FormUsername1);
                    insert.append("message", FormMessage1);
                    insert.append("date", FormDate1);
                    insert.append("corpo","AVISTO");
                    insert.append("job_id",body[i]);

                    fetch(linkt,{
                        method:"POST",
                        mode: "cors",
                        body: insert
                    }).then((r)=> { console.log(r)
                        return r.text()})
                    .then((body)=> {console.log(body)})
                });
            };
        }
    })
}



// let FormApply2 = document.getElementById("form2");
// let FormSend2 = document.getElementById("SendApply2");
// if(FormApply2!=null){
//     FormSend2.addEventListener("click", function(){

//         let FormUsername2 = document.getElementById("username2").value;
//         let FormMessage2 = document.getElementById("message2").value;
//         let FormDate2 = document.getElementById("createdate2").value;
        

//         let insert2 = new FormData();

//         insert2.append("username2", FormUsername2);
//         insert2.append("message2", FormMessage2);
//         insert2.append("date2", FormDate2);
//         insert2.append("corpo","Capgemini");
//         insert2.append("job_id",2);

//         fetch(linkt,{
//             method:"POST",
//             mode: "cors",
//             body: insert2
//         }).then((r)=> { console.log(r)
//             return r.text()})
//         .then((body)=> {console.log(body)})
//     });
// };

function select_message(x){
    let selectMessageValue = x;
    linkA = linkt +'?Selectmessage=' + encodeURIComponent(selectMessageValue);

    fetch(linkA, {
        method: "GET",
        mode: "cors"
    })
    .then((r) => {
        if (!r.ok) {
            throw new Error("erreur sur le réseau");
        }
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Une erreur s'est produite : " + error);
    });

}

function update_message(){

    let UpdateUsername1 = document.getElementById("username").value;
    let UpdateMessage1 = document.getElementById("message").value;
    let UpdateDate1 = document.getElementById("createdate").value;

    let insertUpdate = new FormData();

    insertUpdate.append("usernameUp", UpdateUsername1);
    insertUpdate.append("messageUp", UpdateMessage1);
    insertUpdate.append("dateUp", UpdateDate1);
    insertUpdate.append("job_id",1);


    fetch(linkt, {
        method: "POST",  
        mode: "cors",
        body: insertUpdate
    }).then ((r)=> {
        return r.text()
    })
}

function delet_message(){

    let selectDeleteValue = x;
    let linkB = linkt +'?Selectdelete=' + encodeURIComponent(selectDeleteValue);

    fetch(linkB, {
        method: "GET",  
        mode: "cors",
    }).then((r) => {
        if (!r.ok) {
            throw new Error("erreur sur le réseau");
        }
        return response.text();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Une erreur s'est produite : " + error);
    });

}