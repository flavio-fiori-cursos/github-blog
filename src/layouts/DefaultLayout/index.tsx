import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return(
    <>
      <Header />

      <main className="-mt-24">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}