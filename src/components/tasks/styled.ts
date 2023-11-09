import styled from "styled-components";
export const MainDiv = styled.div`
  margin: 10px;
  border-radius: 5px;
  padding: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
`;

export const StyledEdit = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const ToDo = styled.h3`
  display: inline;
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const FunctionButton = styled.button`
  width: 20px;
  border: 1px solid #fff;
  background-color: transparent;

  align-items: center;
`;

export const Drawer = styled.div`
  display: block;
`;
export const TaskHeadings = styled.p`
  display: inline-flex;
  font-weight: bold;
`;

export const Details = styled.p`
  margin-left: 10px;
  display: inline-flex;
`;

export const DeleteButton = styled.button`
  width: 250px;
  background-color: #ffb09c;
  font-weight: bold;
  font-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 0 !important;
};
`;
