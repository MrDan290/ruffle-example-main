var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            //style: 'width: ' + width + 'px; height: ' + height + 'px',
        });

    player.style.width = "100vw"; 
    player.style.height = "100vh";
    player.load({ url: url });
}

