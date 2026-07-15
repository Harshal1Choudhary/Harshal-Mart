import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.btn};
  color: #fff;
  padding: 1.3rem 2.6rem;
  border: none;
  border-radius: 999px;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(98, 84, 243, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.helperDark};
    box-shadow: 0 10px 24px rgba(98, 84, 243, 0.35);
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
