import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin: 0;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin: 0.5rem 0 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.gray[600]};
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
`;

export const VisitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary[600]};
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: ${props => props.theme.shadows.sm};
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    background: white;
    box-shadow: ${props => props.theme.shadows.md};
    transform: scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${props => props.$isFavorite ? props.theme.colors.yellow[500] : props.theme.colors.gray[400]};
    fill: ${props => props.$isFavorite ? props.theme.colors.yellow[500] : 'none'};
    transition: all ${props => props.theme.transitions.default};

    &:hover {
      color: ${props => props.theme.colors.yellow[500]};
    }
  }
`;

