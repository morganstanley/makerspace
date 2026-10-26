input.onButtonPressed(Button.A, function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff00ff)
    CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x00ffff)
    CutebotPro.pwmCruiseControl(50, -50)
    basic.pause(1000)
    CutebotPro.stopImmediately(CutebotProMotors.ALL)
})
