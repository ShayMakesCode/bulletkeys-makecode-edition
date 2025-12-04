def on_up_pressed():
    Ranghy.set_velocity(0, -30)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        Bullet
        """), Ranghy, 50, 50)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_down_released():
    Ranghy.set_velocity(0, 0)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_left_pressed():
    Ranghy.set_velocity(-30, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    Ranghy.set_velocity(0, 0)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    Ranghy.set_velocity(0, 0)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    Ranghy.set_velocity(30, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_up_released():
    Ranghy.set_velocity(0, 0)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_down_pressed():
    Ranghy.set_velocity(0, 30)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

projectile: Sprite = None
Ranghy: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
    """))
Ranghy = sprites.create(assets.image("""
    RanghyFront
    """), SpriteKind.player)
statusbar = statusbars.create(20, 4, StatusBarKind.health)
statusbar.attach_to_sprite(Ranghy)
statusbar.set_color(7, 15)
scene.camera_follow_sprite(Ranghy)
controller.move_sprite(Ranghy)