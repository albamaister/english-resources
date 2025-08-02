import { Search } from 'lucide-react';
import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 1.5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: ${props => props.theme.colors.primary[600]};
  border-radius: 0.5rem;
`;

export const LogoText = styled.div`
  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.gray[900]};
    margin: 0;
  }

  p {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.gray[500]};
    margin: 0;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 32rem;
  margin: 0 2rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.gray[400]};
  width: 1.25rem;
  height: 1.25rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid ${props => props.theme.colors.gray[300]};
  border-radius: 0.5rem;
  transition: all ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    ring: 2px solid ${props => props.theme.colors.primary[500]};
    border-color: transparent;
  }
`;
