import styled from "styled-components";

export const StyledMain = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 48rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;