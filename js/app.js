chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    switch(request.action){
        case 'NEXT-MK':
            document.getElementsByClassName('spoticon-skip-forward-16')[0].click();
            break;
        case 'PREV-MK':
            document.getElementsByClassName('spoticon-skip-back-16')[0].click();
            break;
        case 'PLAY-PAUSE-MK':
            var el = document.getElementsByClassName('spoticon-pause-16')[0] || document.getElementsByClassName('spoticon-play-16')[0];
            el.click();
            break;
    }
});