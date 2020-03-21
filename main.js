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
})()