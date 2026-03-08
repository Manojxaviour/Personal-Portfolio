(function () {
    emailjs.init("q-62815IOq_6Qf_LV");
})();

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        emailjs.sendForm(
            // service ID, template ID, form element
            "service_erkdujo", 
            "template_53ltrtr",
            this
        ).then(function () {
            console.log("SUCCESS!");
            document.getElementById("form-status").innerHTML =
                "Message sent successfully!";

                setTimeout(function(){
                location.reload();
            }, 4000);

        }, function () {
            console.log("FAILED...");
            document.getElementById("form-status").innerHTML =
                "Failed to send message. Try again.";

        });

    });

