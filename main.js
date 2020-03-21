(function () {
	window.addEventListener('load', function () {
		var el = document.getElementById('d-day')
		var wedding = new Date('2020-05-09')
		var today = new Date()
		var gap = today.getTime() - wedding.getTime()
		var result = Math.ceil(gap / (1000 * 60 * 60 * 24)) * -1
		el.innerText = result

		var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
		var options = { //지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 3 //지도의 레벨(확대, 축소 정도)
		};

		var map = new kakao.maps.Map(container, options);
	})
})()