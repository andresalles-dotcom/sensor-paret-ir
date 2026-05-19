input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        servos.P0.run(20)
        servos.P1.run(0)
    } else {
        servos.P0.run(30)
        servos.P1.run(-35)
    }
})
