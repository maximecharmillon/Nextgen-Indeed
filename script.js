

    document.getElementById("loginButton").addEventListener("click", function(event) {
        event.preventDefault();
    
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
    
        fetch("http://localhost/connexion/Nextgen-Indeed/controller.php", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = "accueil.html";
            } else {
                document.getElementById("message").innerHTML = "Login failed. Please try again.";
            }
        });
    });



