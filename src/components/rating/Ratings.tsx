import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

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
    <Box component="fieldset" mb={3} borderColor="transparent">
      <StyledRating
        name="customized-color"
        // defaultValue={ratingValue}
        value={ratingValue}
        precision={0.5}
        icon={<FiberManualRecordIcon />}
        readOnly
      />
    </Box>
  );
};

const Ratings = ({ ratingType, ratingValue }: RatingPropTypes) => {
  return (
    <div>
      {ratingType === "self" ? (
        <SelfRating ratingValue={ratingValue} />
      ) : (
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="read-only"
            value={ratingValue}
            precision={0.25}
            readOnly
          />
        </Box>
      )}
    </div>
  );
};

export default Ratings;
