// revalidação de dados de toda página a cada 30 segundos
// export const revalidate = 30

import { Repos } from '@/components/Repos'
import { User } from '@/components/User'
// import { useRouter } from 'next/navigation'
import { Suspense } from 'react'

export default async function Home() {
  // const router = useRouter()

  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Carregando...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>

      <Suspense fallback={<p>Carregando...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repos />
      </Suspense>
    </div>
  )
}
