pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    if (go) {
        start = control.millis()
    }
})
input.onButtonPressed(Button.A, function () {
    images.arrowImage(ArrowNames.East).showImage(0)
    music.playMelody("C - C - C5 C5 C5 - ", 250)
    go = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(game.score())
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    if (go) {
        stop = control.millis()
        game.setScore(Math.round(30 * 1000 / (stop - start)))
        go = 0
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            basic.showNumber(game.score())
        }
    }
})
let stop = 0
let start = 0
let go = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
go = 0
basic.showIcon(IconNames.Yes)
