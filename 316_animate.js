function animate(obj, target, callback) {
    console.log(callback); //callback = function(){} 调用的时候 callback()

    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
                //回调函数写在定时器结束里面
                // if (callback) {
                //     callback()
                // }
            callback && callback();
        } else {
            //缓动，更改步长
            //匀速动画 步长固定
            //缓动动画 变化步长
            //把步长值改为整数
            obj.style.left = obj.offsetLeft + step + 'px'
        }

    }, 15)
}