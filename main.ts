function Play () {
    game_started = false
    basic.pause(randint(1000, 5000))
    game_started = true
    basic.showIcon(IconNames.Heart)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("1")
            game_started = false
            p1score += 1
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("2")
                game_started = false
                p2score += 1
            }
        }
    }
    basic.pause(3000)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    basic.showString("P1-")
    basic.showNumber(p1score)
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < rounds; index++) {
        Play()
    }
    basic.showString("P1-")
    basic.showNumber(p1score)
    basic.pause(500)
    basic.showString("P2-")
    basic.showNumber(p2score)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("P2-")
    basic.showNumber(p2score)
    basic.pause(500)
})
let game_started = false
let p2score = 0
let p1score = 0
let rounds = 0
// Please select the amount of rounds you would like to play. There will be no breaks, so keep alert!
// You can see the scores at the end of the game. If you wish to see them again, press A (Player 1) or B (Player 2) once they've finished scrolling across the screen.
//         
rounds = 5
for (let index = 0; index < rounds; index++) {
    Play()
}
basic.showString("P1-")
basic.showNumber(p1score)
basic.pause(500)
basic.showString("P2-")
basic.showNumber(p2score)
