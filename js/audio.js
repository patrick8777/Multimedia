var vid = document.getElementById("myAudio");
vid.addEventListener("play", function() {
  alert("The audio has started to play");
});

var vid = document.createElement('myAudio');
isSupp = vid.canPlayType(vidType+';codecs="'+codType+'"'); 

var text1 = myVid.addTextTrack("myAudio");

document.getElementById("myAudio").src = "assets/audio/Audio.mp3";
document.getElementById("myAudio").load(); 
var vid = document.getElementById("myAudio");

function playVid() {
    vid.play();
}

function playPause() {
    vid.pause();
} 
