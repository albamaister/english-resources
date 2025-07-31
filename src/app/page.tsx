"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryFilter, { Category } from "@/components/CategoryFilter";
import ResourceGrid from "@/components/ResourceGrid";
import { resources } from "@/data/resources";
import { useResources } from "@/hooks/useResources";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
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

      <main style={{ padding: "2rem" }}>
        <ResourceGrid resources={filteredResources} />
      </main>
    </div>
  );
}
