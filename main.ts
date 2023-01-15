let Α = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # #
        # . . # #
        . # # # .
        # . . . #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Α = 0
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        led.plot(Α, 0)
        led.toggle(Α - 1, 0)
        led.plot(Α, 1)
        led.toggle(Α - 1, 1)
        led.plot(Α, 2)
        led.toggle(0, 0)
        led.toggle(0, 0)
        led.toggle(0, 2)
        led.toggle(0, 0)
        led.toggle(Α - 1, 2)
        led.plot(Α, 3)
        led.toggle(Α - 1, 3)
        led.plot(Α, 4)
        led.toggle(Α - 1, 4)
        basic.pause(500)
        Α += 1
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        # . . # #
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        # . . # #
        . # # # .
        . . # . .
        `)
})
