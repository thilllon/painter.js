(() => {
  // MDN: canvas
  // https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
  let _painting = false;
  let _filling = false;
  let _color = '#2c2c2c';
  let _thickness = 2.5;

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const initialize = () => {
    if (canvas) {
      // canvas pixel manipulating size: the actual image file size
      const CANVAS_SIZE = 700;
      // order of setting context is important.
      // 뒤에서 값을 변경해도 앞의 값이 변경되지 않음.
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
      ctx.strokeStyle = _color;
      ctx.fillStyle = '#ffffff';

      // set background color by default
      // Turn off if you want to get transparent background
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.lineWidth = _thickness;
      canvas.addEventListener('mouseenter', onMouseEnter);
      canvas.addEventListener('mouseleave', onMouseLeave);
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mousedown', onMouseDown);
      canvas.addEventListener('mouseup', onMouseUp);
      canvas.addEventListener('click', onClickCanvas);
      canvas.addEventListener('contextmenu', onClickContextMenu);
    }
    Array.from(document.querySelectorAll('.controls__color')).forEach((col) =>
      col.addEventListener('click', onChangeColor)
    );
    const thick = document.getElementById('thickness');
    if (thick) {
      thick.setAttribute('min', 0.1);
      thick.setAttribute('max', 9.0);
      thick.setAttribute('value', 2.5);
      thick.setAttribute('step', 0.1);
      thick.addEventListener('change', onChangeThickness);
    }
    const modeButton = document.getElementById('mode');
    if (modeButton) {
      modeButton.addEventListener('click', onClickMode);
    }
    const saveButton = document.getElementById('save');
    if (saveButton) {
      saveButton.addEventListener('click', onClickSave);
    }
  };

  const startPainting = () => {
    _painting = true;
  };

  const stopPainting = () => {
    _painting = false;
  };

  const onClickContextMenu = (ev) => {
    ev.preventDefault();
  };

  const onClickCanvas = (ev) => {
    if (_filling) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const onMouseEnter = (ev) => {
    // startPainting();
  };

  const onMouseLeave = (ev) => {
    stopPainting();
  };

  const onMouseDown = (ev) => {
    startPainting();
  };

  const onMouseUp = (ev) => {
    stopPainting();
  };

  const onChangeColor = (ev) => {
    _color = window.getComputedStyle(ev.currentTarget).backgroundColor;
    ctx.strokeStyle = _color;
    ctx.fillStyle = _color;
  };

  const onClickMode = (ev) => {
    ev.currentTarget.innerText = _filling ? 'fill background' : 'paint';
    _filling = !_filling;
  };

  const onClickSave = (ev) => {
    const image = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = image;
    link.download = new Date().toISOString().substr(0, 19).replaceAll(':', '').replace('T', '_');
    link.click();
  };

  const onChangeThickness = (ev) => {
    try {
      _thickness = Number(ev.currentTarget.value);
      ctx.lineWidth = _thickness;
    } catch (err) {
      console.error(err);
    }
  };

  const onMouseMove = (ev) => {
    // meaning of line in Canvas is a set of very very small pieces of lines
    const { offsetX: x, offsetY: y } = ev;
    if (_painting) {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath(); // To set starting point to draw. Withtout this code, there is no way to tell that the current cursor is the starting point of the line.
      ctx.moveTo(x, y);
    }
  };

  initialize();
})();
