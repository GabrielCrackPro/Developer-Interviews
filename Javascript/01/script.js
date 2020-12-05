const form = document.querySelector('form')
const input = document.querySelector('form input')
const formData = new FormData(form)
let inputValue = formData.get('text')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(ReverseString(inputValue))
})
function ReverseString(text) {
    text = text.split('').reverse().join('')
    return text
}