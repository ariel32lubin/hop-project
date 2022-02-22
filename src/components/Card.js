import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  id,
  title,
  city,
  rate,
  desc,
  schedule,
  startDate,
  staffCard,
  provider,
  client,
}) {
  const navigate = useNavigate();

  const staffGig = async () => {
    // TODO adds user as the provider for the selected gig
    await navigate("/MyGigs");
  };
  return (
    <div>
      {title}
      {city}
      {rate}
      {desc}
      {schedule}
      {startDate}
      {!staffCard && provider}
      {!staffCard && client}
      {staffCard && <button onClick={staffGig}>Staff Gig</button>}
    </div>
  );
}

export default Card;

// <div>
//   <div className="w-60">
//     <div className="card position-relative mt-4 m-auto px-3">
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <div className="position-absolute top-0 end-0 m-2">${rate}</div>
//         <div className="star-rating">
//           {[...Array(blackStars)].map((star) => {
//             return <span className="star">&#9733;</span>;
//           })}
//           {[...Array(whiteStars)].map((star) => {
//             return <span className="star">&#9734;</span>;
//           })}
//         </div>
//         <p className="card-text">{productDescription}</p>
//       </div>
//     </div>{" "}
//   </div>
// </div>;
