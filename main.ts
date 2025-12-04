controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(Ranghy, characterAnimations.rule(Predicate.FacingUp))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Ranghy, 0, 0)
    if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingUp))) {
        projectile.setVelocity(0, -300)
    } else if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingDown))) {
        projectile.setVelocity(0, 300)
    } else if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingLeft))) {
        projectile.setVelocity(-300, 0)
    } else if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingRight))) {
        projectile.setVelocity(300, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(Ranghy, characterAnimations.rule(Predicate.FacingLeft))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.setCharacterState(Ranghy, characterAnimations.rule(Predicate.FacingRight))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown))) {
        characterAnimations.loopFrames(
        Ranghy,
        assets.animation`RanghyMoveDown`,
        100,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown)
        )
    } else if (characterAnimations.matchesRule(Ranghy, characterAnimations.rule(Predicate.FacingDown, Predicate.NotMoving))) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Ranghy)
    }
})
let projectile: Sprite = null
let Ranghy: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Ranghy = sprites.create(assets.image`RanghyFront`, SpriteKind.Player)
characterAnimations.setCharacterAnimationsEnabled(Ranghy, true)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Ranghy)
statusbar.setColor(7, 15)
scene.cameraFollowSprite(Ranghy)
controller.moveSprite(Ranghy, 100, 100)
