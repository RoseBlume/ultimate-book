---
title: Graphics and Effects
sidebar:
  order: 7
---

## Canvas

The `Canvas` type provides a way to draw 2D graphics using QML. It allows you to create custom visual elements and animations.

### Properties

- `width`: The width of the canvas.
- `height`: The height of the canvas.
- `contextType`: The type of rendering context to use (e.g., "2d", "webgl", "webgl2").
- `renderStrategy`: The rendering strategy to use (e.g., "Immediate", "FrameBuffer").

Example:

```qml
Canvas {
  width: 400
  height: 400
  contextType: "2d"
  renderStrategy: Canvas.Immediate

  onPaint: {
    var ctx = getContext("2d")
    ctx.fillStyle = "red"
    ctx.fillRect(0, 0, width, height)
  }
}
```

## ShaderEffect

The `ShaderEffect` type allows you to apply custom shaders to QML items. It can be used to create various visual effects, such as blurring, color manipulation, and more.

### Properties

- `source`: The source code of the shader.
- `uniforms`: The uniforms to pass to the shader.
- `enabled`: Whether the effect is enabled or not.

Example:

```qml
ShaderEffect {
  source: "qrc:/shaders/blur.frag"
  uniforms: [
    ShaderEffectUniform { name: "radius"; value: 5 },
    ShaderEffectUniform { name: "direction"; value: Qt.vector2d(1, 0) }
  ]
  enabled: true

  Rectangle {
    width: 200
    height: 200
    color: "blue"
  }
}
```

## ParticleSystem

The `ParticleSystem` type allows you to create and control particle systems in QML. It provides a way to simulate and render particles with various properties, such as position, velocity, size, and color.

### Properties

- `source`: The source file of the particle system.
- `running`: Whether the particle system is running or not.
- `emitting`: Whether the particle system is emitting particles or not.
- `paused`: Whether the particle system is paused or not.

Example:

```qml
ParticleSystem {
  source: "qrc:/particles/fire.pex"
  running: true
  emitting: true
  paused: false

  Rectangle {
    width: 200
    height: 200
    color: "red"
  }
}
```

## Particles

The `Particles` type allows you to define the properties and behavior of individual particles in a particle system. It can be used to customize the appearance and movement of particles.

### Properties

- `size`: The size of the particles.
- `color`: The color of the particles.
- `velocity`: The initial velocity of the particles.
- `acceleration`: The acceleration applied to the particles.
- `lifetime`: The lifetime of the particles.

Example:

```qml
Particles {
  size: 10
  color: "yellow"
  velocity: Qt.vector2d(0, -100)
  acceleration: Qt.vector2d(0, 10)
  lifetime: 1000

  Rectangle {
    width: 10
    height: 10
    color: particles.color
  }
}
```

## Sprite

The `Sprite` type allows you to display animated images in QML. It provides a way to load and play sprite sheets, which are a collection of images that represent different frames of an animation.

### Properties

- `source`: The source image or sprite sheet.
- `frameCount`: The number of frames in the sprite sheet.
- `frameWidth`: The width of each frame in the sprite sheet.
- `frameHeight`: The height of each frame in the sprite sheet.
- `frameRate`: The rate at which the frames are played.

Example:

```qml
Sprite {
  source: "qrc:/spritesheet/character.png"
  frameCount: 8
  frameWidth: 64
  frameHeight: 64
  frameRate: 30

  Rectangle {
    width: frameWidth
    height: frameHeight
    color: "green"
  }
}
```

