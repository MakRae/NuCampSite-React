import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";

// const DisplayList = () => {
//   const items = (state) => [
//     selectFeaturedCampsite(state),
//     selectFeaturedPromotion(state),
//     selectFeaturedPartner(state),
//   ];

//   console.log("display items:", items);

//   return (
//     <Row>
//       {items.map((item, idx) => {
//         return (
//           <Col md className="m-1" key={idx}>
//             <DisplayCard item={item} />
//           </Col>
//         );
//       })}
//     </Row>
//   );
// };

const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeaturedPromotion(),
    selectFeaturedPartner(),
  ];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
