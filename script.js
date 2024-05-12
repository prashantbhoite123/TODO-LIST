const form = document.querySelector("form")
const input = document.querySelector("#typeinput")
const ul = document.querySelector("ul")

console.log(form)
console.log(input)
console.log(ul)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  todoWorking()
})

const todoWorking = () => {
  if (input.value.trim() === "") {
    alert("Add todo")
  } else {
    ul.innerHTML += `   <li><input type="radio" name="radio" id="radio" />${input.value}<i class="fa-solid fa-xmark" id="crossBtn"></i></li>`
    input.value = ""
    const li = document.querySelectorAll("li")
    const crossIcone = document.querySelectorAll("#crossBtn")
    const radio = document.querySelectorAll("#radio")
    radioClick(radio)
    removeLi(crossIcone, li)
  }
}

const removeLi = (crossBtn, li) => {
  crossBtn.forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      delBtn.parentNode.remove()
    })
  })
}

const radioClick = (radioBtn) => {
  radioBtn.forEach((radioClick, crossBtn) => {
    radioClick.addEventListener("click", (e) => {
      const nextSib = radioClick.parentNode
      nextSib.classList.toggle("linethrow")
      
    })
  })
}
