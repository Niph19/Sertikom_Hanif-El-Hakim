const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const position = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", position);
});
        const formInput = document.getElementById("myForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const notelpInput = document.getElementById("no-telp");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const notelpError = document.getElementById("no-telpError");

        formInput.addEventListener("submit", function(event) {
            event.preventDefault()
        
            nameError.textContent = "";
            emailError.textContent = "";
            notelpError.textContent = "";

            if (nameInput.value.trim() === "") {
                nameError.textContent = "Nama Tidak Boleh Kosong";
            }
            
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (emailInput.value.trim() === ""){
                emailError.textContent = "Email Tidak Boleh Kosong";
            } else if (!emailInput.value.match(emailPattern)) {
                emailError.textContent = "Format Email Tidak Valid";
            }

            if (notelpInput.value.trim() === ""){
                notelpError.textContent = "No. Telepon Tidak Boleh Kosong";
            } else if (notelpInput.value.length > 13) {
                notelpError.textContent = "No. Telepon Tidak Valid";
            } else if (notelpInput.value.length < 10) {
                notelpError.textContent = "No. Telepon Tidak Valid";
            }

            if (nameError.textContent === "" && emailError.textContent === "" && notelpError.textContent === "") {
                alert("✓ Terkirim! Tim VisiDigital akan menghubungi Anda dalam 1–2 hari kerja.");
                formInput.reset();
            }
        });