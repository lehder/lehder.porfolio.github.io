const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)

    $buttonMailto.setAttribute('href', `lehderjhoyy38@gmail.com?subject=${form.get('#trucazo')} `)
    $buttonMailto.click()

}