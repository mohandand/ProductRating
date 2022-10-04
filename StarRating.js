import React from 'react';

export default function StarRating() {
  return (
    <div className="starRating">
      {[
        ...Array(5).map((star) => {
          return <span className="star">@#9733</span>;
        }),
      ]}
    </div>
  );
}
