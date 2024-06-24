let textarea = document.getElementById("textarea")
let btn1 = document.getElementById("btn1")
let display = document.getElementById("display")
let form = document.getElementById("form")

function du() {
    display.innerText = display.innerText + "\n You: " + textarea.value;
    textarea.value = "";
}

btn1.addEventListener("click", () => {
    if (textarea.value.trim() !== "") {
        du();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && textarea.value.trim() !== "") {
        du();
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault()
})