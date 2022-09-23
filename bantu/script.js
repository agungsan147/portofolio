const scriptURL =
    'https://script.google.com/macros/s/AKfycbydDy17YwtpMzDcnrKXvcKJeljqgcR8pAxc8nXLzet3mTlFYjRynw8qHtKzhsgSVB63/exec'
const form = document.forms['agung-contact-form']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
    e.preventDefault()
    // Ketika tombol diklik
    // Tampilkan tombol Loading, hilangkan tombol Kirim
    btnLoading.classList.toggle('d-none')
    btnKirim.classList.toggle('d-none')

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            // Tampilkan tombol Kirim, hilangkan tombol Loading
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')

            // Tampilak Alert
            myAlert.classList.toggle('d-none')

            // Reset Form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

AOS.init({
    once: true,
});