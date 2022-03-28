import { v4 as uuidv4 } from "uuid";

const reviews = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator 1",
    productId: 1,
    userId: 1,
    rate: 2,
    userName: "ADMIN",
    userImage: "author-logo.jpg",

    dateTime: "March 23, 2015",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    title: "Terminator 2",
    productId: 2,
    userId: 1,
    rate: 2,
    userName: "ADMIN",
    userImage: "author-logo.jpg",

    dateTime: "March 23, 2015",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    title: "Terminator 3",
    productId: 3,
    userId: 1,
    rate: 2,
    userName: "ADMIN",
    userImage: "author-logo.jpg",

    dateTime: "March 23, 2015",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    title: "Terminator 4",
    productId: 4,
    userId: 1,
    rate: 2,
    userName: "ADMIN",
    userImage: "author-logo.jpg",

    dateTime: "March 23, 2015",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator 5",
    productId: 5,
    userId: 1,
    rate: 2,
    userName: "ADMIN 1",
    userImage: "author-logo.jpg",
    dateTime: "March 23, 2019",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Terminator 6",
    productId: 5,
    userId: 1,
    rate: 4,
    userName: "ADMIN 2",
    userImage: "author-logo.jpg",
    dateTime: "March 23, 2021",
    text: "Lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.",
  },
];

export function getReviews() {
  return reviews;
}

export function getReview(id) {
  return reviews.find((m) => m._id === id);
}

export function getReviewByProductId(id) {
  return reviews.filter((m) => m.productId === id);
}

export function saveReview(review) {
  let reviewInDb = reviews.find((m) => m._id === review._id) || {};
  reviewInDb = { ...review, ...reviewInDb };
  reviewInDb.title = review.name ? review.name : review.title;

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  reviewInDb.dateTime = dateTime;
  //   reviewInDb.genre = genresAPI.genres.find((g) => g._id === review.genreId);
  // reviewInDb.numberInStock = review.numberInStock;
  // reviewInDb.dailyRentalRate = review.dailyRentalRate;

  if (!reviewInDb._id) {
    reviewInDb._id = uuidv4(); //Date.now();
    reviews.push(reviewInDb);
  }

  return reviewInDb;
}

export function deleteReview(id) {
  let reviewInDb = reviews.find((m) => m._id === id);
  reviews.splice(reviews.indexOf(reviewInDb), 1);
  return reviewInDb;
}
