import Link from 'next/link'
import CuteButton from '../../components/cute-button'

export default function FirstPost() {
  return (
    <>
      <h1> First Post </h1>

      <Link href="/">
        <CuteButton title="Return Home" />
      </Link>
    </>
  )
}