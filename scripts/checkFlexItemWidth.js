const checkFlexItemWidth = (container, color) => {
  const divs = document.querySelectorAll(`${container} .wrapper`);
  const windowWidth = window.innerWidth;

  divs.forEach((div) => {
    const subsectionDiv = div.querySelector(".subsection");

    if (div.offsetWidth >= windowWidth) {
      subsectionDiv.style.borderRight = "none";
    } else {
      subsectionDiv.style.borderRight = `1px solid ${color}`;
    }
  });
};