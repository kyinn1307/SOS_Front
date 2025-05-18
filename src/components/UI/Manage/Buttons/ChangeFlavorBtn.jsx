import styled from "styled-components";

const Container = styled.div`
  width: 75px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  background: #2c2c2c;
  border-radius: 5px;
  font-weight: 500;
`;

const ChangeFlavorBtn = () => {
  return <Container>향료교체</Container>;
};

export default ChangeFlavorBtn;
