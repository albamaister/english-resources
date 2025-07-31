"use client";

import React from "react";
import { Resource } from "@/types/resource";
import ResourceCard from "../ResourceCard";
import { EmptyState, Grid } from "./styles";
interface ResourceGridProps {
  resources: Resource[];
  onToggleFavorite: (resourceId: string) => void;
  isFavorite: (resourceId: string) => boolean;
}

export default function ResourceGrid({
  resources,
  isFavorite,
  onToggleFavorite,
}: ResourceGridProps) {
  if (resources.length === 0) {
    return (
      <EmptyState>
        <h3>No resources found</h3>
        <p>Try changing the search term or category filter.</p>
      </EmptyState>
    );
  }

  return (
    <Grid>
      {resources.map((res) => (
        <ResourceCard
          key={res.id}
          resource={res}
          isFavorite={isFavorite(res.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </Grid>
  );
}
