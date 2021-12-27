var newsletter = document.getElementById("newsletter-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("newsletter-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: newsletter.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Gracias por contactarnos, te responderemos lo antes posible.";
        newsletter.reset()
    }).catch(error => {
        status.innerHTML = "Oops! Ocurrio un problema al mandar tu información,"
    });
}
newsletter.addEventListener("submit", handleSubmit)