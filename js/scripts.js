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
  let numVisChildren = Math.floor(contentContainerWidth / contentChildWidth);
  let visibleRange = { left: 0, right: Math.min(numVisChildren, contentChildren.length) };

  contentContainer.style.width = `${contentContainerWidth}px`;
  renderVisibleChildren();
  window.addEventListener("resize", () => {
    renderVisibleChildren();
  });

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

  console.log(contentChildren);
});
