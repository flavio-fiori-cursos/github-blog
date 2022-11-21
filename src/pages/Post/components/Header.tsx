import { NavLink } from 'react-router-dom'

import { CaretLeft, ArrowSquareOut, GithubLogo, CalendarBlank, ChatsCircle } from "phosphor-react";

interface HeaderProps {
  user: string
  url: string
  title: string
}

export function Header({ user, url, title }: HeaderProps) {
  return(
    <section className="rounded-xl bg-base-profile px-10 py-6 flex flex-col gap-8 shadow-md">
      <header className="w-full flex justify-between items-center">
        <NavLink to="/" title="Voltar" className="flex items-center gap-2 text-blue uppercase text-sm">
          <CaretLeft size={16} />
          Voltar
        </NavLink>
        <a href={url} target="_blank" title="Voltar" className="flex items-center gap-2 text-blue uppercase text-sm">
          Ver no github
          <ArrowSquareOut size={16} />
        </a>
      </header>
      <h1 className="text-base-title text-2xl">{title}</h1>
      <div className="flex gap-6 mt-5">
        <span className="text-base-subtitle text-base flex gap-2 items-center">
          <GithubLogo size={18} className="text-base-label"/>
          <span>{user}</span>
        </span>
        <a href="#" className="text-base-subtitle text-base flex gap-2 items-center">
          <CalendarBlank size={18} className="text-base-label"/>
          <span>Loja Integrada</span>
        </a>
        <span className="text-base-subtitle text-base flex gap-2 items-center">
          <ChatsCircle  size={18} className="text-base-label"/>
          <span>9 seguidores</span>
        </span>
      </div>
    </section>
  )
}