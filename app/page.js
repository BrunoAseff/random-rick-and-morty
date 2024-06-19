"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  border-radius: 20px;
  background: #80ed99;
  padding: 30px;
  gap: 4.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const TextContainer = styled.div`
  diplay: flex;
  flex-direction: column;
  color: #22577a;
`;

const Title = styled.p`
  font-size: 2rem;
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 1rem;
  opacity: 0.5;
`;

const Button = styled.button`
  background: #80ed99;
  border-radius: 8px;
  font-size: 2rem;
  padding: 5px 15px;
  margin: 20px;
  border: solid 3px #22577a;
  color: #22577a;
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background: #c7f9cc;
  }
`;

export default function Home() {
  const [char, setChar] = useState("");
  const [status, setStatus] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [location, setLocation] = useState("");

  async function Get() {
    const randomPage = Math.floor(Math.random() * 41);
    const randomCharacter = Math.floor(Math.random() * 19);

    const characters = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${randomPage}`
    );
    const data = await characters.json();

    setChar(data.results[randomCharacter].name);
    setStatus(data.results[randomCharacter].status);
    setCharacterImage(data.results[randomCharacter].image);
    setLocation(data.results[randomCharacter].location.name);
  }

  return (
    <Container>
      <Button onClick={Get}>Novo personagem</Button>

      <Card>
        <ImageContainer>
          {characterImage && (
            <StyledImage
              src={characterImage}
              width={360}
              height={330}
              alt="Picture of the character"
            />
          )}
        </ImageContainer>
        <TextContainer>
          <Subtitle>Nome:</Subtitle>
          <Title>{char}</Title>
          <Subtitle>Status:</Subtitle>
          <Title>{status}</Title>
          <Subtitle>Localização:</Subtitle>
          <Title>{location}</Title>
        </TextContainer>
      </Card>
      <p>vc gostou amor não deu tempo de fazer muito mais q isso kkkk</p>
    </Container>
  );
}
