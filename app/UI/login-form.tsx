"use client"
import {PasswordInputSvg, PersonFilledSvg, SignInSvg} from "@/app/UI/svgs";
import CustomButton from "@/app/UI/Custom/CustomButton";
import {authenticate} from "@/app/lib/actions";
import {useActionState} from "react";

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div>
            <form action={formAction}>
                {" "}
                {/* Form starts here */}
                {/* Email Input Field */}
                <div className="mb-8">
                    <p className="font-semibold pb-1">Email</p>
                    <div className="relative">
                        <input
                            type="email"
                            id={'email'}
                            name={'email'}
                            placeholder="c.gailtier@psg.com"
                            className="min-w-[280px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
                        />
                        <PersonFilledSvg className={"absolute top-2.5 left-2"}/>{" "}
                        {/* Icon positioned inside the input */}
                    </div>
                </div>
                {/* Password Input Field */}
                <div className="mb-8">
                    <p className="font-semibold pb-1">Password</p>
                    <div className="relative">
                        <input
                            id={'password'}
                            name={'password'}
                            type="password" // Changed type to password for security
                            placeholder="********"
                            className="min-w-[280px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
                        />
                        <PasswordInputSvg className={"absolute top-2.5 left-2"}/>{" "}
                        {/* Icon positioned inside the input */}
                    </div>
                </div>
                {/* Sign-in Button */}
                <div className="flex items-center justify-center">
                    <CustomButton
                        name="Se Connecter"
                        disabled={isPending}
                        buttonType={'submit'}
                        className="bg-gradient-to-r from-[#E30E7A]  via-[#F971BA]  to-[#F740A2]  py-2 rounded-sm pl-4 pr-3"
                    >
                        <SignInSvg/> {/* Sign-in icon inside the button */}
                    </CustomButton>
                </div>

                {errorMessage && (
                    <>
                        <div className="h-5 w-5 text-red-500"/>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </form>
        </div>
    );
};
