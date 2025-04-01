import styled from "styled-components";
import ErrorModal from "../../../assets/modal/ErrorModal";
import CompleteModal from "../../../assets/modal/CompleteModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Modal = ({ isDone }) => {
  return <Container>{isDone ? <CompleteModal /> : <ErrorModal />}</Container>;
};

export default Modal;
