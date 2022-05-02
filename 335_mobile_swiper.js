window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var circle = this.document.querySelector('.circle')

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
            if (index == 3) {

                index = 0;
                //去掉过渡效果，让ul快速跳到目标位置
                ul.style.transition = 'none';
                //利用最新的索引号，滚动图片
                var translatex = -index * w;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else if (index < 0) {
                index = 2;
                //去掉过渡效果，让ul快速跳到目标位置
                ul.style.transition = 'none';
                //利用最新的索引号，滚动图片
                var translatex = -index * w;
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }

        })

        console.log(index);
        //小圆点跟随变化
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ''
        }
        circle.children[index].className = 'current'
    }, 2000)





})