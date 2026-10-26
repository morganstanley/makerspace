input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff00ff)
        CutebotPro.pwmCruiseControl(50, -50)
        basic.pause(500)
        CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xffff00)
        CutebotPro.pwmCruiseControl(-50, 50)
        basic.pause(500)
    }
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
    CutebotPro.turnOffAllHeadlights()
    basic.showIcon(IconNames.Heart)
})
