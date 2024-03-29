! function () {
    $.fn.smint = function (t) {
        var s = $.extend({
            scrollSpeed: 500,
            mySelector: "div"
        }, t);
        $(this).addClass("smint");
        var i = new Array,
            e = 0,
            o = $(".smint").height(),
            a = $(this),
            r = $(".smint"),
            n = $(".smint a"),
            l = r.height()+60;
        if (s.scrollSpeed) var c = s.scrollSpeed;
        if (s.mySelector) var h = s.mySelector;
        return n.each(function (t) {
            var s = $(this).attr("href").split("#")[1];
            $(this).hasClass("extLink") || $(this).attr("id", s), i.push(Array($(h + "." + s).position().top - o, $(h + "." + s).height() + $(h + "." + s).position().top, s));
            var a = r.offset().top,
                v = function (e) {
                    var o = $(window).scrollTop() + l;
                    o > a + l ? r.css({
                        position: "fixed",
                        top: 0,
                        left: 0
                    }).addClass("fxd") : r.css("position", "relative").removeClass("fxd"), i[t][0] <= o && o <= i[t][1] && ("up" == e ? ($("#" + s).addClass("active"), $("#" + i[t + 1][2]).removeClass("active")) : t > 0 ? ($("#" + s).addClass("active"), $("#" + i[t - 1][2]).removeClass("active")) : void 0 == e && $("#" + s).addClass("active"), $.each(i, function (t) {
                        s != i[t][2] && $("#" + i[t][2]).removeClass("active")
                    }))
                };
            v(), $(window).scroll(function () {
                var t = $(this).scrollTop() + l;
                t > e ? direction = "down" : e > t && (direction = "up"), e = t, v(direction), $(window).scrollTop() + $(window).height() == $(document).height() ? (n.removeClass("active"), $(".smint a:not('.extLink'):last").addClass("active")) : n.last().removeClass("active")
            }), $(this).on("click", function (t) {
                var s = r.height();
                t.preventDefault();
                var i = $(this).attr("href").split("#")[1];
                if (r.hasClass("fxd")) var e = $(h + "." + i).offset().top - s;
                else var e = $(h + "." + i).offset().top - 2 * s;
                return $("html, body").stop().animate({
                    scrollTop: e
                }, c), $(this).hasClass("extLink") ? !1 : void 0
            }), $(".intLink").on("click", function (t) {
                var s = r.height();
                t.preventDefault();
                var i = $(this).attr("href").split("#")[1];
                if (r.hasClass("fxd")) var e = $(h + "." + i).position().top - s;
                else var e = $(h + "." + i).position().top - 2 * s;
                return $("html, body").stop().animate({
                    scrollTop: e
                }, c), $(this).hasClass("extLink") ? !1 : void 0
            })
        })
    }
}();