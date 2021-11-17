//Contact form
const $form = document.querySelector('#form')
const $buttonMailTo = document.querySelector('#krono-email')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailTo.setAttribute('href', `mailto:kronorecords@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailTo.click()
}
