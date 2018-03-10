(function($) {
	var user = {
		'user.username':$('#userName').val(),
		'user.password':$('#password').val(),
		'user.type': 0
						
	};
	var login = $('#login');
    login.submit(function (ev) {
        $.ajax({
            type: login.attr('method'),
            url: login.attr('action'),
            data: user,
			dataType: json;  
            success: function (data) {
                alert('ok');
            }
        });
        ev.preventDefault();
    });
})(jQuery)