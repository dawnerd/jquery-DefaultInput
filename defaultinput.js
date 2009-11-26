(function($){
	$.ux.behavior("DefaultInput", {
		initialize: function() {
			this.defaultValue = $(this.element).val()||'';
		},
		onfocus: function() {
			if(this.defaultValue == $(this.element).val()) {
				$(this.element).val('');
			}
		},
		onblur: function() {
			if($(this.element).val() == '') {
				$(this.element).val(this.defaultValue);
			}
		}
	});
	
	$(document).ready(function() {
		$('input.jsDefaultInput').attach("DefaultInput");
	});
})(jQuery);
