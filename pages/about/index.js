import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1> First Post </h1>

      <Link href="/">
        <button>Return to home</button>
      </Link>
    </>
  )
}