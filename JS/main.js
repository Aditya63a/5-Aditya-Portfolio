//  Header scrolled

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled")
    }
}

// Nav Hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})

// Form Data to Google Sheet


const scriptURL = 'https://script.google.com/macros/s/AKfycbyEPOKE7nOlK86dubqxA3V2mBAJTvwQgo37RlzlZSKLvNrY9NwoVUYDd0YL-XGwxw_l5Q/exec';

const submit = document.getElementById("submit");

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    submit.innerText = "Submiting...";
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => alert("Thank you! for reaching us successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))

})