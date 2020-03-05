//hamburger
$("#ham").click(()=>{
	// $("aside").show(700)
	$("aside").animate({width:'65vw'},250);
	$("#ham").animate({width:'0'},50);
})
$(document).click(function(e){

    // Check if click was triggered on or within #menu_content
    if( $(e.target).closest("#ham").length > 0 ) {
        return false;
    }
	$("aside").animate({width:'0'},250);
	$("#ham").animate({width:'5vh'},50);
    // Otherwise
    // trigger your click function
});

//laxxx
window.onload = function () {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

// This is the "Offline copy of pages" service worker

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
	if (navigator.serviceWorker.controller) {
	  console.log("[PWA Builder] active service worker found, no need to register");
	} else {
	  // Register the service worker
	  navigator.serviceWorker
		.register("sw.js", {
		  scope: "./"
		})
		.then(function (reg) {
		  console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
		});
	}
  }
  