import CustomButton from "../Custom/CustomButton";
import LanguageDropdown from "../Custom/LanguageDropDown";
import { Logo, SignInSvg, SignUpSvg } from "../svgs";

const Header = () => {
  return (
    <div className=" h-[85px] px-4 md:px-8 border-b border-[#52528E] bg-background flex w-full items-center justify-between relative z-10">
      <div className="flex cursor-pointer">
        <Logo />
      </div>

      <div className="flex gap-20">
        <div className="flex gap-4 items-center">
          <div className="hidden md:block">
            <LanguageDropdown />
          </div>
          <div className="p-[1px] hidden md:block bg-gradient-to-r from-[#E1097C] rounded-sm to-[#1A4CFF]">
            <CustomButton
              name="Sign in"
              className=" text-[16px] font-semibold bg-background"
            >
              <SignInSvg />
            </CustomButton>
          </div>
          <div>
            <CustomButton
              name="Sign up"
              className="bg-gradient-to-r from-[#E30E7A] via-[#F971BA] to-[#F740A2] text-[16px] font-semibold"
            >
              <SignUpSvg />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
