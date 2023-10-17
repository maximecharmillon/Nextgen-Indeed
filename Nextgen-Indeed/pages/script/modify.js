function editInfo(field) {

    document.getElementById(field).classList.add('d-none');
    document.getElementById(field + 'Input').classList.remove('d-none');

    document.querySelector('button[onclick="editInfo(\'' + field + '\')"]').classList.add('d-none');
    document.querySelector('button[onclick="saveInfo(\'' + field + '\')"]').classList.remove('d-none');
    document.querySelector('button[onclick="cancelEdit(\'' + field + '\')"]').classList.remove('d-none');
}

function saveInfo(field) {

    const inputField = document.getElementById(field + 'Input');
    document.getElementById(field).textContent = inputField.value;

    inputField.classList.add('d-none');
    document.getElementById(field).classList.remove('d-none');

    document.querySelector('button[onclick="editInfo(\'' + field + '\')"]').classList.remove('d-none');
    document.querySelector('button[onclick="saveInfo(\'' + field + '\')"]').classList.add('d-none');
    document.querySelector('button[onclick="cancelEdit(\'' + field + '\')"]').classList.add('d-none');
}

function cancelEdit(field) {

    const inputField = document.getElementById(field + 'Input');
    inputField.value = document.getElementById(field).textContent;

    inputField.classList.add('d-none');
    document.getElementById(field).classList.remove('d-none');

    document.querySelector('button[onclick="editInfo(\'' + field + '\')"]').classList.remove('d-none');
    document.querySelector('button[onclick="saveInfo(\'' + field + '\')"]').classList.add('d-none');
    document.querySelector('button[onclick="cancelEdit(\'' + field + '\')"]').classList.add('d-none');
}