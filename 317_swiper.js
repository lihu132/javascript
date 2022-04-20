window.addEventListener('load', function() {

    var arrow_l = this.document.querySelector('.arrow-l')
    var arrow_r = this.document.querySelector('.arrow-r')
    var focus = this.document.querySelector('.focus')


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

})