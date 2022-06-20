"use strict";

document.addEventListener('DOMContentLoaded', function() {




//start spr-countdown
var $action_text_timer_countdown = $('#action-text-timer-countdown');
$action_text_timer_countdown.countdown('2018/07/05 23:59:59', function (event) {
    $action_text_timer_countdown.find('.days').html(event.strftime('%D'));
    $action_text_timer_countdown.find('.hours').html(event.strftime('%H'));
    $action_text_timer_countdown.find('.minutes').html(event.strftime('%M'));
    $action_text_timer_countdown.find('.seconds').html(event.strftime('%S'));
}).on('finish.countdown', function () {

}//end finish.countdown
);//end spr-countdown





//countdown-timer
setTimeout(function () {
	$("#alert-text-img-btn").addClass("show");
}, 4000);
//countdown-timer-end
var configProfile = {
    "profile": {
        "screenName": 'multifourdesign'
    },
    "domId": 'footer-twitter-img-twitterfeed',
    "maxTweets": 1,
    "enableLinks": true,
    "showUser": false,
    "showTime": true,
    "showImages": false,
    "showRetweet": false,
    "showInteraction": false
};
twitterFetcher.fetch(configProfile);

});
