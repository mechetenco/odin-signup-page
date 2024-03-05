
document.getElementById("password1").addEventListener("input", updateValue)
document.getElementById("password2").addEventListener("input", updateValue)

function updateValue(e) {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    comparePasswords(password1, password2)
}

function comparePasswords(a, b) {
    if (a === "" || b === "") {
        document.getElementById("passwordInfo").innerHTML = "* No password set";
        document.getElementById("passwordInfo").classList.add("passwordErrorText");
        document.getElementById("password1").classList.add("error");
        document.getElementById("password2").classList.add("error");
        document.getElementById("password1").classList.remove("validated");
        document.getElementById("password2").classList.remove("validated");
        document.getElementById("passwordInfo").classList.remove("passwordMatchText");
    } else if (a === b) {
        document.getElementById("passwordInfo").innerHTML = "* Passwords match";
        document.getElementById("passwordInfo").classList.add("passwordMatchText");
        document.getElementById("passwordInfo").classList.remove("passwordErrorText");
        document.getElementById("password1").classList.add("validated");
        document.getElementById("password2").classList.add("validated");
        document.getElementById("password1").classList.remove("error");
        document.getElementById("password2").classList.remove("error");
    } else {
        document.getElementById("passwordInfo").innerHTML = "* Passwords do not match";
        document.getElementById("passwordInfo").classList.remove("passwordMatchText");
        document.getElementById("passwordInfo").classList.add("passwordErrorText");
        document.getElementById("password1").classList.add("error");
        document.getElementById("password2").classList.add("error");
        document.getElementById("password1").classList.remove("validated");
        document.getElementById("password2").classList.remove("validated");
    }
}