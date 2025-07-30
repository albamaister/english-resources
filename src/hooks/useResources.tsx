'use client';

import { useMemo } from 'react';
import { Resource } from '@/components/ResourceCard';
import { Category } from '@/components/CategoryFilter';

interface UseResourcesOptions {
  allResources: Resource[];
  searchTerm: string;
  selectedCategory: Category | 'All';
}

export function useResources({ allResources, searchTerm, selectedCategory }: UseResourcesOptions) {
  const filteredResources = useMemo(() => {
    return allResources.filter((res) => {
      const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allResources, searchTerm, selectedCategory]);

  return { filteredResources };
}
