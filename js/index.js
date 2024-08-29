"use strict"

checkForm();

function navigate() {
    const targetElem = document.querySelector("#chunk-form form");
    targetElem?.scrollIntoView();

}

function isValid(input) {
    return input.checkValidity()
}

function checkError(field) {
    if (!isValid(field)) {
        if (!field.classList.contains('error_input')) {
            field.classList.add('error_input');
        }
    } else {
        if (field.classList.contains('error_input')) {
            field.classList.remove('error_input');
        }
    }
}

function checkForm() {
    let validateForm = document.querySelector('#chunk-form form');
    let validateFormFields = getFields();
    let validateBtn = document.querySelector('#validate-btn');
    validateForm?.addEventListener('change', (event) => {
        Array.from(validateFormFields).forEach((inp) => {
            checkError(inp);
        });
        validateBtn.disabled = !validateForm.checkValidity();
    })
}

function getFields() {
    return document.querySelectorAll('#chunk-form .form_input');
}

function submitForm() {
    let validateForm = document.querySelector('#chunk-form form');
    if (validateForm.checkValidity()) {
        window.location.replace('./thanks.html');
    }

}
