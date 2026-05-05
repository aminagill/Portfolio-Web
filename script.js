console.log("Script running...")

let sidebar = document.querySelector('.sidebar');
let ham = document.querySelector('.ham');
let cross = document.querySelector('.cross');

cross.style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
    sidebar.classList.toggle('sidebarGo');

    if(sidebar.classList.contains('sidebarGo')){
        ham.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        ham.style.display = 'none';
        cross.style.display = 'inline';
    }
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_h33bkmj",
        "template_u7neibu",
        this
    ).then(() => {
        alert("Message sent successfully");
    }).catch((error) => {
        console.log(error);
        alert("Failed to send");
    });
});