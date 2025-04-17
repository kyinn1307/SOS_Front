import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDevice } from "../../../api/apis/device";
import AlertIcon from "../../../assets/admin/AlertIcon";
import StyledBtn from "../common/StyledBtn";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 442px;
  height: 217px;

  background: #fafaf8;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  margin-top: 29px;
`;

const Text = styled.div`
  position: relative;

  font-size: 18px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.011em;

  color: #000000;
  margin-top: 13px;
`;

const SubText = styled.div`
  position: relative;
  margin-top: 2px;
  font-size: 12px;
  line-height: 26px;
  text-align: center;
  color: #afafaf;
`;

const BtnContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  gap: 15px;
`;

const DeviceDeleteModal = ({ deviceId, onClose }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteDevice,
    onSuccess: () => {
      queryClient.invalidateQueries(["devices"]);
      onClose();
    },
    onError: (error) => {
      alert("기기 삭제에 실패했습니다.");
      console.error(error);
    },
  });

  const handleDelete = () => {
    mutate(deviceId);
  };
  return (
    <Container>
      <IconWrapper>
        <AlertIcon />
      </IconWrapper>
      <Text>기기를 삭제하시겠습니까?</Text>
      <SubText>한번 삭제된 기기는 복구할 수 없습니다.</SubText>
      <BtnContainer>
        <StyledBtn
          variant="white"
          isModal={true}
          onClick={onClose}
          isDeleteModal={true}
        >
          아니오
        </StyledBtn>
        <StyledBtn
          variant="black"
          isModal={true}
          onClick={handleDelete}
          isDeleteModal={true}
        >
          예
        </StyledBtn>
      </BtnContainer>
    </Container>
  );
};

export default DeviceDeleteModal;
