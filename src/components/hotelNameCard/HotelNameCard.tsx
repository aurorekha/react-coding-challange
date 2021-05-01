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
  const cancellationTypeName = cancellationType
    .split("_")
    .join(" ")
    .toLowerCase();
  return (
    <div className="hotelNameCard__container">
      <div className="hotelNameCard__name-rating-block">
        <h3 className="hotelNameCard__title ">{hotelName}</h3>
        <Ratings ratingValue={ratingValue} ratingType={ratingType} />
      </div>
      <div className="hotelNameCard__address-room-block">
        <p className="hotelNameCard__address">{address}</p>
        <p className="hotelNameCard__roomType">{roomType}</p>
      </div>
      <p className="hotelNameCard__cancellationType">{cancellationTypeName}</p>
    </div>
  );
};

export default HotelNameCard;
