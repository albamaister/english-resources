"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceGrid from "@/components/ResourceGrid";
import { resources } from "@/data/resources";
import { useResources } from "@/hooks/useResources";
import { useFavorites } from "@/hooks/useFavorites";
import Footer from "@/components/Footer";
import { Category } from "@/types/resource";
import styled from "styled-components";
import { Description, DescriptionContainer, StyledMain, Title } from "./styles";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  const categories: Category[] = Array.from(
    new Set(resources.map((r) => r.category))
  ) as Category[];

  const { filteredResources } = useResources({
    allResources: resources,
    searchTerm,
    selectedCategory,
  });

  const favoriteResources = filteredResources.filter((r) => isFavorite(r.id));
  const regularResources = filteredResources.filter((r) => !isFavorite(r.id));

  const resourceCounts: Record<string, number> = resources.reduce(
    (acc, resource) => {
      acc[resource.category] = (acc[resource.category] || 0) + 1;
      acc["All"] = (acc["All"] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        resourceCounts={resourceCounts}
      />

      <StyledMain>
        <DescriptionContainer>
          <Title>English Learning Resources</Title>
          <Description>
            Discover curated websites, tools, and platforms to improve your
            English skills. From grammar guides to AI-powered tutors, find the
            perfect resources for your learning journey.
          </Description>
          <ResourceGrid
            favoriteResources={favoriteResources}
            regularResources={regularResources}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </DescriptionContainer>
      </StyledMain>
      <Footer />
    </div>
  );
}
