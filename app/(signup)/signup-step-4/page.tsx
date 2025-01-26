import Link from "next/link";

export default function Page() {
    return (
        <div>
            signup step 4
            <div className={'flex w-48'}>
                <div className={'bg-indigo-600 rounded-lg p-2'}>
                    <Link href={'/signup-step-3'}>Previous</Link>
                </div>
            </div>
        </div>
    );
};
