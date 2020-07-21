// const subject = document.getElementById("subject");
// const email = document.getElementById("email");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

const formElements = [subject, email, msg];

// ::: regex :::
const emailReg = /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;

formElements.forEach((item) => {
  item.addEventListener("keydown", runValidation);
});
formElements.forEach((item) => {
  item.addEventListener("blur", runValidation);
});

function runValidation(e) {
  if (e.which == 13) {
    e.preventDefault();
  }
  const userInput = e.target.value;
  //   ::: checking emptiness :::
  if (!userInput.length) {
    e.target.classList.add("is-invalid");
    e.target.classList.remove("is-valid");
    showErr(e.target);
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
    showOK(e.target);
  }

  if (e.target.getAttribute("type") == "email") {
    // check user input against expression
    if (!userInput.match(emailReg)) {
      e.target.classList.add("is-invalid");
      e.target.classList.remove("is-valid");
      showErr(e.target);
    } else {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
      showOK(e.target);
    }
  }
  if (e.target.getAttribute("name") == "message") {
    console.log("indise msg");
  }
}

// console.log(email.nextElementSibling);
// email.previousElementSibling.style.opacity = "1";

function showErr(current) {
  current.nextElementSibling.style.opacity = "0";
  current.nextElementSibling.nextElementSibling.style.opacity = "1";
}

function showOK(current) {
  current.nextElementSibling.style.opacity = "1";
  current.nextElementSibling.nextElementSibling.style.opacity = "0";
}
