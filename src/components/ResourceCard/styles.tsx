import styled from 'styled-components';

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Listening': { bg: '#dbeafe', text: '#1e40af' },
  'Grammar': { bg: '#dcfce7', text: '#166534' },
  'AI Tools': { bg: '#f3e8ff', text: '#6b21a8' },
  'Vocabulary': { bg: '#fef3c7', text: '#92400e' },
  'Speaking': { bg: '#fee2e2', text: '#991b1b' },
  'Reading': { bg: '#e0e7ff', text: '#3730a3' },
  'Writing': { bg: '#ccfbf1', text: '#115e59' },
  'Pronunciation': { bg: '#fce7f3', text: '#9d174d' },
  'General': { bg: '#fed7aa', text: '#9a3412' }
};

export const Card = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: ${props => props.theme.shadows.sm};
  border: 1px solid ${props => props.theme.colors.gray[200]};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.default};
  transform: translateY(0);
  position: relative;

  &:hover {
    box-shadow: ${props => props.theme.shadows.lg};
    transform: translateY(-0.25rem);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.gray[900]};
  line-height: 1.4;
  margin: 0;
  transition: color ${props => props.theme.transitions.default};

  ${Card}:hover & {
    color: ${props => props.theme.colors.primary[600]};
  }
`;

export const CategoryBadge = styled.span<{ $category: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  margin-left: 0.5rem;
  background: ${props => categoryColors[props.$category]?.bg || props.theme.colors.gray[100]};
  color: ${props => categoryColors[props.$category]?.text || props.theme.colors.gray[800]};
`;

export const CardDescription = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
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
  background: ${props => props.theme.colors.primary[600]};
  color: white;
  padding: 0.625rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all ${props => props.theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.theme.colors.primary[700]};
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform ${props => props.theme.transitions.default};
  }

  &:hover svg {
    transform: translate(0.125rem, -0.125rem);
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

