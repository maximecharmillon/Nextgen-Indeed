let link = "http://localhost/config/controller.php";

let FormApply1 = document.getElementById("form1");
let FormSend1 = document.getElementById("SendApply1");
if(FormApply1!=null){
    FormSend1.addEventListener("click", function(){

        let FormUsername1 = document.getElementById("username").value;
        let FormMessage1 = document.getElementById("message").value;
        let FormDate1 = document.getElementById("createdate").value;
        

        let insert = new FormData();

        insert.append("username", FormUsername1);
        insert.append("message", FormMessage1);
        insert.append("date", FormDate1);
        insert.append("corpo","AVISTO");
        insert.append("job_id",1);

        fetch(link,{
            method:"POST",
            mode: "cors",
            body: insert
        }).then((r)=> { console.log(r)
            return r.text()})
        .then((body)=> {console.log(body)})
    });
};

let FormApply2 = document.getElementById("form2");
let FormSend2 = document.getElementById("SendApply2");
if(FormApply2!=null){
    FormSend2.addEventListener("click", function(){

        let FormUsername2 = document.getElementById("username2").value;
        let FormMessage2 = document.getElementById("message2").value;
        let FormDate2 = document.getElementById("createdate2").value;
        

        let insert2 = new FormData();

        insert2.append("username2", FormUsername2);
        insert2.append("message2", FormMessage2);
        insert2.append("date2", FormDate2);
        insert2.append("corpo","Capgemini");
        insert2.append("job_id",2);

        fetch(link,{
            method:"POST",
            mode: "cors",
            body: insert2
        }).then((r)=> { console.log(r)
            return r.text()})
        .then((body)=> {console.log(body)})
    });
};

function select_message(x){
    let selectMessageValue = x;
    link += `?Selectmessage=${encodeURIComponent(selectMessageValue)}`;

    fetch(link, {
        method: "GET",
        mode: "cors"
    })
    .then((response) => {
        if (!response.ok) {
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