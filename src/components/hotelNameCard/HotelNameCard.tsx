import React from "react";
import Ratings from "../../components/rating/Ratings";

type HoteNameCardProps = {
  hotelName?: string;
  address?: Array<string>;
  roomType?: string;
  cancellationType: string;
  ratingValue?: number;
  ratingType?: string;
};

const HotelNameCard = ({
  hotelName,
  address,
  roomType,
  cancellationType,
  ratingValue,
  ratingType,
}: HoteNameCardProps) => {
  return (
    <div className="hotelNameCard__container">
      <div className="hotelNameCard__name-rating-block">
        <h3 className="hotelNameCard__title ">{hotelName}</h3>
        <Ratings ratingValue={ratingValue} ratingType={ratingType} />
      </div>

      <p>{address}</p>
      <p>{roomType}</p>
      <p>{cancellationType}</p>
    </div>
  );
};

export default HotelNameCard;
