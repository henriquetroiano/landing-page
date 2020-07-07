const anchor = document.querySelectorAll('a')
console.log(anchor)
anchor.forEach((a) => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        const thisSection = document.querySelectorAll(a.hash)
        window.scrollTo(0, thisSection[0].offsetTop - 100)
    })
})