basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 15) {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
    } else {
        CutebotPro.pwmCruiseControl(30, 30)
    }
})
