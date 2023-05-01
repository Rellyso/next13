import { cookies } from 'next/headers'

export async function User() {
  const userCookies = cookies()

  await new Promise((resolve) => setTimeout(resolve, 2000))

  // chamadas estáticas
  const response = await fetch('http://api.github.com/users/rellyso', {
    cache: 'force-cache',
    // antigo SSR
    // cache: 'no-store',
    // ------------------
    // next: {
    //  revalidate: 30,
    //  revalidação de dados apenas desta chamada a cada 30 segundos
    // },
  })
  const user = await response.json()

  return (
    <div>
      <h2>User</h2>
      <pre>{JSON.stringify(userCookies.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
