# Painter.js

Painter with vanilla javascript

## Demo

[https://thilllon.github.io/painter.js/](https://thilllon.github.io/painter.js/)

## Install

- Open `index.html`

## Feature

- Vanilla javascript
- 4 files: `index.html`, `app.js`, `styles.css`, `reset.css`
- Applying [reset CSS](https://meyerweb.com/eric/tools/css/reset/)
- Image saving function
- 2 modes: paint mode(changing brush color) / fill mode(changing background color)
- 9 palette colors
- Using css variables

```css
/* ****************************** */
/* example code */
/* ****************************** */
:root {
  /* apply globally */
  --my-variable: 1rem 2rem 1rem blue;
}

div {
  /* apply for all div */
  --my-color: gainsboro;
}

.my-div {
  box-shadow: var(--my-variable);
  background-color: var(--my-color);
}
```

- Using immediate execution function to prevent global scope corruption
- `app.js` is composed with 3 parts

  - variable declaration
  - event handlers
  - initializer

- [Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API)
  - 2D context
    - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  - Check points
    - How does `Canvas` work?
    - What is the `line` in canvas?
    - What is the `context`?
  - canvas
    - `canvas.width`, `canvas.height` => Determine the actual image file size
    - `canvas.toDataURL()` => Encode to binary and express it as base64
  - context
    - `context.lineWidth`
    - `context.lineTo()`
    - `context.stroke()`
    - `context.beginPath()`
    - `context.moveTo()`
    - `context.endPath()`

## Reference

- [Painter with vanilla javascript](https://nomadcoders.co/javascript-for-beginners-2/lectures/1710)
