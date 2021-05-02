import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import classes from "*.module.css";

type RatingPropTypes = {
  ratingType?: string;
  ratingValue?: number;
};

type SelfRatingProps = {
  ratingValue?: number;
};

const StyledRating = withStyles({
  iconFilled: {
    color: "#ffb400",
  },
})(Rating);

const SelfRating = ({ ratingValue }: SelfRatingProps) => {
  return (
    <div className="starRating-block">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledRating
          name="customized-color"
          value={ratingValue}
          precision={0.5}
          icon={<FiberManualRecordIcon />}
          readOnly
        />
      </Box>
    </div>
  );
};

const Ratings = ({ ratingType, ratingValue }: RatingPropTypes) => {
  return (
    <div>
      {ratingType === "self" ? (
        <div className="self-rating">
          <SelfRating ratingValue={ratingValue} />
        </div>
      ) : (
        <div className="star-rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="read-only"
              value={ratingValue}
              precision={0.25}
              readOnly
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Ratings;
