'use client';

import React from 'react';
import { Resource } from '@/types/resource';
import ResourceCard from '../ResourceCard';
import { Grid } from './styles';
interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  return (
    <Grid>
      {resources.map((res) => (
        <ResourceCard key={res.id} resource={res} />
      ))}
    </Grid>
  );
}