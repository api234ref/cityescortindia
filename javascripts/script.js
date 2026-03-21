// Targetting all Required Elemenet

// All Images
const Images = [
  "./Assets/Images/09.jpg",
  "./Assets/Images/2.jpg",
  "./Assets/Images/delhi-escorts-3.jpg",
  "./Assets/Images/delhi-escorts-5.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.getElementById("heroImage");
  const previousImageControl = document.getElementById("prev");
  const nextImageControl = document.getElementById("next");

  if (!heroImage) {
    console.log("Image element not found!");
    return;
  }
  let currentIndex = 0;
  heroImage.src = Images[currentIndex];

  setInterval(() => {
      currentIndex++;
      if(currentIndex >= Images.length){
          currentIndex = 0;
      };
      heroImage.src = Images[currentIndex];
  }, 2000)

  // Function to control previous and next image
  function handlePreviousAndNextClickControl(currentIndex, Images) {
    // Next button
    nextImageControl.addEventListener("click", () => {
      currentIndex++;

      // Reset to first image if at end
      if (currentIndex > Images.length - 1) {
        currentIndex = 0;
      }

      heroImage.src = Images[currentIndex];
    //   console.log("Current index:", currentIndex);
    });

    // Previous button
    previousImageControl.addEventListener("click", () => {
      currentIndex--;

      // Go to last image if at beginning
      if (currentIndex < 0) {
        currentIndex = Images.length - 1;
      }

      heroImage.src = Images[currentIndex];
    //   console.log("Current index:", currentIndex);
    });
  }
  handlePreviousAndNextClickControl(currentIndex, Images);
});
