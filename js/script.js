window.onload = function() {
	scroll();
}

if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	let sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	let sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
		}else{
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
		}
	}
}
if(document.querySelector('section.missions')) {
	items = document.querySelectorAll('.missions .item');
	circle = document.querySelector('.missions .circle');
	tabs = document.querySelectorAll('.missions .tabs .tab');
	butts = document.querySelectorAll('.missions .tabs .tab .call-back');

	items[0].onclick = function() {
		for(i=0;i<items.length;i++) {
			circle.classList.remove(`pos${i}`);
		}
		for(i=0;i<items.length;i++) {
			tabs[i].classList.remove('active');
			tabs[i].classList.remove('op');
		}
		tabs[0].classList.add('active');

	}
	items[1].onclick = function() {
		for(i=0;i<items.length;i++) {
			circle.classList.remove(`pos${i}`);
		}
		circle.classList.add('pos1');
		for(i=0;i<items.length;i++) {
			tabs[i].classList.remove('active');
		}
		tabs[1].classList.add('active');
	}
	items[2].onclick = function() {
		for(i=0;i<items.length;i++) {
			circle.classList.remove(`pos${i}`);
		}
		circle.classList.add('pos2');
		for(i=0;i<items.length;i++) {
			tabs[i].classList.remove('active');
		}
		tabs[2].classList.add('active');
	}
	items[3].onclick = function() {
		for(i=0;i<items.length;i++) {
			circle.classList.remove(`pos${i}`);
		}
		circle.classList.add('pos3');
		for(i=0;i<items.length;i++) {
			tabs[i].classList.remove('active');
		}
		tabs[3].classList.add('active');
	}
	for(i=0;i<butts.length;i++) {
		butts[i].onclick = callback;
	}
}
function callback() {
	if(!document.querySelector('.popup-mes-bg').classList.contains('active')) {
		document.querySelector('.popup-mes-bg').classList.add('active')
		document.querySelector('.popup-mes').classList.add('active');
		setTimeout(function(){
			document.querySelector('.popup-mes-bg').classList.add('op');
			document.querySelector('.popup-mes').classList.add('op');
		},400)
	}
}
if(document.querySelector('.popup-mes')) {
	document.querySelector('.popup-mes-bg').onclick = callClose;
	document.querySelector('.popup-mes .close').onclick = callClose;
}
function callClose() {
	if(document.querySelector('.popup-mes-bg').classList.contains('active')) {
		document.querySelector('.popup-mes-bg').classList.remove('op')
		document.querySelector('.popup-mes').classList.remove('op');
		setTimeout(function(){
			document.querySelector('.popup-mes-bg').classList.remove('active');
			document.querySelector('.popup-mes').classList.remove('active');
		},400)
	}
}
function scroll() {
	scroll = document.body.scrollTop;
	window.addEventListener('scroll', function() {
		scroll = window.pageYOffset || document.documentElement.scroll;

		scr = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.main-header').classList.add('fixed') : document.querySelector('.main-header').classList.remove('fixed');
		scrt = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.header .sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.main-header').offsetHeight)+'px' : document.querySelector('.header .sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.header').offsetHeight)+'px';
		sandOp = scroll > 50 ? document.querySelector('.sandwich-right-bar .nav-toggle').classList.add('op') : document.querySelector('.sandwich-right-bar .nav-toggle').classList.remove('op');
	});
}