const modal = document.querySelector("#modal")
const openModalBtn = document.querySelector("#open-modal-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")
const overlay = document.querySelector("#overlay")
const closeModal = () => {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}

openModalBtn.addEventListener("click", () => {
  modal.classList.add("open")
  overlay.classList.add("open")
})
closeModalBtn.addEventListener("click", () => closeModal())
overlay.addEventListener("click", () => closeModal())
