(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        266: function(e, n, a) {
            "use strict";
            a.r(n);
            var o, t = a(3),
                c = a(2),
                w = a(65),
                r = a(5),
                u = a(23),
                i = a(9),
                p = a(10),
                s = new r.a({ source: new i.b }),
                d = new p.a({ wrapX: !1 }),
                m = new u.a({ source: d }),
                v = new t.a({ layers: [s, m], target: "map", view: new c.a({ center: [-11e6, 36e5], zoom: 4 }) }),
                l = document.getElementById("type");

            function y() { "None" !== l.value && (o = new w.c({ source: d, type: l.value }), v.addInteraction(o)) }
            l.onchange = function() { v.removeInteraction(o), y() }, y()
        }
    },
    [
        [266, 0]
    ]
]);
//# sourceMappingURL=draw-features.js.map 0.3769605,100.8838386