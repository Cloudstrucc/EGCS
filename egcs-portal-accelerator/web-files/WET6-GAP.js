function fixModals( jQuery ) {
    // add classes
	var modals = $("section.modal");
	modals
		.addClass("overlay-def");
	
	var modalCloseButtons = $("section.modal > div > div > div.modal-header > button.form-close");
    modalCloseButtons
		.addClass("mfp-close");
    
    // change element types
	var modalHeaders = $("section.modal > div > div > div.modal-header");
    modalHeaders
        .replaceWith(function() {
            return '<header class="modal-header">' + $(this).html() + '</header>';
        });

	var modalTitles = $("section.modal > div.modal-dialog > div.modal-content > header.modal-header > h1.modal-title");
    modalTitles
        .replaceWith(function() {
            return '<h2 class="modal-title">' + $(this).html() + '</h2>';
        });
}

function addFieldSets( jQuery ) {
	$( "fieldset" ).each(function( index ) {
        $(this).append('<legend class="hidden">'+$(this).attr("aria-label")+'</legend>');
    });
}

function initialize() {
	fixModals();
	addFieldSets();
};

$( document ).ready( initialize );