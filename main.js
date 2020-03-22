(function () {
	// D-Day 설정
	var el = document.getElementById('d-day')
	var wedding = new Date('2020-05-09')
	var today = new Date()
	var gap = today.getTime() - wedding.getTime()
	var result = Math.ceil(gap / (1000 * 60 * 60 * 24)) * -1
	el.innerText = result

	// 지도 설정
	var container = document.getElementById('map')
	var options = {
		center: new kakao.maps.LatLng(37.560310, 126.967112),
		level: 3
	}

	var map = new kakao.maps.Map(container, options)

	// 사진 클릭
	var photoFrame = document.getElementById('photo-frame')
	var photoDetail = document.getElementById('photo-detail')
	photoFrame.addEventListener('click', function (e) {
		if (e.target.classList.contains('thumbnail')) {
			openPhotoDetail()
		}
	})

	photoDetail.addEventListener('click', function (e) {
		closePhotoDetail()
	})

	function openPhotoDetail () {
		var body = document.getElementsByTagName('body')[0]
		
		photoDetail.setAttribute('style', 'top: ' + window.pageYOffset + 'px;')
		body.classList.add('scroll-disabled')
		photoDetail.classList.remove('hide')
	}

	function closePhotoDetail () {
		var body = document.getElementsByTagName('body')[0]

		body.classList.remove('scroll-disabled')
		photoDetail.classList.add('hide')
	}
})()