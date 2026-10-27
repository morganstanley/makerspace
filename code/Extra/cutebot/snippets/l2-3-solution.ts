input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x00ff00)
    CutebotPro.pwmCruiseControl(40, 40)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    CutebotPro.pwmCruiseControl(-40, -40)
})
input.onButtonPressed(Button.AB, function () {
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    CutebotPro.turnOffAllHeadlights()
    basic.showIcon(IconNames.Square)
})
