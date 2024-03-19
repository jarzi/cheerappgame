import kaboom from "kaboom"

const k = kaboom()

k.add([
    text("hello"),
    pos(120, 80),
]);

k.onClick(() => k.addKaboom(k.mousePos()))