export async function Repos() {
  // chamadas estáticas
  const response = await fetch('http://api.github.com/users/rellyso/repos', {
    cache: 'force-cache',
  })
  const repos = await response.json()

  return (
    <div>
      <h2>Repos</h2>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}
