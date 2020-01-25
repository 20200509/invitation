window.addEventListener('load', function () {
	var invitation = document.querySelector('#invitation')
	var next = document.querySelector('.next')
	var prev = document.querySelector('.prev')
	invitation.style.height = window.innerHeight + 'px'

	var flicking = new eg.Flicking('.panels', {
    circular: true,
    gap: 10,
    renderOnlyVisible: true
	})

	next.addEventListener('click', function () {
		flicking.next()
	})

	prev.addEventListener('click', function () {
		flicking.prev()
	})

	window.addEventListener('resize', function () {
		invitation.style.height = window.innerHeight + 'px'
		flicking.resize()
	})

	// flicking.addPlugins(new eg.Flicking.plugins.Parallax('.menu', 4))
})