<template>
    <footer>
        <div id="foot-left">
            <p>欢迎加入闪电字幕组</p>
            <p>审核群:XXXXXXX</p>
            <p id="copyright">Copyright©2017 MagicConch</p>
        </div>
        
        <div id="foot-right">
        <a href="http://www.acfun.cn/u/3560713.aspx"><img src="../../assets/acfun.svg" alt="acfun"></a>
        <a href="http://space.bilibili.com/24129180/" id="bilibili"><img src="../../assets/bilibili.svg" alt="bilibili"></a>
        <a href="http://weibo.com/flashsub"><img src="../../assets/weibo.svg" alt="weibo"></a>
        <a href="#"><img src="../../assets/wechat.svg" alt="wechat"></a>  
        </div>
    </footer>
</template>
<style scoped>
footer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #01062E;
    color: #dbdbdb;
    line-height: 5px;
    font-size: 12px;
}
#foot-left {
    text-align: right;
    padding-right: 30px;
}
#foot-right { 
    margin-top: 15px;
    margin-left: 3vw;
}
#foot-right > a {
    margin-left: 2vw;
}
#copyright {
    color: #8a8a8a;
}
</style>
