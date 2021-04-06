import { useRouter } from 'next/router'
import CuteButton from '../../components/cute-button'

export default function About() {
  const router = useRouter()

  const navigateHome = (e) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <>
      <h1> First Post </h1>
      <CuteButton onClick={navigateHome} title="Return Home" />
    </>
  )
}