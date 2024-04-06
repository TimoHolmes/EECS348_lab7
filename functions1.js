function validate() {

    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if (pass1.length < 8 || pass2.length < 8) {
        alert("The passwords must be longer than 8 characters.");
        return;
    }
    if (pass1 !== pass2) {
        alert("The two passwords do not match. Please re-enter a new password.");
        return;
    }
    alert("The passwords matched!");
}