'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import { resources } from '@/data/resources';
import ResourceGrid from '@/components/ResourceGrid';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main style={{ padding: '2rem' }}>
        <ResourceGrid resources={resources} />
      </main>
    </div>
  );
}
