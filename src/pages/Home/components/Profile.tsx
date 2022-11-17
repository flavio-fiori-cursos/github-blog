import { GithubLogo, Buildings, Users } from 'phosphor-react'

export function Profile() {
  return(
    <section className="rounded-xl bg-base-profile px-10 py-6 flex gap-8 shadow-md">
      <figure className="w-36 h-36 rounded-xl overflow-hidden">
        <img src="https://avatars.githubusercontent.com/u/45487703?v=4" className="object-cover object-center"/>
      </figure>
      <div className="flex flex-col flex-1 gap-2">
        <strong className="text-base-title text-2xl">Flávio Fiori</strong>
        <span className="text-base-text text-base">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
        <div className="flex gap-6 mt-5">
          <a href="#" className="text-base-subtitle text-base flex gap-2 items-center">
            <GithubLogo size={18} className="text-base-label"/>
            <span>flaviofiori</span>
          </a>
          <a href="#" className="text-base-subtitle text-base flex gap-2 items-center">
            <Buildings size={18} className="text-base-label"/>
            <span>Loja Integrada</span>
          </a>
          <a href="#" className="text-base-subtitle text-base flex gap-2 items-center">
            <Users size={18} className="text-base-label"/>
            <span>9 seguidores</span>
          </a>
        </div>
      </div>
    </section>
  )
}