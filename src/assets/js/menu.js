export function menu() {
  const headerToggle = document.getElementById("headerToggle");
  const headerNav = document.querySelector(".header__nav");

    if(headerToggle) {
      headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");

        /** 삼항연산자 */
        headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aria-expanded" ,"false")
        : headerToggle.setAttribute("aria-expanded", "true");

        /** if문 */
        // if(headerToggle.getAttribute("aria-expanded") === "true") {
        //   headerToggle.setAttribute("aria-expanded" ,"false")
        // } else {
        //   headerToggle.setAttribute("aria-expanded", "true"); 
    // }
      });
    }
  }