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
        
        // pesan Error
            nameError.textContent = "";
            emailError.textContent = "";
            notelpError.textContent = "";

        // Validasi Nama
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Nama Tidak Boleh Kosong";
            }
            
            // Validasi Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (emailInput.value.trim() === ""){
                emailError.textContent = "Email Tidak Boleh Kosong";
            } else if (!emailInput.value.match(emailPattern)) {
                emailError.textContent = "Format Email Tidak Valid";
            }

            // validasi Notelp
            if (notelpInput.value.trim() === ""){
                notelpError.textContent = "No. Telepon Tidak Boleh Kosong";
            } else if (notelpInput.value.length > 13) {
                notelpError.textContent = "No. Telepon Tidak Valid";
            }
        });