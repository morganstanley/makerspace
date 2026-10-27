let distance = 0
let following = false
basic.forever(function () {
    if (following) {
        distance = CutebotPro.ultrasonic(SonarUnit.Centimeters)
        if (distance > 25 && distance < 80) {
            CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
            CutebotPro.pwmCruiseControl(40, 40)
        } else if (distance > 0 && distance < 15) {
            CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
            CutebotPro.pwmCruiseControl(-40, -40)
        } else {
            CutebotPro.stopImmediately(CutebotProMotors.ALL)
            CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
        }
    } else {
        CutebotPro.stopImmediately(CutebotProMotors.ALL)
        CutebotPro.turnOffAllHeadlights()
    }
})
