function toggleClassForSvg(svg, name, add) {
  const value = svg.getAttribute('class');
  const list = value ? value.split(' ') : [];
  const foundIndex = list.indexOf(name);
  const exists = foundIndex >= 0;
  const effectiveAdd = add !== undefined ? !exists : add;
  if (exists !== effectiveAdd) {
    if (effectiveAdd) {
      list.push(name);
    } else {
      list.splice(foundIndex, 1);
    }
    svg.setAttribute('class', list.join(' '));
  }
}

export default toggleClassForSvg;
