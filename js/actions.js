

// set custom scroll position due to conflict btw position fixed top menu and content, the content scrolls under the menu.
const anchor = document.querySelectorAll('a')
anchor.forEach((a) => {
    a.addEventListener('click', function(event) {
        event.preventDefault();
        const thisSection = document.querySelectorAll(a.hash)
        window.scrollTo(0, thisSection[0].offsetTop - 100)
    })
})


// setting menu function
const clickListener = document.body;
clickListener.addEventListener('click', function(event) {
    const menu = document.querySelector('#nav-bar');
    if(event.target.outerHTML.startsWith('<nav')) {
        menu.classList.toggle('active');
    } else if (event.target.outerHTML.startsWith('<a')) {
        setTimeout(function() {
            menu.classList.remove('active');
        }, 500)
    }
})



})