'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f0f8ff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <Title>Hello EnglishHub</Title>
    </Wrapper>
  );
}
