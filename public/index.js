var carousel = new Vue({
    el: '.pure-g',
    data: {
        tvPage: 0,
        moviePage: 0,
        tvOnShow: {
            name: "闪电侠",
            info: "世界上最快的男人——闪电侠",
            href: "#",
            src: "./imgs/theflash.jpg"
        },
        movieOnShow: {
            name: "少年正义联盟",
            info: "我没看过，写不出文案。——少年正义联盟",
            href: "#",
            src: "./imgs/young.jpg"
        },
        tvs: [
            {
                name: "闪电侠",
                info: "世界上最快的男人——闪电侠",
                href: "#",
                src: "./imgs/theflash.jpg"
            },
            {
                name: "哥谭",
                info: "民风淳朴哥谭市，人才辈出阿卡姆。——哥谭",
                href: "#",
                src: "./imgs/gotham.jpg"
            }

        ],
        movies: [
            {
                name: "少年正义联盟",
                info: "我没看过，写不出文案。——少年正义联盟",
                href: "#",
                src: "./imgs/young.jpg"
            },
            {
                name: "夜行动物",
                info: "这个也是。——夜行动物",
                href: "#",
                src: "./imgs/animal.jpg"
            }
        ]
    },
    mounted : function() {
        setInterval(function() {
            if(carousel.tvPage === carousel.tvs.length - 1) carousel.tvPage = 0;
            else carousel.tvPage += 1;
            carousel.tvOnShow = carousel.tvs[carousel.tvPage];

            if(carousel.moviePage === carousel.tvs.length - 1) carousel.moviePage = 0;
            else carousel.moviePage += 1;
            carousel.movieOnShow = carousel.movies[carousel.moviePage];
        }, 4000);
    }
})