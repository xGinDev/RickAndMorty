"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import "./infocharactes.css";

export default function InfoCharacter({ params }: any) {
  const [character, setCharacter] = useState<any>();

  const { id } = params;

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}?`
        );
        setCharacter(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [id]);

  console.log(character);

  const { data } = character || {};

  console.log(data);

  const { name, image, species, status } = data || {};

  return (
    <>
      <div className="container-character-info">
        <Image src={image} alt={name} width={100} height={100} />
        <p className="name-character">{name}</p>
        <p className="species">{species}</p>
        <p className="status">{status}</p>
      </div>
    </>
  );
}
