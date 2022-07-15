import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
  border: 1px solid white;
  border-radius: 10%;
  &:hover {
    background-color: grey;
  }
`;
