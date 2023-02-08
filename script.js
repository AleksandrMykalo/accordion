const headers = document.querySelectorAll('[data-name="accordeon-title"]');

headers.forEach((value) => {
    value.addEventListener('click', function() {
       this.nextElementSibling.classList.toggle('hidden')
    })
})