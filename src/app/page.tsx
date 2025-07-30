'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CategoryFilter, { Category } from '@/components/CategoryFilter';
import ResourceGrid from '@/components/ResourceGrid';
import { resources } from '@/data/resources';
import { useResources } from '@/hooks/useResources';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories: Category[] = Array.from(
    new Set(resources.map((r) => r.category))
  ) as Category[];

  const { filteredResources } = useResources({
    allResources: resources,
    searchTerm,
    selectedCategory,
  });

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main style={{ padding: '2rem' }}>
        <ResourceGrid resources={filteredResources} />
      </main>
    </div>
  );
}
