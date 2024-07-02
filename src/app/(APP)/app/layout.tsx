import { auth } from '@/services/auth'

import { Unauthorized } from '@/components/AuthPages/Unauthorized';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session) {
        return <Unauthorized />
    }

    return (
        <>
            {children}
        </>
    )
}
