"use client";

import React from "react";
import { FilterButton, FilterButtons, FilterContainer, CountBadge } from "./styles";
import { Category } from "@/types/resource";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | "All";
  onCategoryChange: (category: Category | "All") => void;
  resourceCounts: Record<string, number>;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  resourceCounts,
}: CategoryFilterProps) {
  const allCategories = ["All", ...categories] as const;

  return (
    <FilterContainer>
      <FilterButtons>
        {allCategories.map((category) => (
          <FilterButton
            key={category}
            $selected={selectedCategory === category}
            $category={category}
            onClick={() => onCategoryChange(category)}
          >
            <span>{category}</span>
            <CountBadge> ({resourceCounts[category] || 0})</CountBadge>
          </FilterButton>
        ))}
      </FilterButtons>
    </FilterContainer>
  );
}
