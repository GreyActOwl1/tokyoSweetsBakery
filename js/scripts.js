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
