import Link from "next/link";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className={'flex justify-around'}>
                <div>
                    header container
                </div>

                <div className={'flex items-center justify-between'}>
                    <div className={'bg-indigo-600 rounded-lg p-2 ml-5'}>
                        <Link href={'/login'}>Login</Link>
                    </div>
                    <div className={'bg-indigo-600 rounded-lg p-2 ml-5'}>
                        <Link href={'/signup-step-1'}>Signup</Link>
                    </div>
                </div>
            </header>
            <main>content area</main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                footer container
            </footer>
        </div>
    );
}
