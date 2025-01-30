import Image from "next/image";
import CustomButton from "../UI/Custom/CustomButton";
import { PasswordInputSvg, PersonFilledSvg, SignInSvg } from "../UI/svgs";

export default function Page() {
  return (
    <div className="w-full min-h-[70vh] relative">
      <Image
        src={"/sign-in.svg"}
        alt="svg"
        width={300}
        height={432}
        className="absolute hidden z-0 md:block md:-bottom-10"
      />
      <Image
        src={"/sign-in.svg"}
        alt="svg"
        width={300}
        height={300}
        className="absolute sm:top-0 z-0 md:top-auto md:-bottom-10"
      />
      <div className="max-w-[1400px] mx-auto 0 w-full flex justify-between flex-col md:flex-row relative items-center md:items-start z-10 px-4 md:px-8 xl:px-0">
        <div className="flex-1 md:max-w-[50%]">
          <h1 className="text-4xl font-bold pb-2 pt-24">Snopt Connect</h1>
          <p className="text-lg font-bold">
            The platform serving the <br /> sport industry
          </p>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-[32px] pb-4 pt-12 md:pt-24 text-center md:text-left">
            Connexion
          </h2>
          <div className="bg-formWraperColor p-6 w-fit rounded-[4px]">
            <form action="">
              <div className="mb-8">
                <p className="font-semibold pb-1">Email</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="c.gailtier@psg.com"
                    className="min-w-[280px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
                  />
                  <PersonFilledSvg className={"absolute top-2.5 left-2"} />
                </div>
              </div>
              <div className="mb-8">
                <p className="font-semibold pb-1">Password</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="********"
                    className="min-w-[280px] bg-formInputColor py-2 pl-8 pr-3 rounded-sm "
                  />
                  <PasswordInputSvg className={"absolute top-2.5 left-2"} />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <CustomButton
                  name="Se Connecter"
                  className="bg-gradient-to-r from-[#E30E7A]  via-[#F971BA]  to-[#F740A2]  py-2 rounded-sm pl-4 pr-3"
                >
                  <SignInSvg />
                </CustomButton>
              </div>
            </form>
          </div>
          <p className=" cursor-pointer underline underline-offset-2 text-[#99AFFF] pb-2 pt-4">
            Create a Snopt Connect account
          </p>
          <p className=" cursor-pointer underline underline-offset-2 text-[#99AFFF] pb-2">
            Forgot password
          </p>
          <div className="w-[1px] hidden md:block h-40 bg-formInputColor" />
        </div>
      </div>
    </div>
  );
}
