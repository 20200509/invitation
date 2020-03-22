(function () {
	// D-Day 설정
	var el = document.getElementById('d-day')
	var wedding = new Date('2020-05-09')
	var today = new Date()
	var gap = today.getTime() - wedding.getTime()
	var result = Math.ceil(gap / (1000 * 60 * 60 * 24)) * -1
	el.innerText = result

	// 지도 설정
	var weddingHall = new kakao.maps.LatLng(37.560310, 126.967112)
	var map = new kakao.maps.Map(
		document.getElementById('map'),
		{ center: weddingHall, level: 4 }
	)

	new kakao.maps.Marker({
		position: weddingHall,
		image: new kakao.maps.MarkerImage(
			'https://20200509.github.io/invitation/img/marker.png',
			new kakao.maps.Size(22, 26),
			{  
				spriteOrigin: new kakao.maps.Point(10, 0),    
				spriteSize: new kakao.maps.Size(36, 98)  
			}
		)
	}).setMap(map)

	// 사진 클릭
	var photoFrame = document.getElementById('photo-frame')
	var photoDetail = document.getElementById('photo-detail')
	var body = document.getElementsByTagName('body')[0]

	photoFrame.addEventListener('click', function (e) {
		if (e.target.classList.contains('thumbnail')) {
			photoDetail.setAttribute('style', 'top: ' + window.pageYOffset + 'px;')
			body.classList.add('scroll-disabled')
			body.addEventListener('scroll touchmove mousewheel', preventDefault)
			photoDetail.classList.remove('hide')
		}
	})

	photoDetail.addEventListener('click', function (e) {
		photoDetail.classList.add('hide')
		body.classList.remove('scroll-disabled')
		body.removeEventListener('scroll touchmove mousewheel', preventDefault)
		photoDetail.removeAttribute('style')
	})

	function preventDefault (e) {
		e.preventDefault()
	}

	window.addEventListener('load', function () {
		window.scrollTo(0, 30)
	})
})()