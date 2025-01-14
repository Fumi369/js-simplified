const errors = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")
const userName = document.querySelector("#username")
const passoword = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#password-confirmation")
const checkbox = document.querySelector("#terms")

document.addEventListener("submit", e => {
  const errorMessages = []
  clearErrors()

  if (userName.value.length < 6) {
    errorMessages.push("Ensure the username is at least 6 characters long")
  }
  if (passoword.value.length < 10) {
    errorMessages.push("Ensure the password is at least 10 characters long")
  }
  if (passoword.value !== passwordConfirmation.value) {
    errorMessages.push("Ensure the password and confirmation password match")
  }
  if (checkbox.checked === false) {
    errorMessages.push("Ensure the terms checkbox is checked")
  }

  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})

function clearErrors() {
  while (errorsList.firstChild) {
    errorsList.removeChild(errorsList.firstChild)
  }
  errors.classList.remove("show")
}

function showErrors(errorMessages) {
  errors.classList.add("show")
  errorMessages.forEach(errorMessage => {
    const newListItem = document.createElement("li")
    newListItem.innerText = errorMessage
    errorsList.appendChild(newListItem)
  })
}
