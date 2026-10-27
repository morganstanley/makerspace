let following = false
input.onButtonPressed(Button.A, function () {
    following = !(following)
    if (following) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
