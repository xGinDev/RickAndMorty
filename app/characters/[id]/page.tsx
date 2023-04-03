"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

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

  return <></>;
}
