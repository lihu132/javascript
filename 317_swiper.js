window.addEventListener('load', function() {

    var arrow_l = this.document.querySelector('.arrow-l')
    var arrow_r = this.document.querySelector('.arrow-r')
    var focus = this.document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var circle = this.document.querySelector('.circle')
    var img = this.document.querySelector('img')

    var clickCount = 0
    var index = 0


    var imgWidth = img.offsetWidth
    ul.style.width = imgWidth * (ul.children.length + 2) + 'px'
        // focus.style.width = imgWidth + 'px'
        // focus.style.height = img.offsetHeighth + 'px'

    //1.鼠标经过focus 显示左右箭头
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
    })
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'

    })


    //2.动态生成小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li')
        circle.appendChild(li)
        li.setAttribute('index', i)
    }

    circle.children[0].className = 'current'

    //2.1小圆圈点击更改颜色
    circle.addEventListener('click', function(e) {
        if (e.target != circle) {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = ''
            }
            e.target.className = 'current'
                //移动ul，移动图片
            animate(ul, -e.target.getAttribute('index') * imgWidth)
            clickCount = -e.target.getAttribute('index')
            index = e.target.getAttribute('index')
        }
        console.log(e.target.getAttribute('index'));
    })

    //克隆第一张图片，放到最后面
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)

    //3.左右箭头

    arrow_r.addEventListener('click', function() {
        // var leftPosition = ul.offsetLeft;
        // animate(ul, leftPosition - imgWidth);
        //animate因为有个interval时间，如果点击箭头太快，上一个动作为完成，下一个动作就开始，会导致错误位置

        //当播放到第五张，在动画之后，取消动画，直接回到第一张的位置，做到无缝循环
        if (Math.abs(clickCount) === ul.children.length - 1) {
            // animate(ul, leftPosition, function() {
            ul.style.left = '0'
                // })
            clickCount = 0;
            index = 0
        }
        clickCount--
        index++
        console.log('r-index' + index + '  r-count' + clickCount);
        var leftPosition = clickCount * imgWidth;
        animate(ul, leftPosition)


        //小圆点跟随变化
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ''
        }
        if (index == circle.children.length) {
            index = 0
        }
        circle.children[index].className = 'current'

    })

    arrow_l.addEventListener('click', function() {
        // var leftPosition = ul.offsetLeft;
        // animate(ul, leftPosition - imgWidth);
        //animate因为有个interval时间，如果点击箭头太快，上一个动作为完成，下一个动作就开始，会导致错误位置

        //开始第一张时，返回第四张
        if (Math.abs(clickCount) === 0) {
            // animate(ul, leftPosition, function() {
            ul.style.left = -(ul.children.length - 1) * imgWidth + 'px'
                // })
            clickCount = -(ul.children.length - 1);
            index = ul.children.length - 1
        }
        clickCount++
        index--
        var leftPosition = clickCount * imgWidth;
        animate(ul, leftPosition)
        console.log('l-index' + index);

        //小圆点跟随变化
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = ''
        }

        //当到第五张时，直接返回第四张
        if (index < 0) {
            index = circle.children.length - 1
        }
        circle.children[index].className = 'current'

    })




    //4.自动播放
    function autoPlay(play) {
        timer = setInterval(function() {
            if (!play) {
                clearInterval(timer);
                console.log('test');
            } else {
                clickCount--
                index++
                var leftPosition = clickCount * imgWidth;
                if (Math.abs(clickCount) === ul.children.length - 1) {
                    animate(ul, leftPosition, function() {
                        ul.style.left = '0'
                    })
                    clickCount = 0;
                    index = 0
                } else {
                    animate(ul, leftPosition)
                }

                for (var i = 0; i < ul.children.length - 1; i++) {
                    circle.children[i].className = ''
                }
                circle.children[index].className = 'current'
            }



        }, 1000)
    }
    // autoPlay(true)
})