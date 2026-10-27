basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 10) {
        basic.showIcon(IconNames.Surprised)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    } else {
        basic.showIcon(IconNames.Happy)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
    }
})
