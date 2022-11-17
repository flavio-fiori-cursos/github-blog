export function ListOfPosts() {
  return(
    <section className="my-8 grid grid-cols-2 gap-8">
      {
        Array.from({length: 6}, (v, k) => k).map(item => (
          <article className="bg-base-post p-8 rounded-lg">
            <header className="flex justify-between items-start">
              <span className="flex-1 text-base-title text-xl">JavaScript data types and data structures</span>
              <span className="text-base-span text-sm">Há 1 dia</span>
            </header>
            <p className="mt-5 text-base-text text-base">
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in 
            </p>
          </article>
        ))
      }
    </section>
  )
}