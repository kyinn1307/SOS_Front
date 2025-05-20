import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getCartridges } from "../../../api/apis/cartridge";
import CartridgeItem from "./Catridgetem";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 990px;
  height: 540px;
  gap: 10px;
  padding: 0 25px;
  margin-top: 15px;

  background: #fafaf8;
  box-shadow: 0px 0px 10px rgba(151, 214, 221, 0.4);
  border-radius: 10px;
`;

const CatridgeList = ({
  cartridgeList,
  openModalWithFlavor,
  openRefillModalWithFlavor,
  alertedCartridgeIds = [],
}) => {
  return (
    <Container>
      {cartridgeList.map((cartridge) => (
        <CartridgeItem
          key={cartridge.cartridgeId}
          cartridge={cartridge}
          isExternallyAlerted={alertedCartridgeIds.includes(
            cartridge.cartridgeId
          )}
          openModalWithFlavor={openModalWithFlavor}
          openRefillModalWithFlavor={openRefillModalWithFlavor}
        />
      ))}
    </Container>
  );
};

export default CatridgeList;
