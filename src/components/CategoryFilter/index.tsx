'use client';

import React from 'react';
import { Button, Buttons, Container } from './styles';

export type Category =
  | 'Listening'
  | 'Grammar'
  | 'AI Tools'
  | 'Vocabulary'
  | 'Speaking'
  | 'Reading'
  | 'Writing'
  | 'Pronunciation'
  | 'General';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const allCategories = ['All', ...categories] as const;

  return (
    <Container>
      <Buttons>
        {allCategories.map((category) => (
          <Button
            key={category}
            $selected={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </Buttons>
    </Container>
  );
}
