import React from "react";

type PriceDetailsProps = {
  totalAmount: number;
  currency: string;
  discount?: boolean;
  discountAmount?: number;
};

const PriceDetails = ({
  totalAmount,
  discount,
  discountAmount,
  currency,
}: PriceDetailsProps) => {
  return (
    <div className="priceDetails__container">
      <p>{`1 ${night} total ${currency}`}</p>
      <h2>${totalAmount}</h2>
      <h3>{discount ? `save ${discountAmount}` : null}</h3>
    </div>
  );
};

export default PriceDetails;
