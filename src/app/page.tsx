import Pagination from "@/components/Pagination"
import Image from "next/image"
import Link from "next/link"
import { use, useState } from "react"

async function getCharacters() {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${1}`)
  const characters = await res.json()
 
  return characters
}

export default function Home() {
  const characters =  use(getCharacters())

  return (
    <main className=" p-24">
      <h1> Characters List </h1>
      <ul className="grid grid-cols-3 bg-black">
        {characters?.results.map((character: any) => (
          <Link href={`/character/${character.id}`} className="relative bg-blue-50 w-full bg-clip-text text-transparent text-9xl font-black border p-4 flex items-center" key={character.id} style={{backgroundImage: `url(${character.image})`}}>
            <p>{character.name}</p>
          </Link>
        ))}
      </ul>
      <Pagination />
    </main>
  )
}
