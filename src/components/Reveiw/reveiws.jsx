import Rate from "../rate/rate";
import styles from "./Review.module.scss";
const ReveiwsBox = ({ reviews, item }) => {
  return (
    <div>
      <h4 className={styles["title-lg"]}>
        {reviews.length} REVIEW FOR {item.title}
      </h4>
      {reviews.map((review) => {
        return (
          <div key={review._id}>
            <div className={styles["review-comment"]}>
              <div className={styles["avatar"]}>
                <img
                  src={
                    review.userImage
                      ? "/images/userImage/" + review.userImage
                      : "/images/userImage/author-logo.jpg"
                  }
                  alt=""
                />
              </div>
              <div className={styles["text"]}>
                <div className="rating-block mb--15">
                  <Rate rate={review.rate} noText={true} />
                </div>
                <h6 className="author">
                  {review.userName} –{" "}
                  <span className="font-weight-400">{review.dateTime}</span>
                </h6>
                <p>{review.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReveiwsBox;
