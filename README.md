the is a solution to scrimba solo project - The Unit Converter
you can follow the link https://www.figma.com/file/AdqUVRQCZGP1zRcEvzmJTm/Unit-Conversion?node-id=0%3A13 to work on the project

.avatar::before,
.avatar::after {
  --scale: 0;
  --arrow-size: 10px;
  --tooltip-color: #333;

  position: absolute;
  top: -.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
  transition: 150ms transform;
  transform-origin: bottom center;
}

.avatar::before {
  --translate-y: calc(-100% - var(--arrow-size));

  content: attr(data-tooltip);
  color: white;
  padding: .5rem;
  border-radius: .3rem;
  text-align: center;
  width: max-content;
  max-width: 100%;
  background: var(--tooltip-color);
}

.avatar:hover::before,
.avatar:hover::after {
  --scale: 1;
}

.avatar::after {
  --translate-y: calc(-1 * var(--arrow-size));

  content: '';
  border: var(--arrow-size) solid transparent;
  border-top-color: var(--tooltip-color);
  transform-origin: top center;
}
