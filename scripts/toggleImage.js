const toggleImage = (wrapper, image, imageDiv, color) => {
  const topDiv = document.getElementById(wrapper);
  const subsectionDiv = topDiv.querySelector(".subsection");
  const nestedDiv = topDiv.querySelector(".subsection .dynamic-subheading .subcol");
  const a = document.getElementById(image);
  const b = document.getElementById(imageDiv);
  const windowWidth = window.innerWidth;

  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";

    if (topDiv.offsetWidth >= windowWidth) {
      subsectionDiv.style.borderRight = "none";
    } else {
      subsectionDiv.style.borderRight = `1px solid ${color}`;
    }

    nestedDiv.textContent = "Expand";
  } else {
    a.style.display = "none";
    b.style.display = "block";
    subsectionDiv.style.borderRight = "none";
    nestedDiv.textContent = "Minimize";
    a.classList.remove("load");
  }
};