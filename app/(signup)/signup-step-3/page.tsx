import Link from "next/link";

export default function Page() {
    return (
        <div>
            signup step 3
            <div className={'flex w-48'}>
                <div className={'bg-indigo-600 rounded-lg p-2'}>
                    <Link href={'/signup-step-2'}>Previous</Link>
                </div>
                <div className={'ml-5 bg-indigo-600 rounded-lg p-2'}>
                    <Link href={'/signup-step-4'}>Save & Continue</Link>
                </div>
            </div>
        </div>
    );
};
