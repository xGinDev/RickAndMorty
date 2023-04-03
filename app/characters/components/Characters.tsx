"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MarvelCharacters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((animes) => setCharacters(animes));
  }, [page]);

  console.log("characters", characters);

  const { results } = characters;

  console.log("resultados", results);

  return (
    <>
      {results?.map((character: any, i: any) => (
        <div key={i}>
          <div className="container-image">
            <Image
              src={character.image}
              alt={character.name}
              width={100}
              height={100}
            />
          </div>
          <div className="container-info">
            <p>{character.name}</p>
            <p>{character.species}</p>
            <p>{character.status}</p>
            <button onClick={() => router.push(`/characters/${character.id}`)}>
              Ver más
            </button>
          </div>
        </div>
      ))}
      <button onClick={() => setPage(page - 1)}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </>
  );
}

export default MarvelCharacters;
