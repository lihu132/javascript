window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img')
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big')
    var bigImg = document.querySelector('.bigImg')

    function move(e) {
        mask.style.left = e.pageX - preview_img.offsetLeft - 75 + 'px'
        mask.style.top = e.pageY - preview_img.offsetTop - 75 + 'px'

    }

    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    preview_img.addEventListener('mousemove', function(e) {
        var maskX = e.pageX - preview_img.offsetLeft - mask.offsetWidth / 2;
        var maskY = e.pageY - preview_img.offsetTop - mask.offsetHeight / 2;

        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
            maskX = preview_img.offsetWidth - mask.offsetWidth
        }

        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight
        }
        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'

        //大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离

        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        //大图片的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;


        var bigX = maskX * bigMax / maskMax
        var bigY = maskY * bigMax / maskMax

        bigImg.style.left = -bigX + 'px'
        bigImg.style.top = -bigY + 'px'

    })


})