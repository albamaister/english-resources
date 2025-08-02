"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Description,
  FavoriteButton,
  ImageContainer,
  TagsContainer,
  Title,
  VisitButton,
} from "./styles";
import { Star, Tag } from "lucide-react";

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
        <Title>{resource.title}</Title>
        <Description>{resource.description}</Description>

        <TagsContainer>
          {resource.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
          {resource.tags.length > 3 && (
            <Tag>+{resource.tags.length - 3} more</Tag>
          )}
        </TagsContainer>

        <VisitButton onClick={handleClick}>Visit Resource</VisitButton>
      </CardContent>
    </Card>
  );
}
