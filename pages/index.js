import { useEffect } from "react";
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/ios')
  })
  return (
    <>
    </>
  )
}

export default Home;
