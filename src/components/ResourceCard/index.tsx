"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  FavoriteButton,
  ImageContainer,
  TagsContainer,
  CardTitle,
  VisitButton,
  CardHeader,
  CategoryBadge,
  Tag,
} from "./styles";
import { ExternalLink, Star } from "lucide-react";

export interface Resource {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string;
  tags: string[];
}

interface ResourceCardProps {
  resource: Resource;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ResourceCard({
  resource,
  isFavorite,
  onToggleFavorite,
}: ResourceCardProps) {
  const handleClick = () => {
    window.open(resource.url, "_blank");
  };

  return (
    <Card>
      <FavoriteButton
        $isFavorite={isFavorite}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(resource.id);
        }}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Star />
      </FavoriteButton>

      <ImageContainer>
        <Image
          src={resource.thumbnail}
          alt={resource.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>

      <CardContent>
        <CardHeader>
          <CardTitle>{resource.title}</CardTitle>
          <CategoryBadge $category={resource.category}>
            {resource.category}
          </CategoryBadge>
        </CardHeader>

        <CardDescription>{resource.description}</CardDescription>

        <TagsContainer>
          {resource.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
          {resource.tags.length > 3 && (
            <Tag>+{resource.tags.length - 3} more</Tag>
          )}
        </TagsContainer>

        <VisitButton onClick={handleClick}>
          <span>Visit Resource</span>
          <ExternalLink/>
          </VisitButton>
      </CardContent>
    </Card>
  );
}
