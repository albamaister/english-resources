import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.gray[50]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
  margin-top: 4rem;
  padding: 3rem 1rem;
  text-align: center;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

export const LogoText = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  p {
    font-size: 0.875rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Description = styled.p`
  max-width: 32rem;
  margin: 1rem auto 2rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  line-height: 1.6;
`;

export const MadeWithLove = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[500]};

  svg {
    color: ${({ theme }) => theme.colors.red[500]};
    fill: ${({ theme }) => theme.colors.red[500]};
  }
`;

export const Copyright = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-top: 1rem;

  a {
    color: inherit;
    text-decoration: underline;
  }
`;