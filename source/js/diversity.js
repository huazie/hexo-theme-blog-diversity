(function($){

    let xPos = 0;
    gsap.timeline()
        .set('.ring', { rotationY:180, cursor:'grab' })
        .from('.img', {
            duration:1.5,
            y:200,
            opacity:0,
            stagger:0.1,
            ease:'expo'
        })
        .add(()=>{
            $('.img').on('mouseenter', (e)=>{
                let current = e.currentTarget;
                gsap.to('.img', {opacity:(i,t)=>(t==current)? 1:0.5, ease:'power3'})
            })
            $('.img').on('mouseleave', (e)=>{
                gsap.to('.img', {opacity:1, ease:'power2.inOut'})
            })
        }, '-=0.5')

    // 当用户按下鼠标按钮或者在触摸屏设备上开始触摸
    $(window).on('mousedown touchstart', dragStart);
    // 当用户释放鼠标按钮或者在触摸屏设备上结束触摸
    $(window).on('mouseup touchend', dragEnd);
            
    function dragStart(e){ 
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
        gsap.set('.ring', {cursor:'grabbing'})
        $(window).on('mousemove touchmove', drag);
    }

    function dragEnd(e){
        $(window).off('mousemove touchmove', drag);
        gsap.set('.ring', {cursor:'grab'});
    }

    function drag(e){
        if (e.touches) e.clientX = e.touches[0].clientX;        

        gsap.to('.ring', {
            rotationY: '-=' +( (Math.round(e.clientX)-xPos)%360 ),
            onUpdate:()=>{ gsap.set('.img', { backgroundPosition:(i)=>getBackgroundPosition(i) }) }
        });

        xPos = Math.round(e.clientX);
    }

    /**
     * 返回background-position属性，以在每个图像中创建视差滚动效果
     */
    function getBackgroundPosition(i){ 
        return ( 100-gsap.utils.wrap(0,360,gsap.getProperty('.ring', 'rotationY')-180-i*36)/360*500 )+'px 0px';
    }

    // 主题直达按钮点击事件
    $('.theme-redirect').on('click', function(){
        const theme = $(this).parent('p').attr('theme');
        const href = window.location.href;
        const hostname = window.location.hostname;
        const port = window.location.port;

        let url;

        // 本地环境
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            url = href.replace(port, getThemeServerPort(theme));
        } else { // 静态页面部署环境
            url = href;
        }

        if (!url.endsWith("/")) url += "/";

        url += theme;

        // 跳转
        window.open(url, "_blank");
    });

    function getThemeServerPort(theme) {
        var index = config.themes.indexOf(theme);
        const ports = config.ports;
        let port = 4001;
        if (ports && ports[index]) {
            port = ports[index];
        } else {
            port += index;
        }
        return port;
    }

    // 设为默认（主题）按钮点击事件
    $('.theme-default').on('click', function(){
        const theme = $(this).parent('p').attr('theme');
    });

})(jQuery);