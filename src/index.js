import sketch from "./sketch.js";

export default (() => {
  let W = window,
    D = document;
  const canvas = D.body.appendChild(D.createElement("canvas"));
  const context = canvas.getContext("2d");

  let render;
  let width, height, pixelRatio;

  const draw = () => {
    context.save();
    context.scale(pixelRatio, pixelRatio);
    render(context, width, height);
    context.restore();
  };

  const resize = () => {
    width = W.innerWidth;
    height = W.innerHeight;
    pixelRatio = W.devicePixelRatio;
    canvas.width = ~~(width * pixelRatio);
    canvas.height = ~~(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    if (render) draw();
  };

  W.addEventListener("resize", resize);
  resize();
  render = sketch(hash);
  draw();
})();
