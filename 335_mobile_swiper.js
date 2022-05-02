window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];

    var w = focus.offsetWidth;
    var index = 0;
    var timer = this.setInterval(function() {
        index++
        var translatex = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)';

        //过渡完成之后，再去执行，transitioned
        ul.addEventListener('transitionend', function() {
            //无缝滚动

        })
    }, 2000)
})