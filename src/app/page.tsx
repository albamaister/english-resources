"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceGrid from "@/components/ResourceGrid";
import { useResources } from "@/hooks/useResources";
import Footer from "@/components/Footer";
import { Category } from "@/types/resource";
import { Description, DescriptionContainer, StyledMain, Title } from "./styles";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  const {
    categories,
    favoriteResources,
    regularResources,
    resourceCounts,
    toggleFavorite,
  } = useResources({
    searchTerm,
    selectedCategory,
  });

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        favoritesCount={favoriteResources.length}
      />

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
          />
        </DescriptionContainer>
      </StyledMain>
      <Footer />
    </div>
  );
}
