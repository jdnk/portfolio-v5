const toggleDescription = (wrapper, image, description, color) => {
  const topDiv = document.getElementById(wrapper);
  const subsectionDiv = topDiv.querySelector(".subsection");
  const nestedDiv = topDiv.querySelector(".subsection .dynamic-subheading .subcol");
  const a = document.getElementById(image);
  const b = document.getElementById(description);
  const windowWidth = window.innerWidth;

  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";

    if (topDiv.offsetWidth >= windowWidth) {
      subsectionDiv.style.borderRight = "none";
    } else {
      subsectionDiv.style.borderRight = `1px solid ${color}`;
    }

    nestedDiv.textContent = "Explain";
  } else {
    a.style.display = "none";
    b.style.display = "block";
    subsectionDiv.style.borderRight = "none";
    nestedDiv.textContent = "View";
    a.classList.remove("load");
  }
};