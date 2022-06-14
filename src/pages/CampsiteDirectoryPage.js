import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

const CampsitesDirectoryPage = () => {
  const selectedCampsite = selectRandomCampsite();
  return <Container></Container>;
};

export default CampsitesDirectoryPage;
