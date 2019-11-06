

document.querySelector('.education-button').addEventListener('click', function() {

	if (document.querySelector('.education__items').style.opacity === '0') {
		document.querySelector('.education__items').style.opacity = '1';
		document.querySelector('.education-button').style.transform = 'rotate(180deg)';
	} else {
		document.querySelector('.education__items').style.opacity ='0';
		document.querySelector('.education-button').style.transform = 'rotate(0deg)';
	}
	});

document.querySelector('.project-image-theyalow').addEventListener('click', function() {

	document.querySelector('.iframe-theyalow').style.display = 'block';
	document.querySelector('.info').style.display = 'none';
	document.querySelector('.carousel').style.display = 'none';
	document.querySelector('.button-back').style.display = 'block';
	document.querySelector('.button-mobile-theyalow').style.display = 'block';
	
});

document.querySelector('.button-back').addEventListener('click', function() {

	document.querySelector('.iframe-theyalow').style.display = 'none';
	document.querySelector('.info').style.display = 'flex';
	document.querySelector('.carousel').style.display = 'block';
	document.querySelector('.button-back').style.display = 'none';
	document.querySelector('.button-mobile-theyalow').style.display = 'none';
	
});

document.querySelector('.button-mobile-theyalow').addEventListener('click', function() {

	if(document.querySelector('.iframe-theyalow').style.width === '1440px') {
		document.querySelector('.iframe-theyalow').style.width = '640px';
		document.querySelector('.iframe-theyalow').style.height = '1600px';
		document.querySelector('.button-mobile-theyalow').value = 'Desktop';
	
	} else  {
		document.querySelector('.iframe-theyalow').style.width = '1440px';
		document.querySelector('.iframe-theyalow').style.height = '1848px';
		document.querySelector('.button-mobile-theyalow').value = 'Mobile';
	
	}
	

});
	

document.querySelector('.project-image-design').addEventListener('click', function() {

	document.querySelector('.iframe-design').style.display = 'block';
	document.querySelector('.info').style.display = 'none';
	document.querySelector('.carousel').style.display = 'none';
	document.querySelector('.button-back').style.display = 'block';
	document.querySelector('.button-mobile-design').style.display = 'block';
	
});

document.querySelector('.button-back').addEventListener('click', function() {

	document.querySelector('.iframe-design').style.display = 'none';
	document.querySelector('.info').style.display = 'flex';
	document.querySelector('.carousel').style.display = 'block';
	document.querySelector('.button-back').style.display = 'none';
	document.querySelector('.button-mobile-design').style.display = 'none';
	
});

document.querySelector('.button-mobile-design').addEventListener('click', function() {

	if(document.querySelector('.iframe-design').style.width === '1440px') {
		document.querySelector('.iframe-design').style.width = '375px';
		document.querySelector('.iframe-design').style.height = '10600px';
		document.querySelector('.button-mobile-design').value = 'Desktop';
	
	} else  {
		document.querySelector('.iframe-design').style.width = '1440px';
		document.querySelector('.iframe-design').style.height = '1848px';
		document.querySelector('.button-mobile-theyalow').value = 'Mobile';
	
	}
	

});

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);


