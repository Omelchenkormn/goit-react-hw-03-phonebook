import styled from '@emotion/styled';

export const Forms = styled.form`
  width: 250px;
  border: 1px solid #d1cfcf;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 25px;
  border: 1px solid white;
  border-radius: 10%;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
  margin-bottom: 10px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

export const Input = styled.input`
  width: 130px;
  margin-top: 5px;
`;
