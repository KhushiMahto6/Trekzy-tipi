// Array to define the categories and the number of images in each
const categories = {
  beach: 20,  // 20 images in the 'landscapes' folder
  wood: 15,      // 15 images in the 'nature' folder
  wildlife: 30,    // 30 images in the 'wildlife' folder
};

// Function to load images from a given category
function loadImages(category) {
  gallery.innerHTML = ""; // Clear the gallery before adding new images
  if (category === "all") {
    // If 'All' category is selected, load images from all categories
    Object.keys(categories).forEach((category) => {
      const count = categories[category];
      for (let i = 1; i <= count; i++) {
        const img = document.createElement("img");
        img.src = `images/${category}/${category}${i}.jpg`;
        img.alt = `${category} Image ${i}`;
        gallery.appendChild(img);
      }
    });
  } else {
    // Load images from the selected category
    const count = categories[category];
    for (let i = 1; i <= count; i++) {
      const img = document.createElement("img");
      img.src = `images/${woods}/${beach}${i}.jpg`;
      img.alt = `${category} Image ${i}`;
      gallery.appendChild(img);
    }
  }
}

// Dynamically load images on category button click
const gallery = document.querySelector(".gallery");
const categoryButtons = document.querySelectorAll(".category-button");

// Event listeners for category buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    loadImages(category);
  });
});

// Load default category on page load (All images)
loadImages("all");

