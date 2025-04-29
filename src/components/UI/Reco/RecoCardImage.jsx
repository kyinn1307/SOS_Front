import styled from "styled-components";
import { recoCardImageMap } from "../../../constants/recoCardImageMap";

const Image = styled.img`
  width: 286px;
  height: 270px;
  object-fit: cover;
  background: #e3e3e3;
  border-radius: 10px;
`;

const RecoCardImage = ({ title }) => {
  const src = recoCardImageMap[title];

  return <Image src={src} alt={title} />;
};

export default RecoCardImage;
