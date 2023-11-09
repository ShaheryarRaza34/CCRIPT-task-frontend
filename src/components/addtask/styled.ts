import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  position: absolute;
  height: 30px;
  width: 30px;
  right: 10px;
  top: 10px;

  border: none;
  cursor: pointer;
`;
