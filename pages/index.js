import Link from 'next/link';
function Home() {
  return (
    <div>
      <h2>NEXT JS pre-rendering</h2>

      <Link href='/users' passHref>
        <button>Users</button>
      </Link>

      <Link href='/posts' passHref>
        <button>Posts</button>
      </Link>
    </div>
  )
}
export default Home;