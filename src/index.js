document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    doIt(document.querySelector('#new-task-description').value)
  })
})

function doIt(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = "delete"
  p.textContent = `${todo} ` 
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })
}
