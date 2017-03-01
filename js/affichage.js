
/* Ici je supprime la class active à tout les éléments et je l'affiche sur l'élément cliquer*/
$('.navbar li').click(function(e) {
	$('.navbar li.active').removeClass('active');
	var $this = $(this);
	if (!$this.hasClass('active')) {
		$this.addClass('active');
	}
	e.preventDefault();
});
/* Ici j'affiche la bar de navigation quand le button burger est cliquer (mobile)*/
$('#burgerbutton').click(function(){
	if($('.navbar').css("margin-left") == 0+"px" && !$('.navbar').is(':animated'))
	{
		$('.navbar').animate({"margin-left": '-='+230});
		$('.content').css({"filter": "brightness(100%)"})

	}
	else
	{
		if(!$('.navbar').is(':animated'))//perevent double click to double margin
		{
			$('.navbar').animate({"margin-left": '+='+230});
			$('.content').css({"filter": "brightness(40%)"})
		}
	}
});
/* Ici j'handle la modification de taille pour le rendre résponsif*/
$(window).resize(function() {
	var width = getWindowWidth();
	console.log(width);
	swiper = new Swiper('.swiper-container');
	swiper.update();
	resizepost();
	recadragecontent();

}); 
/* Ici je modifie la taille de chaque cadre de contenu à chaque modification de taille*/
function getWindowWidth() {
    var windowWidth = 0;
    if (typeof(window.innerWidth) == 'number') {
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
function resizepost()
{
	var width = getWindowWidth();
	var navbar = $('.navbar').width();
	$('.post').css( "width", width );

};
resizepost();
/* Ici je replace le cadre avec tout le contenu suivant quelle contenu est actif, à chaque modification de taille*/
function recadragecontent(){
	var width = getWindowWidth();
	var navbar = $('.navbar').width();
	var actif = $('.content .post.actif')[0].id; 
	var multiplier = getmultiplier(actif);
	$('.post ').css({"margin-left": (-width * multiplier ) });
}

function getmultiplier(id){
	if (id == "service" || id == "servicebtn"){
		return 1;
	}
	else if (id == "part" || id == "partbtn"){
		return 2;
	}
	else if (id == "contact" || id == "contactbtn"){
		return 3;
	}
	return 0;
};
/* Ici (x4) je slide de gauche à droite suivant quel bouton est appuyer ( En réalité je pourrais faire ça plus court, mais c'est plus lisible comme ça*/
$('.navbar a').click(function(){
	var id = $(this).data("target");
	var multiplier = getmultiplier(id);
	var width = getWindowWidth();
	var navbar = $('.navbar').width();
	swiper.slideTo(multiplier, 1000, true);
	
});
$('.content').click(function(){
	var navbar = $('.navbar').width();
	if (navbar <= 200 && !$('.navbar').is(':animated') && $('.navbar').css("margin-left") == "0px"){
		$('.navbar').animate({"margin-left": '-='+230});
		$('.content').css({"filter": "brightness(100%)"})
	}
})