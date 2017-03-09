
/* Ici je supprime la class active à tout les éléments et je l'affiche sur l'élément cliquer*/
$('.navbare li').click(function (e) {
	$('.navbare li.active').removeClass('active');
	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	e.preventDefault();
});
/* Ici j'affiche la bar de navigation quand le button burger est cliquer (mobile)*/
$('#burgerbutton').click(function () {
	if ($('.navbare').css("margin-left") == 0 + "px" && !$('.navbare').is(':animated')) {
		$('.navbare').animate({ "margin-left": '-=' + 230 });
		$('.content').css({ "filter": "brightness(100%)" })

	}
	else {
		if (!$('.navbare').is(':animated'))//perevent double click to double margin
		{
			$('.navbare').animate({ "margin-left": '+=' + 230 });
			$('.content').css({ "filter": "brightness(40%)" })
		}
	} window.location.search.substr(1)
});
/* Ici j'handle la modification de taille pour le rendre résponsif*/
$(window).resize(function () {
	var width = getWindowWidth();
	console.log(width);
	swiper = new Swiper('.swiper-container');
	swiper.update();
	if (width >= 767) {
		console.log($('.navbare').css("margin-left"));
		if (parseInt($('.navbare').css("margin-left")) < 0) {
			$('.navbare').css("margin-left", "0px");
		}
	}
	resizepost();
	recadragecontent();

});
/* Ici je modifie la taille de chaque cadre de contenu à chaque modification de taille*/
function getWindowWidth() {
	var windowWidth = 0;
	if (typeof (window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}
function resizepost() {
	var width = getWindowWidth();
	var navbar = $('.navbare').width();
	$('.post').css("width", width);

};
resizepost();
/* Ici je replace le cadre avec tout le contenu suivant quelle contenu est actif, à chaque modification de taille*/
function recadragecontent() {
	var width = getWindowWidth();
	var navbar = $('.navbare').width();
	var actif = $('.content .post.actif')[0].id;
	var multiplier = getmultiplier(actif);
	$('.post ').css({ "margin-left": (-width * multiplier) });
}

function getmultiplier(id) {
	if (id == "service" || id == "servicebtn" || id == "maitriseoeuvrebtn" || id == "amenagment" || id == "travauxspecbtn" || id == "foncierbtn") {
		return 1;
	}
	else if (id == "part" || id == "partbtn") {
		return 2;
	}
	else if (id == "contact" || id == "contactbtn") {
		return 3;
	}
	return 0;
};
/* Ici (x4) je slide de gauche à droite suivant quel bouton est appuyer ( En réalité je pourrais faire ça plus court, mais c'est plus lisible comme ça*/
$('.navbar a').click(function () {
	var id = $(this).data("target");
	var multiplier = getmultiplier(id);
	var width = getWindowWidth();
	var navbar = $('.navbare').width();
	$('html,body').animate({ scrollTop: 0 }, 100);
	swiper.slideTo(multiplier, 1000, true);
});
$('.content').click(function () {
	var navbar = $('.navbare').width();
	if (navbar <= 200 && !$('.navbare').is(':animated') && $('.navbare').css("margin-left") == "0px") {
		$('.navbare').animate({ "margin-left": '-=' + 230 });
		$('.content').css({ "filter": "brightness(100%)" })
	}
})
$('#formbtn').click(function () {
	$('#myModal').appendTo("body").modal('show');
	$('html,body').animate({ scrollTop: 0 }, 'slow');
});




var swiper = new Swiper('.swiper-container', {
	touchRatio: 1,
	onSlideChangeEnd: function (swiper) {
		$('.navbar li.active').removeClass('active');
		//after Event use it for your purpose
		if (swiper.activeIndex == 0) {
			$('#acceuilbtn').closest("li").addClass('active');
		}
		else if (swiper.activeIndex == 1) {
			$('#servicebtn').closest("li").addClass('active');
		}
		else if (swiper.activeIndex == 2) {
			$('#partbtn').closest("li").addClass('active');
		}
		else {
			$('#contactbtn').closest("li").addClass('active');
		}
	}
});
var map = new GMaps({
	div: '#gmap',
	lat: 44.3084329,
	lng: -0.7774058,
});
map.addMarker({
	lat: 44.3084329,
	lng: -0.7774058,
	title: 'Géotlandes',
	infoWindow: {
		content: '<p>Géotlandes est ici</p>'
	}
});
$(document).ready(function () {

	if (window.location.search.substr(1) == "contact") {
		setTimeout(
			function () {
				$('html,body').animate({ scrollTop: 0 }, 'slow');
				swiper.slideTo(3, 1000, true);
			}, 1000);
		$('#myModal').appendTo("body").modal('show');
	}

});
