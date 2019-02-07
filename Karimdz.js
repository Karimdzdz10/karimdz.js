<script type="text/javascript" src="http://1ink.cc/includes/ajax/jquery.js"></script>

<script>
function URL_Shortner(LinkURL) {
        LinkURL = LinkURL.replace("&", "@--@");
		$.ajax({
        		type: "POST", url: "http://1ink.cc/api/create.php", cache: false,
        		data: "uid=1113325&uname=Saradz&showads=true&url="+LinkURL,
        		success: function(result){
                    alert( "http://1ink.cc/" + result );
        		}
    		});
}
</script>
