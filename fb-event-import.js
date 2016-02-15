/*

author: Ante Barić @capJavert
requires jQuery 1.9.* (include it before this script)

*/

$(document).ready(function() {
    var buttonId = 'BUTTON_ELEMENT_ID'; // example: fb-button
    var elementId = 'INPUT_ELEMENT_ID'; // example: fb-input
    var url = 'URL_FOR_DATA_PROCESSING'; // example: /parse_json.php
    var appId = 'YOUR_FACEBOOK_APP_ID';

    //fb sdk
    window.fbAsyncInit = function() {
        FB.init({
            appId: appId,
            xfbml: true,
            version: 'v2.4'
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $('#'+buttonId).on('click',function() {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                var eventLink = $('#'+elementId).val();
                if(eventLink.substr(-1)=='/') //check if url ends with '/' adjust offset
                    var offset = 2;
                else var offset = 1;

                eventId = eventLink.split('/'); //find fb id in link
                eventId = eventId[eventId.length-offset]; //get link from split array
                FB.api(
                    "/"+eventId,
                    function (response) {
                        if(typeof response['error'] !== 'undefined') {
                            alert('URL is not valid or facebook event with this ID does not exists anymore.');
                            return;
                        } 

                        $.post(url, {event:response}, function(e)){
                            //do something with post result
                        });                        
                    }
                );
            }
        });
    });
});
