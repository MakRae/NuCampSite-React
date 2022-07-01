import { Row, Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";

const PartnerList = () => {
  const Partners = useSelector(selectAllPartners);

  return (
    <Col className="mt-4">
      <Row>
        {Partners.map((partner) => {
          return (
            <div className="d-flex mb-5" key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Row>
    </Col>
  );
};

export default PartnerList;
