const toggleDescription = (button, image, description) => {
  const topDiv = document.getElementById(button);
  const subsectionDiv = topDiv.querySelector(".subsection");
  const nestedDiv = topDiv.querySelector(".subsection .dynamic-subheading .subcol");
  const a = document.getElementById(image);
  const b = document.getElementById(description);

  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    subsectionDiv.style.borderRight = "1px solid black";
    nestedDiv.textContent = "Explain";
  } else {
    a.style.display = "none";
    b.style.display = "block";
    subsectionDiv.style.borderRight = "none";
    nestedDiv.textContent = "View";
  }
};