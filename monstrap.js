(function ($) {
    $.fn.extend({
        dynamicStyle: function (t, c) {
            let elem = $(this);
            $(window).on("load resize", function () {
                var arr = [];
                for (const r in c) {
                     const s = `${c[r]}`;
                     e = $(`${t}`).css(`${r}`),
                        o = parseInt(e), v = `${r}:${o*s}px`,
                        arr.push(v);
                    var res = arr.toString(),
                        val = res.replace(",", ";");
                    $(elem).attr("style", val)
                }
            })
        },

        classinterval: function (className, timeout) {
            let elem = $(this);
            let type = typeof className;
            setInterval(() => {
                type == 'string' ? $(elem).toggleClass(className) :
                    className.map((item) => {
                        $(elem).toggleClass(item);
                    });
            }, timeout);
        },

        classdom: function (t, c) {
            for (const n in t) {
                const key = Object.keys(t);
                const o = `${t[n]}`;
                $(window).on('load', function () {
                    c ? $(`${key}`).addClass(`${c} ${o}`) :
                        $(`${key}`).addClass(`${o}`);
                })
            }
        },

        switchClass: function (c) {
            let elem = $(this);
            elem.click(function () {
                elem.removeClass(c);
                $(this).addClass(c);
            })
        },

        colorloop: function (t, p) {
            let elem = $(this);
            $(window).on('load', function () {
                $(elem).each(function (e, a) {
                    $(a).addClass(`${p}-${t[e]}`);
                });
            })

        },

        classmaster: function (e, o, s, l) {
            var elem = $(this);
            $(elem).on(e, function () {
                "add" == s ? $(`${o}`).addClass(l) :
                    "remove" == s ? $(o).removeClass(l) :
                    "toggle" == s && $(o).toggleClass(l)
            })
        },

        cssmaster: function (element, values) {
            let elem = $(this);
            values.map((item) => {
                let property = $(`${element}`).css(item);
                $(elem).css(item, property);
            })
        },

        dataRepeat: function () {
            let elem = $(this);
            elem.each(function (i, e) {
                let val = $(e).attr('data-repeat');
                let children = $(e).children();
                for (i = 1; i < val; i++) {
                    children.clone().appendTo(e);
                }
            })
        },

        addAttrValue: function (attr) {
            let elem = $(this);
            elem.attr(attr, elem.text());
        },

        ElemscrollToggle: function (l, o) {
            let elem = $(this);
                $(window).on("scroll", function () {
                s = $(window).scrollTop(); 
                    s > $(`${l}`).height() ?
                    $(elem).addClass(o) :
                    $(elem).removeClass(o);
            })
        },
        scrollToggle: function (o) {
            let s = $(this);
            l = $(this).outerHeight();
            $(window).on('scroll', function () {
                $(window).scrollTop() > l ? s.addClass(o) :
                    s.removeClass(o)
            })
        },
        offsetscrollToggle: function (l, o) {
            let s = $(this);
            $(window).on("load scroll", function () {
                let scroll = $(window).scrollTop();
                scroll > $(`${l}`).offset().top ? s.addClass(o) :
                    s.removeClass(o)
            })
        },

        divideHeight: function (e, a) {
            $(window).on('load resize', function () {
                let Eheight = e.height();
                $(this).css('height', `${Eheight/a}px`);
            })

        },

        multipleHeight: function (e, a) {
            $(window).on('load resize', function () {
                var Eheight = e.height();
                $(this).css('height', (Eheight * a) + 'px');
            })
        },

        divideWidth: function (e) {
            $(window).on('load resize', function () {
                var Elength = $(this).length;
                var Ewidth = e.width();
                $(this).css('width', (Ewidth / Elength) + 'px');
            })
        },

        equallHeight: function () {
            let elem = $(this);
            $(window).on('load resize', function () {
                var ElemWidth = $(elem).width();
                $(elem).css({
                    'height': ElemWidth
                });
            });
        },

        setHeight: function (e) {
            let elem = $(this);
            $(window).on('load resize', function () {
                let elemHeight = e.height();
                elem.css({
                    'height': elemHeight + 'px'
                });
            })
        },

        setWidth: function (t) {
            $(window).on('load resize', function () {
                var i = t.width();
                $(this).css({
                    width: i + "px"
                })
            })

        },

        fullHeight: function () {
            var i = $(this),
                n = i.parent();
            $(window).on("load resize", function () {
                i.css({
                    height: n.height()
                })
            })
        },

        toggleOnScroll: function (l, o) {
            $(window).on('scroll', function () {
                $(window).
                scrollTop() >= l ? $(this)
                    .addClass(o) : $(this)
                    .removeClass(o)
            })

        },

        isInViewport: function () {
            $(window).on('scroll', function () {
                var t = $(this).offset().top,
                    i = t + $(this).outerHeight(),
                    o = $(window).scrollTop(),
                    e = o + $(window).height();
                return i > o && t < e
            })

        },

        responsive: function (max, size) {
            $(window).on('load resize', function () {
                if ($(window).width() < max) {
                    $(this).css({
                        'width': size + 'px'
                    });
                }
            })
        },

    })
}(jQuery));