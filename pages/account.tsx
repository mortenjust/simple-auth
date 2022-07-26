import { signIn, signOut, useSession } from "next-auth/react";


export default function AccountPage() {
    const { data: session, status } = useSession()


    if (session) {
        return (<div>
            <div>Logged in as {session.user?.name} with {session.user?.email}</div>
            <div><button onClick={() => signOut()}>Log out</button></div>
        </div>)
    }

    if (status === "loading") {
        return <div>Loading...</div>
    }

    return (<div>
        <div>Not logged in</div>
        <div><button onClick={() => { signIn() }}>Sign in with Google</button></div>
    </div>)

}