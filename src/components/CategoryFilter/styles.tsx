import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 1rem 2rem;
  position: sticky;
  top: 4rem;
  z-index: 40;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Button = styled.button<{ $selected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.primary[600] : theme.colors.gray[100]};
  color: ${({ $selected, theme }) =>
    $selected ? 'white' : theme.colors.gray[700]};
  transition: 0.2s all ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;