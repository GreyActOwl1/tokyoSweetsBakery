import { Container, Row, Col, Media } from "reactstrap";

const FeaturedProductDisplay = () => {
  return (
    <div
      className="my-5 parallax-container featured-display"   
    >
      <Media
        className="p-3 parallax-static media product-rating"
        style={{
          maxWidth: "60%",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }}
      >
        <img
          className="mr-3 mw-50"
          src="https://github.com/GreyActOwl1/tokyoSweetsBakery/blob/colors/img/slashio-photography-unsplash-tart-thumb.jpg?raw=true"
          alt="berry tart product"
          style={{ maxWidth: "25%" }}
        />
        <Media className="ml-3 py-3" body>
          <h5 className="mt-0">Berry Tart</h5>
          What better way to celebrate the season than one of our very berry
          best tarts. Bite into this delicious display but don't let anyone see
          you. They will be jealous.
          <p className="text-warning">
            <i className="fa fa-star"></i>
          </p>
        </Media>
      </Media>
    </div>
  );
};

export default FeaturedProductDisplay;
