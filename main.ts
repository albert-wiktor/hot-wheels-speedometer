pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    if (go) {
        start = control.millis()
    }
})
input.onButtonPressed(Button.A, function () {
    images.arrowImage(ArrowNames.West).showImage(0)
    music.playMelody("C - C - C5 C5 C5 - ", 250)
    go = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (game.score()))
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    if (go) {
        stop = control.millis()
        game.setScore(Math.round(30000 / (stop - start)))
        basic.showString("" + (game.score()))
        go = 0
    }
})
let stop = 0
let start = 0
let go = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
go = 0
