import React from "react";

const OrderDetail = ({ detail }) => {

  return (
    <div className="absolute inset-0 w-full h-full bg-bg-2  border border-strok">
      {detail.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};

export default OrderDetail;
