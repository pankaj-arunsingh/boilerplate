import React from "react";
import styled from "styled-components";
const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledDateTime = styled.div`
  max-width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  margin: 30px auto;
  padding: 10px;
`;
const DateTime = () => {
  const current = new Date();
  return (
    <ContainerDiv>
      <StyledDateTime data-testid="dateTime">
        {current.toLocaleString()}
      </StyledDateTime>
    </ContainerDiv>
  );
};
export default DateTime;
