window.addEventListener('load', function () {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var circle = focus.children[1]

    var w = focus.offsetWidth;
    var index = 0;
    var timer = this.setInterval(function () {
        index++
        var translatex = -index * w;
        ul.style.transition = 'all .3s'
        ul.style.transform = 'translateX(' + translatex + 'px)';

    }, 2000)


    //过渡完成之后，再去执行，transitioned
    ul.addEventListener('transitionend', function () {
        //无缝滚动
        if (index >= 3) {

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
        //小圆点跟随变化
        // for (var i = 0; i < circle.children.length; i++) {
        //     circle.children[i].className = ''
        // }
        // circle.children[index].className = 'current'
        console.log(index);
        circle.querySelector('li.current').classList.remove('current')
        circle.children[index].classList.add('current')
    })



    //手指滑动轮播图
    var startX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function (e) {
        startX = e.targetTouches[0].pageX;
        //手指触摸时停止定时器
        clearInterval(timer)
    })
    //计算手指移动距离
    var moveX = 0;
    ul.addEventListener('touchmove', function (e) {
        moveX = e.targetTouches[0].pageX - startX;
        //移动盒子
        var translatex = -index * w + moveX;

        //手指移动不需要动画效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;//如果用户手指移动过位置，再去判断
        e.preventDefault();//阻止滚动屏幕

    })

    //手指离开后，根据移动距离判断是回弹还是播放上一张或者下一张
    ul.addEventListener('touchend', function (e) {
        if (flag) {
            //如果移动距离大于50px,则播放上一张或下一张
            if (Math.abs(moveX) > 50) {
                //如果右滑，播放上一张moveX是正值
                if (moveX > 0) {
                    index--;
                }
                else {
                    index++;
                }
                //如果左滑，播放下一张moveX是负值
                var translatex = -index * w;
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translatex + 'px)';

            }
            else {
                //如果小于50px则回弹
                var translatex = -index * w;
                ul.style.transition = 'all .3s'
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }

        }
        clearInterval(timer);
        timer = setInterval(function () {
            index++
            var translatex = -index * w;
            ul.style.transition = 'all .3s'
            ul.style.transform = 'translateX(' + translatex + 'px)';

        }, 2000)

    })


})