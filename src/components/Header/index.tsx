"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderInner,
  LogoIcon,
  LogoSection,
  LogoText,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from "./styles";

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderInner>
          <LogoSection>
            <LogoIcon>
              <BookOpen size={24} color="white" />
            </LogoIcon>
            <LogoText>
              <h1>EnglishHub</h1>
              <p>Learning Resources</p>
            </LogoText>
          </LogoSection>

          <SearchContainer>
            <SearchWrapper>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </SearchWrapper>
          </SearchContainer>
        </HeaderInner>
      </HeaderContent>
    </HeaderContainer>
  );
}
