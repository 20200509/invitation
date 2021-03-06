(function () {
	// D-Day 설정
	var el = document.getElementById('d-day')
	var now = new Date()
	var wedding = new Date('2020/05/09 00:00:00')
	var today = new Date(now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() + ' 00:00:00')

	var gap = today.getTime() - wedding.getTime()
	var result = Math.ceil(gap / (1000 * 60 * 60 * 24)) * -1
	el.innerText = result

	// 지도 설정
	var weddingHall = new kakao.maps.LatLng(37.560659, 126.967330)
	var map = new kakao.maps.Map(
		document.getElementById('map'),
		{ center: weddingHall, level: 4 }
	)

	new kakao.maps.Marker({
		position: weddingHall,
		image: new kakao.maps.MarkerImage(
			'https://20200509.github.io/invitation/img/marker.png',
			new kakao.maps.Size(50, 48),
			{offset: new kakao.maps.Point(25, 44)}
		)
	}).setMap(map)

	// 사진 클릭
	var body = document.getElementsByTagName('body')[0]
	var photoFrame = document.getElementById('photo-frame')
	var photoDetail = document.getElementById('photo-detail')
	var photoWrapper = document.getElementById('photo-wrapper')
	var photo = document.getElementById('photo')
	var index = document.getElementById('index')
	var prev = document.getElementById('prev')
	var next = document.getElementById('next')
	var close = document.getElementById('close')
	var currIndex

	photoFrame.addEventListener('click', function (e) {
		if (e.target.classList.contains('thumbnail')) {
			currIndex = Number(e.target.dataset.index)
			photoDetail.setAttribute('style', 'top: ' + window.pageYOffset + 'px;')
			body.classList.add('show-photo-detail')
			body.addEventListener('scroll touchmove mousewheel', preventDefault)
			index.innerText = currIndex
			photoWrapper.className = 'photo-wrapper ' + e.target.dataset.type
			photo.src = './img/photo-' + currIndex + '.jpg'
		}
	})

	close.addEventListener('click', function (e) {
		e.preventDefault()
		body.classList.remove('show-photo-detail')
		body.removeEventListener('scroll touchmove mousewheel', preventDefault)
		photoDetail.removeAttribute('style')
	})

	prev.addEventListener('click', function (e) {
		e.preventDefault()
		currIndex = (currIndex === 1) ? 9 : currIndex -= 1
		photoWrapper.className = 'photo-wrapper ' + photoFrame.getElementsByClassName('img' + currIndex)[0].dataset.type
		photo.src = './img/photo-' + currIndex + '.jpg'
		index.innerText = currIndex
	})

	next.addEventListener('click', function (e) {
		e.preventDefault()
		currIndex = (currIndex === 9) ? 1 : currIndex += 1
		photoWrapper.className = 'photo-wrapper ' + photoFrame.getElementsByClassName('img' + currIndex)[0].dataset.type
		photo.src = './img/photo-' + currIndex + '.jpg'
		index.innerText = currIndex
	})

	function preventDefault (e) {
		e.preventDefault()
	}

	// 꽃가루 효과
	snowFall.snow(body, {
		image : './img/sparkle1.png', 
		minSize: 5,
		maxSize: 20,
		minSpeed: 1,
		maxSpeed: 3,
		flakeCount : 6
	})
	snowFall.snow(body, {
		image : './img/sparkle2.png', 
		minSize: 10,
		maxSize: 15,
		minSpeed: 1,
		maxSpeed: 3,
		flakeCount : 6
	})
	snowFall.snow(body, {
		image : './img/sparkle3.png', 
		minSize: 5,
		maxSize: 10,
		minSpeed: 1,
		maxSpeed: 3,
		flakeCount : 6
	})
})()