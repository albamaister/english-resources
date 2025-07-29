'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}
