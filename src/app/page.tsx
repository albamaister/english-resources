'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import ResourceCard from '@/components/ResourceCard';
import { resources } from '@/data/resources';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main style={{ padding: '2rem' }}>
        <ResourceCard resource={resources[0]} />
      </main>
    </div>
  );
}
