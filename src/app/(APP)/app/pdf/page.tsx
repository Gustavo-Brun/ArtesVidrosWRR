import { auth } from '@/services/auth'

import { Unauthorized } from '@/components/Unauthorized';
import { DataRequest } from "@/components/DataRequest";

export default async function HomePdf() {

  const session = await auth()

  if (!session) {
    return <Unauthorized />
  }

  return (
    <main>
      <DataRequest />
    </main>
  )
}
