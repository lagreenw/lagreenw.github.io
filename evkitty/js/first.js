document.getElementById('logoanimation').addEventListener('ended', myHandler, false);

function myHandler(e) {
    var videoFile = 'video/LogoLoop.mp4';
    $('#logoanimation').attr('src', videoFile);
    $('#logoanimation').attr("loop", true); /* 1 */
    $("#logoanimation")[0].load();
    document.getElementById('logoanimation').removeEventListener('ended', myHandler, false) /* 2 */
}
