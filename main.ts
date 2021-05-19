pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    if (go) {
        start = control.millis()
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    music.playMelody("C - C - C5 C5 C5 - ", 250)
    go = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (speed))
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    if (go) {
        stop = control.millis()
        music.playTone(523, music.beat(BeatFraction.Quarter))
        speed = Math.round(30000 / (stop - start))
        serial.writeValue("speed", speed)
        basic.showString("" + (speed))
        go = 0
    }
})
let stop = 0
let speed = 0
let start = 0
let go = 0
DFRobotMaqueenPlus.I2CInit()
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
go = 0
