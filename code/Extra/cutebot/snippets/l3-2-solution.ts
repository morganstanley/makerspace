basic.forever(function () {
    if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 10) {
        basic.showIcon(IconNames.No)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    } else if (CutebotPro.ultrasonic(SonarUnit.Centimeters) < 25) {
        basic.showIcon(IconNames.Confused)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
    } else {
        basic.showIcon(IconNames.Yes)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
    }
})
