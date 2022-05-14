let direction = 0
basic.forever(function () {
    direction = input.compassHeading()
    if (direction < 5 || direction > 355) {
        basic.showString("N")
        music.ringTone(262)
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(direction)
    } else if (input.buttonIsPressed(Button.B)) {
        music.playMelody("B A G A G F A C5 ", 270)
        basic.showString("Wijs naar het noorden.")
        music.playMelody("C5 B A G F E D C ", 270)
    } else {
        basic.clearScreen()
        music.ringTone(0)
    }
})
