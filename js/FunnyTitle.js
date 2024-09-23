
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/avatar.jpg");
        document.title = '我就知道你会回来的';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/avatar.jpg");
        document.title = '大哥你快回来啊！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});