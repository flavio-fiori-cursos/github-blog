import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

import { Github } from "../../../services/github"
import { timeFromNow } from "../../../utils/formatDate"
interface Post {
  id: number
  title: string
  description: string
  updatedAt: string
}

export function ListOfPosts() {

  const [posts, setPosts] = useState<Post[]>([])

  async function getListOfPosts() {
    const { data } = await Github.getListIssues('flavio-fiori-cursos', 'github-blog', 'Post')

    const list = data.items.map((post: any) => {
      return {
        id: post.number,      
        title: post.title,
        description: '', //post.body
        updatedAt: timeFromNow(post.updated_at)
      }
    }) 

    setPosts(list)
  }

  useEffect(() => {
    getListOfPosts()
  }, [])


  return(
    <section className="my-8 grid grid-cols-2 gap-8">
      {
        posts.map(post => (
          <article className="bg-base-post p-8 rounded-lg" key={post.id}>
            <NavLink to={`/post/${post.id}`}>
              <header className="flex justify-between items-start">
                <span className="flex-1 text-base-title text-xl">{post.title}</span>
                <span className="text-base-span text-sm">{post.updatedAt}</span>
              </header>
              <p className="mt-5 text-base-text text-base">
                {post.description}
              </p>
            </NavLink>
          </article>
        ))
      }
    </section>
  )
}