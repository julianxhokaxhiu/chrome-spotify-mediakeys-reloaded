chrome.commands.onCommand.addListener(function(command){
	chrome.tabs.query({
        url: '*://play.spotify.com/*'
    }, function(tabs){
        for ( var i in tabs ) {
          var tab = tabs[i];

          chrome.tabs.sendMessage( tab.id, {
              action: command
          });
        }
    })
});