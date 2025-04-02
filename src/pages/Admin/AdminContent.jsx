import styled from "styled-components";
import SosLetterLogo from "../../assets/main/sos_letter_logo";
import { StyledBtn } from "../../components/UI/common/StyledBtn";

import DeviceList from "../../components/UI/Admin/DeviceList";

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const Title = styled.div`
  position: relative;
  width: 400px;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #2c2c2c;
  margin-top: 16px;
`;

const AddBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndicateText = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #999999;
  margin-top: 13px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 49px;
`;
const AdminContent = () => {
  return (
    <ContentWrapper>
      <Title>관리할 기기를 선택해 주세요.</Title>
      <DeviceList />
      <BtnContainer>
        <AddBtnContainer>
          <StyledBtn variant="white" isAdmin={true}>
            기기 추가하기 {">"}
          </StyledBtn>
          <IndicateText>등록되지 않은 기기를 추가해보세요!</IndicateText>
        </AddBtnContainer>
        <StyledBtn variant="black" isAdmin={true}>
          기기 관리하기 {">"}
        </StyledBtn>
      </BtnContainer>
    </ContentWrapper>
  );
};

export default AdminContent;
