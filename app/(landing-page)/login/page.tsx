import Image from "next/image"; // Importing Next.js Image component for optimized image loading
import CustomButton from "../../UI/Custom/CustomButton"; // Importing a custom button component
import {PasswordInputSvg, PersonFilledSvg, SignInSvg} from "../../UI/svgs";
import LoginForm from "@/app/UI/login-form"; // Importing SVG icons for inputs and buttons

export default function Page() {
    return (
        <div className="w-full min-h-[70vh] relative">
            {" "}
            {/* Container with full width and a minimum height */}
            {/* Background SVG Image for larger screens */}
            <Image
                src={"/sign-in.svg"} // Path to the image
                alt="svg" // Alternative text for accessibility
                width={300} // Image width
                height={432} // Image height
                className="absolute hidden z-0 md:block md:-bottom-10" // Hidden by default, shown on medium+ screens, positioned at bottom
            />
            {/* Background SVG Image for smaller screens */}
            <Image
                src={"/sign-in.svg"}
                alt="svg"
                width={300}
                height={300}
                className="absolute sm:top-0 z-0 md:top-auto md:-bottom-10" // Different positioning for smaller screens
            />
            {/* Main wrapper with flexbox layout */}
            <div
                className="max-w-[1400px] mx-auto w-full flex justify-between flex-col md:flex-row relative items-center md:items-start z-10 px-4 md:px-8 xl:px-0">
                {/* Left Section: Title and Description */}
                <div className="flex-1 md:max-w-[50%]">
                    {" "}
                    {/* Flex item taking half width on medium+ screens */}
                    <h1 className="text-4xl font-bold pb-2 pt-24">Snopt Connect</h1>
                    <p className="text-lg font-bold">
                        The platform serving the <br/> sport industry
                    </p>
                </div>

                {/* Right Section: Sign-in Form */}
                <div className="flex-1">
                    <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
                        Connexion
                    </h2>

                    {/* Form Container with Background */}
                    <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
                        <LoginForm/>
                    </div>

                    {/* Additional Links for Account Creation and Password Reset */}
                    <p className="cursor-pointer underline underline-offset-2 text-[#99AFFF] pb-2 pt-4">
                        Create a Snopt Connect account
                    </p>
                    <p className="cursor-pointer underline underline-offset-2 text-[#99AFFF] pb-2">
                        Forgot password
                    </p>

                    {/* Vertical Divider (Only visible on medium+ screens) */}
                    <div className="w-[1px] hidden md:block h-40 bg-formInputColor"/>
                </div>
            </div>
        </div>
    );
}
