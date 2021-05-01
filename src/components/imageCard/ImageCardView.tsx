import React from "react";
import ImageCard from "./ImageCard";

type ImageCardViewProps = {
  hotel: {
    property: {
      title: string;
      previewImage: {
        url: string;
      };
      address: Array<string>;
      rating: {
        ratingValue: number;
        ratingType: string;
      };
    };
    offer: {
      promotion: {
        title: string;
      };
      name: string;
      cancellationOption: {
        cancellationType: string;
      };
      displayPrice: {
        amount: number;
        currency: string;
      };
      savings: {
        amount: number;
        currency: string;
      };
    };
  };
  index: number;
};

const ImageCardView = ({ hotel, index }: ImageCardViewProps) => {
  const discount = hotel?.offer?.savings?.amount;
  return (
    <ImageCard
      key={`${index}-${hotel.property.title}-imagecard`}
      imageUrl={hotel.property.previewImage.url}
      dealType={hotel.offer.promotion.title}
      hotelName={hotel.property.title}
      address={hotel.property.address}
      roomType={hotel.offer.name}
      cancellationType={hotel.offer.cancellationOption.cancellationType}
      totalAmount={hotel.offer.displayPrice.amount}
      currency={hotel.offer.displayPrice.currency}
      ratingType={hotel.property.rating.ratingType}
      ratingValue={hotel.property.rating.ratingValue}
      discountAmount={discount}
    />
  );
};

export default ImageCardView;
