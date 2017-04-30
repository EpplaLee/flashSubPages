<template>
    <div class="pure-menu pure-menu-horizontal" id="navigation">
            <router-link to="/"><img src="../../assets/logo.jpg" alt="logo"></router-link>
            <div>
            <form class="pure-form" id="search">
                <input type="text" class="pure-input-rounded" id="search-input">
                <button type="submit" class="pure-button" id="search-button"><i class="fa fa-search" aria-hidden="true"></i></button>
            </form>
            <ul class="pure-menu-list" id="menu">
                <li class="pure-menu-item"><router-link to="/tv" class="pure-menu-link">美剧</router-link></li>
                <li class="pure-menu-item"><router-link to="/movie" class="pure-menu-link">电影</router-link></li>
                <li class="pure-menu-item"><router-link to="/news" class="pure-menu-link">资讯</router-link></li>
                <li class="pure-menu-item"><router-link to="/about" class="pure-menu-link">关于闪电</router-link></li>
                <li class="pure-menu-item"><router-link to="/joinus" class="pure-menu-link">加入我们</router-link></li>
            </ul>  
            </div>
    </div>
</template>
<script>
    export default {
    }
</script>

<style scoped>
#navigation {
    display: flex;
    justify-content: space-between;
    height: 48px;
    background-color:  #01062E;
}
a > img {
    height: 48px;
}
#search {
    opacity: 0.9;
}
#search:hover {
    opacity: 1;
}
#search-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
#search-button > i {
    margin-left: -7px;
}
#search-input {
    height: 4vh;
    margin: 5px;
}
.pure-form {
    display: inline;
}
.pure-menu-item > .pure-menu-link{
    color: white !important;
}
.pure-menu-link:before{
            content: "";
            position: absolute;
            z-index: 2;
            left: 0;
            bottom: 5px;
            height: 2px;
            width: 100%;
            background: white;
            transform: scale(0);
            transition: all 0.3s;
}
.pure-menu-link:hover:before{
            transform: scale(1);
}

.pure-menu-link:hover {
    color: #99ABB9 !important;
    background-color:  #2F3847 !important;
}
.pure-menu-link:visited {
    background-color:  #2F3847 !important;
}
</style>
