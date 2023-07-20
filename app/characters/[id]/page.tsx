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
      <div className="w-2/5 rounded-2xl m-auto p-4 bg-green-50 grid items-center justify-center gap-12">
        <Image src={image} alt={name} width={300} height={300} />
        <p className="name-character text-black">Name: {name}</p>
        <p className="species text-black">Specie: {species}</p>
        <p className="status text-black">Status: {status}</p>
      </div>
    </>
  );
}
