input.onButtonPressed(Button.A, function () {
    basic.showString("x")
    Number_1 += 1
    basic.showNumber(Number_1)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("x")
    Number_1 += -1
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("y")
    basic.showNumber(Number_2)
    basic.showString("x")
    basic.showNumber(Number_1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("y")
    Number_2 += 1
    basic.showNumber(Number_2)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("y")
    Number_2 += -1
    basic.showNumber(Number_2)
})
let Number_2 = 0
let Number_1 = 0
basic.showString("x=#1")
basic.showString("y=#2")
basic.showIcon(IconNames.No)
