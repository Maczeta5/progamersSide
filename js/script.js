document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	const navbarLinks = document.querySelectorAll('.nav-link')
	const navbarCollapse = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

    
    navbarLinks.forEach (links => links.addEventListener ('click', () => navbarCollapse.classList.remove('show')))


    window.addEventListener('scroll', addShadow)
})
