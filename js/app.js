chrome.runtime.onMessage.addListener( function(request, sender, sendResponse){
    switch(request.action){
        case 'NEXT-MK':
            //NEXT_MK
            $('#app-player').contents().find('#next').click();
            break;
        case 'PREV-MK':
            //PREV_MK
            $('#app-player').contents().find('#previous').click();
            break;
        case 'PLAY-PAUSE-MK':
            //PLAY_MK
            $('#app-player').contents().find('#play-pause').click();
            break;
    }
});