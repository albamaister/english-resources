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

const StyledMain = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 2rem;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[900]};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 48rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;


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
