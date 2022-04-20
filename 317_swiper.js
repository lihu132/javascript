window.addEventListener('load', function() {

    var arrow_l = this.document.querySelector('.arrow-l')
    var arrow_r = this.document.querySelector('.arrow-r')
    var focus = this.document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var circle = this.document.querySelector('.circle')
    var img = this.document.querySelector('img')

    var imgWidth = img.offsetWidth
    ul.style.width = imgWidth * ul.children.length + 'px'
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
            for (var i = 0; i < ul.children.length; i++) {
                circle.children[i].className = ''
            }
            e.target.className = 'current'
                //移动ul，移动图片
            animate(ul, -e.target.getAttribute('index') * imgWidth)
        }
        console.log(e.target.getAttribute('index'));
    })


    //3.左右箭头
    var clickCount = 0
    var index = 0
    arrow_l.addEventListener('click', function() {
        // var leftPosition = ul.offsetLeft;
        // animate(ul, leftPosition - imgWidth);
        //animate因为有个interval时间，如果点击箭头太快，上一个动作为完成，下一个动作就开始，会导致错误位置
        clickCount--
        index++
        var leftPosition = clickCount * imgWidth;
        animate(ul, leftPosition)
        for (var i = 0; i < ul.children.length; i++) {
            circle.children[i].className = ''
        }
        circle.children[index].className = 'current'

    })
    arrow_r.addEventListener('click', function() {
        clickCount++
        index--
        var leftPosition = clickCount * imgWidth;
        animate(ul, leftPosition)
        for (var i = 0; i < ul.children.length; i++) {
            circle.children[i].className = ''
        }
        circle.children[index].className = 'current'

    })

    //4.自动播放
    function autoPlay() {
        setInterval(function() {
            clickCount--
            index++
            var leftPosition = clickCount * imgWidth;
            animate(ul, leftPosition)
            for (var i = 0; i < ul.children.length; i++) {
                circle.children[i].className = ''
            }
            circle.children[index].className = 'current'
            console.log(Math.abs(ul.children.length - 1));

            // 当超出时自动归零
            if (Math.abs(clickCount) == ul.children.length - 1) {
                clickCount = 1
                index = -1
            }
        }, 1000)
    }
    autoPlay()
})