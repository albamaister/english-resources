"use client";

import { useMemo } from "react";
import { useFavorites } from "./useFavorites";
import { resources } from "@/data/resources";
import { Category } from "@/types/resource";

interface UseResourcesOptions {
  searchTerm: string;
  selectedCategory: Category | "All";
}

export function useResources({
  searchTerm,
  selectedCategory,
}: UseResourcesOptions) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const categories: Category[] = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(resources.map((resource) => resource.category))
    ) as Category[];
    return uniqueCategories.sort();
  }, []);

  // Filter resources based on search term and category
  const filteredResources = useMemo(() => {
    let filtered = resources;


    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (resource) => resource.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(term) ||
          resource.description.toLowerCase().includes(term) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          resource.category.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);


  const { favoriteResources, regularResources } = useMemo(() => {
    const favoriteResources = filteredResources.filter(resource =>
      isFavorite(resource.id)
    );
    const regularResources = filteredResources.filter( resource => 
      !isFavorite(resource.id)
    );
    return { favoriteResources, regularResources };
  }, [filteredResources, isFavorite]);

  

  // Count resources by category
  const resourceCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: resources.length,
    };

    categories.forEach((category: Category) => {
      counts[category] = resources.filter(
        (resource) => resource.category === category
      ).length;
    });

    return counts;
  }, [categories]);

  return {
    favoriteResources,
    regularResources,
    categories,
    resourceCounts,
    isFavorite,
    toggleFavorite
  };
}
