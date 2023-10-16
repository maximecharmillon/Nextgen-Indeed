function toggleForm(formId) {
    var form = document.getElementById(formId);
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

function toggleInfo(infoId, shortDescId) {
    const infoDiv = document.getElementById(infoId);
    const shortDesc = document.getElementById(shortDescId);
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
        shortDesc.style.display = "none";
    } else {
        infoDiv.style.display = "none";
        shortDesc.style.display = "block";
    }
}
