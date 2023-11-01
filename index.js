function onSendButtonClick() {

    var modal = document.getElementById("sentModal");

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

    modal.style.display = "block";
}

const email = document.getElementById("courriel");

email.addEventListener("input", onEmailChange);

function onEmailChange(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Placez ici votre courriel!");
    } else {
        email.setCustomValidity("");
    }

    email.reportValidity()
}

const phrase = document.getElementById('phrase');


phrase.addEventListener('mouseover', () => {

    phrase.style.textDecoration = 'underline';
});
