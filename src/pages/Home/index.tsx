import { ListOfPosts } from "./components/ListOfPosts";
import { Profile } from "./components/Profile";

export function Home() {
  return(
    <>
      <Profile />
      <ListOfPosts />
    </>
  )
}