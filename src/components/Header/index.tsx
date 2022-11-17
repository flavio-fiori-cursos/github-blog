import logoImg from './../../assets/logo.svg'

export function Header() {
  return(
    <header className="pt-16 pb-32 bg-[url('/src/assets/bg-header.png')] bg-base-profile bg-cover">
      <div className="container flex justify-center">
        <figure>
          <img src={logoImg} alt="" />
        </figure>
      </div>
    </header>
  )
}