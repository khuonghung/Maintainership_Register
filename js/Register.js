const scriptURL = 'https://script.google.com/macros/s/AKfycbxcd9gxlv551DG7EJE5g4_mkTbkN6VBc_qvE42dPa5ndTsKcsh5/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(
            swal({
                title: "Thanks for Contacting us..!",
                text: "We Will Contact You Soon...",
                icon: "success",
            }))
        .catch(error => console.error('Error!', error.message))
})