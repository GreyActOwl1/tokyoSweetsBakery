// Parallax Element Code
const parallaxEls = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function () {
  parallaxEls.forEach((el) => {
    const cover = el.dataset.cover === "true";
    const offset = Number(el.dataset.offset) || 0;
    const maxHeight = el.parentNode.clientHeight - el.clientHeight;
    const scrollDistance = Number(el.dataset.rate) * window.scrollY;
    if (cover) {
      const boundedDistance = Math.max(scrollDistance, maxHeight); //for negative values get the smaller delta
      el.style.transform = `translateY(${boundedDistance + offset}px)`;
    } else {
      el.style.top = scrollDistance + maxHeight * offset < maxHeight ? `${scrollDistance + maxHeight * offset}px` : `${maxHeight}px`;
    }
  });
});
//Side Display code
const sideScrollingDisplays = document.querySelectorAll(".side-scrolling-display");
sideScrollingDisplays.forEach((display) => {
  const moveLeft = display.children[0];
  const moveRight = display.children[1];
  const contentContainer = display.children[2];
  let contentContainerWidth = window.innerWidth * 0.8;
  const contentChildren = Array.from(contentContainer.children);
  const contentChildWidth = contentChildren[0].clientWidth;
  const numChildren = contentChildren.length;
  let numVisChildren = Math.floor(contentContainerWidth / contentChildWidth);
  let visibleRange = { left: 0, right: Math.min(numVisChildren, contentChildren.length) };
  const potentialI = Array.from(Array(numChildren).keys());

  contentContainer.style.width = `${contentContainerWidth}px`;
  renderVisibleChildren();
  window.addEventListener("resize", () => {
    renderVisibleChildren();
  });
  moveLeft.addEventListener("click", () => moveContents(-1));
  moveRight.addEventListener("click", () => moveContents(+1));
  function renderVisibleChildren() {
    contentContainerWidth = window.innerWidth * 0.8;
    numVisChildren = Math.floor(contentContainerWidth / (contentChildWidth + 32)) || 1;
    visibleRange = { left: 0, right: numVisChildren };
    contentChildren.forEach((el, i) => {
      if (el.classList.contains("hide-content")) el.classList.remove("hide-content");
      if (i < visibleRange.left || i >= visibleRange.right) {
        el.classList.add("hide-content");
      }
    });
  }
  function moveContents(direction) {
    visibleRange.left = visibleRange.left + direction;
    visibleRange.right = visibleRange.right + direction;
    numVisChildren;
    potentialI;
    let visArr = [];
    for (let i = visibleRange.left; i < visibleRange.right; i++) {
      visArr.push(potentialI[((i % numChildren) + numChildren) % numChildren]);
    }
    contentChildren.forEach((el, i) => {
      if (el.classList.contains("hide-content")) el.classList.remove("hide-content");
      el.style.order = -1;
      if (visArr.includes(i)) {
        el.style.order = visArr.indexOf(i);
      } else {
        el.classList.add("hide-content");
      }
    });
  }
});
//Coloring the ratings stars
const ratings = document.querySelectorAll(".ratings-display");
ratings.forEach((rating) => {
  const percent = (Number(rating.dataset.rating) / 5) * 100;
  rating.style.background = `linear-gradient(0.25turn, #e8b430 0 ${percent}%, rgba(0, 0, 0, 0.3) ${percent}% 100%)`;
  rating.style["background-clip"] = "text";
});
// Hiding and showing nav searchbar on shop.html
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.2) {
    document.querySelector(".scroll-appear").style.display = "block";
  }
  if (window.scrollY == 0) {
    document.querySelector(".scroll-appear").style.display = "none";
  }
});
