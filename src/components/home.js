export default function Home({currentUser}) {
  return (
    <div>
      <h1>{`Welcome ${currentUser.name}`}</h1>
      <h2>Here's your Summary</h2>
    </div>
  )
}