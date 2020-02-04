window.addEventListener('load', function () {
	var invitation = document.querySelector('#invitation')
	var next = document.querySelector('.next')
	var prev = document.querySelector('.prev')
	invitation.style.height = window.innerHeight + 'px'

	var flicking = new eg.Flicking('.wrapper', {
    circular: true,
    gap: 10,
		renderOnlyVisible: true,
		autoResize: true
	})

	next.addEventListener('click', function (e) {
		e.preventDefault()
		flicking.next()
	})

	prev.addEventListener('click', function (e) {
		e.preventDefault()
		flicking.prev()
	})
})