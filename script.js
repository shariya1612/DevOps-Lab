document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;

    let college = document.getElementById("college").value;

    let department = document.getElementById("department").value;

    let year = document.getElementById("year").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        college === "" ||
        department === "" ||
        year === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }

    alert("Registration Successful!");

});