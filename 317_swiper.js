window.addEventListener('load', function() {

    var arrow_l = this.document.querySelector('.arrow-l')
    var arrow_r = this.document.querySelector('.arrow-r')
    var focus = this.document.querySelector('.focus')
    var ul = focus.querySelector('ul')
    var circle = this.document.querySelector('.circle')
    var img = this.document.querySelector('img')

    ul.style.width = img.offsetWidth * ul.children.length + 'px'

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
    }

    circle.children[0].className = 'current'

    circle.addEventListener('click', function(e) {
        if (e.target != circle) {
            for (var i = 0; i < ul.children.length; i++) {
                circle.children[i].className = ' '
            }
            e.target.className = 'current'
        }
        console.log(1);
    })

})