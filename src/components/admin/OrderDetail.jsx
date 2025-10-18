import React from "react";

const OrderDetail = ({ detail }) => {
  console.log(detail);

  return (
    <div className="absolute inset-0 w-full h-full bg-bg-2  border border-strok">
      {detail.map((item, index) => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};

export default OrderDetail;
