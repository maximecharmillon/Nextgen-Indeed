function toggleForm(formId) {
    var form = document.getElementById(formId);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }

    fetch("http://localhost/connexion/Nextgen-Indeed/getJobData.php?jobId=" + formId, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                document.getElementById('username').value = data.username;
                document.getElementById('email').value = data.email;
                document.getElementById('phone').value = data.phone;
            })
            .catch(error => console.error(error));
}

function SendInfo() {
    let username = document.getElementById('username').value = data.username;
    let email = document.getElementById('email').value = data.email;
    let phone = document.getElementById('phone').value = data.phone;

    let send = new FormData;
    send.append("username", username);
    send.append("email", email);
    send.append("phone", phone);

    fetch ("http://localhost/connexion/Nextgen-Indeed/getJobData.php?", {
        method : "post", 
        body : send, 
        mode : "cors"       
    }) .then (alert("Message envoyé !!"))

}