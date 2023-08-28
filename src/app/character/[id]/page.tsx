import Image from "next/image"
import Link from "next/link"

async function getCharacter(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await res.json()
 
  return character
}
export default async function Home({ params }:{ params: { id: string }}) {
  const character = await getCharacter(params.id)

  
  return (
    <main className="p-24">
      <section>
        <Image src={character.image} width={200} height={200} alt="Character Image" />
        {character.name}
      </section>
    </main>
  )
}
