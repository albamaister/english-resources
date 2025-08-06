"use client";

import React from "react";
import { Resource } from "@/types/resource";
import ResourceCard from "../ResourceCard";
import { EmptyState, Grid } from "./styles";
interface ResourceGridProps {
  favoriteResources: Resource[];
  regularResources: Resource[];
  onToggleFavorite: (resourceId: string) => void;
}

export default function ResourceGrid({
  favoriteResources,
  regularResources,
  onToggleFavorite,
}: ResourceGridProps) {
  if (regularResources.length === 0) {
    return (
      <EmptyState>
        <h3>No resources found</h3>
        <p>Try changing the search term or category filter.</p>
      </EmptyState>
    );
  }

  return (
    <div>
      {favoriteResources.length > 0 && (
        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
            Your Favorites
          </h2>
          <Grid>
            {favoriteResources.map((res) => (
              <ResourceCard
                key={res.id}
                resource={res}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </Grid>
        </section>
      )}

      <section>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          All Resources
        </h2>
        <Grid>
          {regularResources.map((res) => (
            <ResourceCard
              key={res.id}
              resource={res}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </Grid>
      </section>
    </div>
  );
}
