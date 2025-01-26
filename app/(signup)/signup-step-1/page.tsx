import Link from "next/link";

export default function Page() {
    return (
        <div>
            signup step 1

            <div className={'w-48'}>
                <div className={'bg-indigo-600 rounded-lg p-2'}>
                    <Link href={'/signup-step-2'}>Save & Continue</Link>
                </div>
            </div>
        </div>
    );
};
