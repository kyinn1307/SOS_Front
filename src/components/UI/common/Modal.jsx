import styled from "styled-components";
import ErrorModal from "../../../assets/modal/ErrorModal";
import CompleteModal from "../../../assets/modal/CompleteModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Modal = ({ isDone, onClose }) => {
  return (
    <Container>
      {isDone ? <CompleteModal /> : <ErrorModal onClose={onClose} />}
    </Container>
  );
};

export default Modal;
