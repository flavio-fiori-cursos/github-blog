import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { Github } from "../../services/github";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

interface Post {
  id: number
  title: string
  url: string
  body: string
  updatedAt: string
  user: {
    name: string;    
  }
}

export function Post() {

  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)

  async function getDetailsPost() {

    if(!id) { return }

    const { data } = await Github.getDetailsIssues('flavio-fiori-cursos', 'github-blog', id)

    const details = {
      id: data.number,
      title: data.title,
      url: data.url,
      body: data.body,
      updatedAt: data.updated_at,
      user: {
        name: data.user.login   
      } 
    }
    
    
    setPost(details)
    
  }

  useEffect(() => {
    getDetailsPost()
  }, [])

  if(!post) {
    return null
  }


  return(
    <>
      <Header user={post?.user?.name} url={post.url} title={post?.title} />
      <Content body={post?.body} />
    </>
  )
}