const questions = document.querySelectorAll(".question-item")
const answers = document.querySelectorAll(".answer")
const alert = document.querySelector("#alert")

const toggleClass = (element, addClass, removeClass) => {
  element.classList.add(addClass)
  element.classList.remove(removeClass)
}

document.addEventListener("submit", e => {
  e.preventDefault()

  const checkedAnswers = [...answers].filter(answer => answer.checked === true)
  let correctAnswerCount = 0

  questions.forEach(question => toggleClass(question, "incorrect,", "correct"))

  checkedAnswers.forEach(checkedAnswer => {
    const questionItem = checkedAnswer.closest(".question-item")

    if (checkedAnswer.value == "true") {
      toggleClass(questionItem, "correct,", "incorrect")
      correctAnswerCount++
    } else {
      toggleClass(questionItem, "incorrect,", "correct")
    }
  })

  if (correctAnswerCount === questions.length) {
    alert.classList.add("active")

    setTimeout(() => {
      alert.classList.remove("active")
    }, 1000)
  }
})
