const data = {
  categories: {
    bread: {
      title: "Fresh Bread",
      description:
        "Order one of our daily made fresh breads for pick-up or delivery. Or just look at the goodness. You won't be able to resist. And don't worry we can keep a secret",
    },
    pastery: {
      title: "Pasteries",
      description:
        "From plain old chocolate cake to our lovingly made foreign pasteries. Feeling adventurous buy the taiyaki with the the sweet bean filling, or take it closer to home with the custard filling. Or maybe today is the kind of day you want to go with an old favourite.",
    },
    seasonal: {
      title: "Seasonal Items",
      description:
        "Somethings come and go... like the seasons. And these are those things. We don't mean to rush you, we can wait untill next year, but can you?",
    },
  },
  products: {
    bread: [
      {
        id: "b1",
        name: "Rye",
        rating: "4.2",
        price: "$15",
        img: "./img/wesual-click-rye-thumb.jpg",
        description: "This rustic, artisanal, healthy,... forget that it is delicous and freshly made",
        reviews: [
          {
            avatar: "./img/GAN-bob-smith.jpg",
            user: "Bob Smith",
            date: "june 24, 2024",
            rating: "5.0",
            review: "Five out of FIVE. This place is the best bakery I have ever been to... And you can tell by the line",
          },
          {
            avatar: "./img/GAN-jane-doe.jpg",
            user: "Jane Doe",
            date: "june 24, 2024",
            rating: "4.5",
            review: "It was delicious. But the place gets crowded at times.",
          },
        ],
      },
    ],
    pastery: [{}],
    seasonal: [{}],
  },
};
const pillLinks = document.querySelectorAll(".pill-link");
const pillsBread = document.getElementById("pills-bread");
const pillsPastery = document.getElementById("pills-pastery");
const pillsSeasonal = document.getElementById("pills-seasonal");
const selectionContainer = document.getElementById("current-selection");

pillLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    selectionContainer.innerHTML = "";
    let currentCat = e.originalTarget.dataset.cat;

    //generate list of items w/ a trigger for a modal
    //when clicked clear old modal info and generate new

    let catDescription = document.createElement("div");
    catDescription.innerHTML = `<h3>${data.categories[currentCat].title}</h3><p>${data.categories[currentCat].description}</p>`;
    selectionContainer.appendChild(catDescription);
  });
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
