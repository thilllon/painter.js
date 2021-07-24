# Painter.js

Painter with vanilla javascript

## Demo

[https://thilllon.github.io/painter.js/](https://thilllon.github.io/painter.js/)

## Install

- `index.html`파일을 연다.

## Feature

- 바닐라 자바스크립트
- 4개 파일로 구성: `index.html`, `app.js`, `styles.css`, `reset.css`
- [reset CSS](https://meyerweb.com/eric/tools/css/reset/) 적용
- 이미지 저장 기능
- 두가지 모드
  - 그리기 모드: 브러시 컬러 변경
  - 채우기 모드: 배경 색 변경
- 9가지 색 제공
- css 변수 사용

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

- 전역변수 스코프가 오염되지 않도록 즉시실행함수를 이용하였다.
- `app.js` 는 세 파트로 구성되어있다.

  - 변수 선언
  - 이벤트 핸들러 정의
  - 초기화

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
