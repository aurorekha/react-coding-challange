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
      <p>
        <strong>1</strong>
        {` night total (${currency})`}
      </p>
      <h1>${totalAmount}</h1>
      {discountAmount !== undefined && <h3>{`Save $${discountAmount}~`}</h3>}
    </div>
  );
};

export default PriceDetails;
