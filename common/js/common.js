//mod-codeBox
$(function(){
	$('.js-accordion > dt').click(function(){
		$(this).toggleClass('is-active');
		$(this).next().slideToggle('slow');
	});
});

(function(){
	function init(event){
		prettyPrint();
	}
	if(window.addEventListener)window.addEventListener("load",init,false);
	else if(window.attachEvent)window.attachEvent("onload",init);
})();
