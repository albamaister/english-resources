import React from "react";
import { Heart, BookOpen } from "lucide-react";
import {
  Copyright,
  Description,
  FooterContainer,
  LogoIcon,
  LogoSection,
  LogoText,
  MadeWithLove,
} from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <LogoSection>
        <LogoIcon>
          <BookOpen size={20} color="white" />
        </LogoIcon>
        <LogoText>
          <h3>EnglishHub</h3>
          <p>Learning Resources</p>
        </LogoText>
      </LogoSection>

      <Description>
        Discover the best English learning resources from around the web.
        Improve your listening, speaking, reading, and writing skills with
        curated tools and websites.
      </Description>

      <MadeWithLove>
        <span>Made with</span>
        <Heart size={16} />
        <span>for English learners worldwide</span>
      </MadeWithLove>
      <Copyright>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/bryanalba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          bryanalba.dev
        </a>
      </Copyright>
    </FooterContainer>
  );
}
