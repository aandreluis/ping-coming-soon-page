const form = document.forms.emailForm
const { email } = form

email.addEventListener("keyup", emailValidate)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (emailValidate()) {
    openModal()
    email.value = "" //clean input
    //Submit form here
  }
})

const errorText = document.querySelector(".error-text")
const button = document.querySelector("#content form button")
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

function emailValidate() {
  if (emailRegex.test(email.value)) {
    //Ok
    email.classList.remove("error")
    errorText.classList.add("hidden")
    button.disabled = false
    return true
  } else {
    //Error
    email.classList.add("error")
    errorText.classList.remove("hidden")
    email.focus()
    button.disabled = true
    return false
  }
}

const modal = document.querySelector(".modal")
const bntClose = document.querySelector(".close")

//open the modal
function openModal() {
  modal.style.display = "flex"
}

//close the modal
bntClose.onclick = function () {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
