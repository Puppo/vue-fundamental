export default function (element, binding) {
  // if (binding.arg !== 'position') return;
  // Object.keys(binding.modifiers).forEach((key) => {
  //   element.style[key] = '5px';
  // });

  Object.entries(binding.value).forEach(([position, value]) => {
    element.style[position] = value;
  });

  element.style.position = 'absolute';
}
