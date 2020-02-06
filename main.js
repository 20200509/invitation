(function () {
	var loading = document.querySelector('#loading')
	var invitation = document.querySelector('#invitation')
	var next = document.querySelector('.next')
	var prev = document.querySelector('.prev')
	var flicking = new eg.Flicking('.wrapper', {
		circular: true,
		gap: 10,
		renderOnlyVisible: true,
		autoResize: true
	})
	
	invitation.style.height = window.innerHeight + 'px'
	
	next.addEventListener('click', function (e) {
		e.preventDefault()
		flicking.next()
	})
	
	prev.addEventListener('click', function (e) {
		e.preventDefault()
		flicking.prev()
	})
	
	window.addEventListener('load', function () {
		setTimeout(function () {
			invitation.style.opacity = '1'
			loading.classList.add('hide')
		}, 2000)
	})
})()
