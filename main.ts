namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Ranghy, 0, 0)
    if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingRight))) {
        projectile.setVelocity(300, 0)
    } else if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingLeft))) {
        projectile.setVelocity(-300, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(Ranghy, characterAnimations.rule(Predicate.FacingLeft))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.setGameOverMessage(false, "MORTEM.")
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(Ranghy, characterAnimations.rule(Predicate.FacingRight))
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    Ranghy.setVelocity(0, 50)
})
let projectile: Sprite = null
let Ranghy: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Ranghy = sprites.create(assets.image`RanghyFront`, SpriteKind.Player)
controller.moveSprite(Ranghy, 150, 0)
Ranghy.setPosition(76, 74)
characterAnimations.setCharacterAnimationsEnabled(Ranghy, true)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Ranghy)
statusbar.setColor(7, 2)
statusbar.max = 100
statusbar.value = 100
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
