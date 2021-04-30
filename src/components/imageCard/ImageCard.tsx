import React from "react";
import HotelNameCard from "../hotelNameCard/HotelNameCard";
import PriceDetails from "../priceDetails/PriceDetails";

type ImageCardProps = {
  imageUrl?: string;
  dealType?: string;
  hotelName: string;
  address: Array<string>;
  roomType: string;
  cancellationType: string;
  totalAmount: number;
  currency: string;
  ratingValue: number;
  ratingType: string;
};

const ImageCard = ({
  imageUrl,
  dealType,
  hotelName,
  address,
  roomType,
  cancellationType,
  totalAmount,
  currency,
  ratingValue,
  ratingType,
}: ImageCardProps) => {
  return (
    <div className="imageCard__container">
      <div className="imageCard__picture">
        <img alt={`${hotelName}-pic`} src={imageUrl} />
        <h4 className="imageCard__dealType-banner">{dealType}</h4>
      </div>
      <HotelNameCard
        hotelName={hotelName}
        address={address}
        roomType={roomType}
        cancellationType={cancellationType}
        ratingValue={ratingValue}
        ratingType={ratingType}
      />
      <PriceDetails totalAmount={totalAmount} currency={currency} />
    </div>
  );
};

export default ImageCard;
