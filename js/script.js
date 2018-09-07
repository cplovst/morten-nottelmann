
// Med inspiration fra https://stackoverflow.com/questions/21163756/html5-and-javascript-to-play-videos-only-when-visible
var video = document.getElementById('myVideo'), fraction = 0.8;

            function checkScroll() {
                var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
                b = y + h, //bottom
                visibleX, visibleY, visible;

                visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
                visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

                visible = visibleX * visibleY / (w * h);

                if (visible > fraction) {
                    video.play();
                } else {
                    video.pause();
                }
            }

            checkScroll();
            window.addEventListener('scroll', checkScroll, false);
            window.addEventListener('resize', checkScroll, false);