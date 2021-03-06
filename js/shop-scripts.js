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
      {
        name: "Whole Grain",
        rating: "3.7",
        price: "$15",
        img: "./img/young-shih-unsplash-whole-grain.jpg",
        description: "Perfect combination of tastety and healthy",
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
      {
        name: "Sourdough",
        rating: "5",
        price: "$10",
        img: "./img/tommaso-urli-unsplash-sourdough.jpg",
        description: "Made with our own special in store yeast. We have been using it for over 20 years.",
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
      {
        name: "Milk Bread",
        rating: "5",
        price: "$7",
        img: "./img/charles-chen-unsplash-milk-bread.jpg",
        description: "Not your supermarket's wonderbread. Soft, slightly sweet, and fluffy without the approximate 500 perservatives.",
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
    pastery: [
      {
        name: "Taiyaki",
        rating: "5",
        price: "$10",
        img: "./img/kelly-visel-unsplash-taiyaki-thumb.jpg",
        description:
          "A traditional Japanese pasterie filled with your choice of filling. There is matcha, custard, and sweet bean flavors available and comes in a pack of 3",
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
      {
        name: "Chocolate Rolls",
        rating: "4.5",
        price: "$15",
        img: "./img/otto-norin-unsplash-chocolate-rolls.jpg",
        description:
          "We could spend a long time talking about how delicous these rolls are but that would be a waste. After all a picture is worth 1000 words.",
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
      {
        name: "Chestnut Cupcake",
        rating: "4.5",
        price: "$5",
        img: "./img/jr-r-unsplash-cupcake.jpg",
        description:
          "Love Ferrero Rocher? You'll love this cupcake. In fact you might love a dozen of them right now. If only we had perfected telportation. Order now and get them ASAP",
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
      {
        name: "Macarons",
        rating: "4.2",
        price: "$15",
        img: "./img/heather-barnes-unsplash-macarons.jpg",
        description: "You know exactly what you are getting when you clicked on this image. Enjoy a special assortment of our flavors.",
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
    seasonal: [
      {
        name: "Berry Tart",
        rating: "5",
        price: "$7",
        img: "./img/slashio-photography-unsplash-tart-thumb.jpg",
        description: "Our special sakura inspired tart. Full of berry goodness.",
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
      {
        name: "Blue Berry Cheese Cake",
        rating: "4.5",
        price: "$25",
        img: "./img/didi-miam-unsplash-seasonal-blueberry-cheesecake.jpg",
        description: "This simple classic is simply delicious.",
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
      {
        name: "Carmalized Walnut Cupcake",
        rating: "4",
        price: "$7",
        img: "./img/lore-schodts-unsplash-seasonal-cupcake.jpg",
        description: "Vanilla based cupcake with the delicious crunchy topping of carmalized walnuts.",
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
      {
        name: "Chocolate Pillows",
        rating: "4.2",
        price: "$15",
        img: "./img/chris-hardy-unsplash-seasonal-chocolate-pillows.jpg",
        description: "These chocolate pillows will have you thinking that you are dreaming.",
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
  },
};
const pillLinks = document.querySelectorAll(".pill-link");
const selectionContainer = document.getElementById("current-selection");
const pillsContent = {
  bread: document.getElementById("pills-bread"),
  pastery: document.getElementById("pills-pastery"),
  seasonal: document.getElementById("pills-seasonal"),
};
const modalBuyIds = {
  img: document.getElementById("modal-buy-image"),
  name: document.getElementById("modal-buy-name"),
  rating: document.getElementById("modal-buy-rating"),
  price: document.getElementById("modal-buy-price"),
  description: document.getElementById("modal-buy-description"),
  reviews: document.getElementById("modal-buy-reviews"),
};

pillLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    selectionContainer.innerHTML = "";
    let currentCat = e.originalTarget.dataset.cat;

    //Append description to left bar
    let catDescription = document.createElement("div");
    catDescription.innerHTML = `<h3>${data.categories[currentCat].title}</h3><p>${data.categories[currentCat].description}</p>`;
    selectionContainer.appendChild(catDescription);
    //append products
    generateProductCards(data.products[currentCat], pillsContent[currentCat]);
  });
});

//Coloring the ratings stars
function colorStars() {
  const ratings = document.querySelectorAll(".ratings-display");
  ratings.forEach((rating) => {
    const percent = (Number(rating.dataset.rating) / 5) * 100;
    rating.style.background = `linear-gradient(0.25turn, #e8b430 0 ${percent}%, rgba(0, 0, 0, 0.3) ${percent}% 100%)`;
    rating.style["background-clip"] = "text";
  });
}
// Hiding and showing nav searchbar on shop.html
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.2) {
    document.querySelector(".scroll-appear").style.display = "flex";
  }
  if (window.scrollY == 0) {
    document.querySelector(".scroll-appear").style.display = "none";
  }
});
colorStars();
//generate product cards
function generateProductCards(productArr, catDiv) {
  const fragment = new DocumentFragment();
  productArr.forEach((product) => {
    let productCard = document.createElement("a");
    productCard.setAttribute("data-toggle", "modal");
    productCard.setAttribute("data-target", "#buyNow");
    productCard.innerHTML = `<div class="media product-information">
                                <img src=${product.img} class="mr-3" alt=${product.name}>
                                <div class="media-body">
                                    <h5 class="mt-0">${product.name}</h5>
                                    <p><span class="ratings-display" data-rating=${product.rating}><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></p>
                                    <p>${product.price}</p> 
                                </div>
                            </div>`;
    productCard.addEventListener("click", () => setModal(product));
    fragment.appendChild(productCard);
  });
  catDiv.innerHTML = "";
  catDiv.appendChild(fragment);
  colorStars();

  function setModal(product) {
    modalBuyIds.img.src = product.img;
    modalBuyIds.img.alt = product.name;
    modalBuyIds.name.innerText = product.name;
    modalBuyIds.price.innerText = product.price;
    modalBuyIds.description.innerText = product.description;
    modalBuyIds.rating.setAttribute("data-rating", product.rating);
    modalBuyIds.reviews.innerHTML = "";
    const reviewFragment = new DocumentFragment();
    product.reviews.forEach((review) => {
      const reviewDiv = document.createElement("div");
      reviewDiv.classList.add("media");
      reviewDiv.innerHTML = ` <img src=${review.avatar} class="align-self-center mr-3 avatar-image " alt="GAN-generated-image">
                            <div >
                                <h6>${review.user}</h6>
                                <p>${review.date}</p>
                                <p><span class="ratings-display" data-rating=${review.rating} id="modal-buy-rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></p> 
                            </div>
                            <div class="media-body ">
                                <p>${review.review}</p>
                            </div>`;
      reviewFragment.appendChild(reviewDiv);
    });
    modalBuyIds.reviews.appendChild(reviewFragment);
    colorStars();
  }
}
//on load functions
generateProductCards(data.products["bread"], pillsContent["bread"]);
