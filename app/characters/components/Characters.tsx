"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./characters.css";

function MarvelCharacters() {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<any>([]);
  const [buttonGrid, setButtonGrid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((animes) => setCharacters(animes));
  }, [page]);

  console.log("characters", characters);

  const { results } = characters;

  console.log("resultados", results);

  const handleGridOneButton = () => {
    setButtonGrid(true);
  };

  const handleGridTwoButton = () => {
    setButtonGrid(false);
  };

  return (
    <>
      <div className="">
        <button
          onClick={() => {
            handleGridOneButton();
          }}
        >
          Cambiar layout
        </button>
        <button
          onClick={() => {
            handleGridTwoButton();
          }}
        >
          Cambiar layout 2
        </button>
      </div>
      <div
        className="container-characters"
        style={
          buttonGrid
            ? { gridTemplateColumns: "auto" }
            : { display: "repeat(2, 1fr)" }
        }
      >
        {results?.map((character: any, i: any) => (
          <div key={i} className="container-character">
            <div className="container-image">
              <Image
                src={character.image}
                alt={character.name}
                width={100}
                height={100}
                className="imgCharacters"
              />
            </div>
            <div className="container-info">
              <p>{character.name}</p>
              <p>{character.species}</p>
              <p>{character.status}</p>
              <button
                onClick={() => router.push(`/characters/${character.id}`)}
                className="buttonSeeMore"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
    </>
  );
}

export default MarvelCharacters;
