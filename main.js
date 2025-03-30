const p1 = document.querySelector(".p1")
const o1 = document.querySelector(".o1")
const p2 = document.querySelector(".p2")
const o2 = document.querySelector(".o2")
const res = document.querySelector(".res")
console.log(p1)
let num1 = 0
let num2 = 0
p1.addEventListener("click", () => {
    num1 = num1 + 1
    o1.textContent = num1

})

p2.addEventListener("click", () => {
    num2 = num2 + 1
    o2.textContent = num2

})

res.addEventListener("click", () => {
    num1 = 0
    num2 = 0
    o1.textContent = 0
    o2.textContent = 0

})
