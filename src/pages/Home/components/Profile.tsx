import { GithubLogo, Buildings, Users } from 'phosphor-react'

import { useEffect, useState } from 'react'
import { Github } from '../../../services/github'

interface UserProps {
  photo: string
  name: string
  company: string
  followers: number
  url: string
  followersUrl: string

}

export function Profile() {  

  const [user, setUser] = useState<UserProps | null>(null)

  async function getUser() {
    const { data } = await Github.getUser('flaviofiori')
    
    setUser({
      photo: data.avatar_url,
      name: data.name,
      company: data.company,
      followers: data.followers,
      url: data.html_url,
      followersUrl: data.followers_url
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return(
    <section className="rounded-xl bg-base-profile px-10 py-6 flex gap-8 shadow-md">
      <figure className="w-36 h-36 rounded-xl overflow-hidden">
        <img src={user?.photo} className="object-cover object-center"/>
      </figure>
      <div className="flex flex-col flex-1 gap-2">
        <strong className="text-base-title text-2xl">{user?.name}</strong>
        <span className="text-base-text text-base">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
        <div className="flex gap-6 mt-5">
          <a href={user?.url} target="_blank" className="text-base-subtitle text-base flex gap-2 items-center">
            <GithubLogo size={18} className="text-base-label"/>
            <span>flaviofiori</span>
          </a>
          <span className="text-base-subtitle text-base flex gap-2 items-center">
            <Buildings size={18} className="text-base-label"/>
            <span>{user?.company}</span>
          </span>
          <a href={user?.followersUrl} target="_blank" className="text-base-subtitle text-base flex gap-2 items-center">
            <Users size={18} className="text-base-label"/>
            <span>{user?.followers} seguidores</span>
          </a>
        </div>
      </div>
    </section>
  )
}