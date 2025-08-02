import { Category } from "@/types/resource";
import styled from "styled-components";

export const FilterContainer = styled.div`
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: 1rem;
  position: sticky;
  top: 4rem;
  z-index: 40;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const categoryColors: Record<
  Category | "All",
  { bg: string; text: string; hover: string }
> = {
  All: { bg: "#f3f4f6", text: "#1f2937", hover: "#e5e7eb" },
  Listening: { bg: "#dbeafe", text: "#1e40af", hover: "#bfdbfe" },
  Grammar: { bg: "#dcfce7", text: "#166534", hover: "#bbf7d0" },
  "AI Tools": { bg: "#f3e8ff", text: "#6b21a8", hover: "#e9d5ff" },
  Vocabulary: { bg: "#fef3c7", text: "#92400e", hover: "#fde68a" },
  Speaking: { bg: "#fee2e2", text: "#991b1b", hover: "#fecaca" },
  Reading: { bg: "#e0e7ff", text: "#3730a3", hover: "#c7d2fe" },
  Writing: { bg: "#ccfbf1", text: "#115e59", hover: "#99f6e4" },
  Pronunciation: { bg: "#fce7f3", text: "#9d174d", hover: "#fbcfe8" },
  General: { bg: "#fed7aa", text: "#9a3412", hover: "#fdba74" },
};

export const FilterButton = styled.button<{
  $selected: boolean;
  $category: Category | "All";
}>`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all ${(props) => props.theme.transitions.default};
  background: ${(props) => categoryColors[props.$category].bg};
  color: ${(props) => categoryColors[props.$category].text};
  border: ${(props) =>
    props.$selected
      ? `2px solid ${props.theme.colors.primary[500]}`
      : "2px solid transparent"};

  &:hover {
    transform: scale(1.05);
    background: ${(props) => categoryColors[props.$category].hover};
  }
`;

export const CountBadge = styled.span`
  font-size: 0.75rem;
  opacity: 0.75;
`;
