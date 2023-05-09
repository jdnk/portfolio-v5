const toggleDescription = (button, image, description) => {
  const topDiv = document.getElementById(button);
  const nestedDiv = topDiv.querySelector(".subsection .dynamic-subheading .subcol");
  const a = document.getElementById(image);
  const b = document.getElementById(description);

  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    nestedDiv.textContent = "Explain";
  } else {
    a.style.display = "none";
    b.style.display = "block";
    nestedDiv.textContent = "View";
  }
};

const mossBtn = document.getElementById("moss-button");
const hapaBtn = document.getElementById("hapa-button");
const hearhereBtn = document.getElementById("hearhere-button");
const mhBtn = document.getElementById("mh-button");

mossBtn.addEventListener("click", () => toggleDescription("moss-button", "moss-logo", "moss-description"));
hapaBtn.addEventListener("click", () => toggleDescription("hapa-button", "hapa-logo", "hapa-description"));
hearhereBtn.addEventListener("click", () => toggleDescription("hearhere-button", "hearhere-logo", "hearhere-description"));
mhBtn.addEventListener("click", () => toggleDescription("mh-button", "mh-logo", "mh-description"));
