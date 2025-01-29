"use client";
import Image from "next/image";
import {
  AiSectionLines,
  BtnLogo,
  FcSnoptSvg,
  FootMercatoSvg,
  LeParisienSvg,
  LeProgresSvg,
  LequipeSvg,
  PerformanceButtonSvg,
  SecondSectionLine,
} from "@/app/Components/svgs";

const cardsData = [
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
  {
    clubName1: "Paris Saint-Germain",
    img: "/assets/user1.png",
    price: "35 €",
    name: "Christophe",
    badg1: "/assets/clubBadg.svg",
    badg2: "/assets/clubBadg2.svg",
    clubName2: "Arsenal",
    city: "Madrid",
    date: "30/11/2023",
    published: "Published on",
    shieldA: "/assets/shieldA.svg",
    shieldS: "/assets/shieldS.svg",
    publishedDate: "18/11/2022",
  },
];

const testimonialsData = [
  {
    key: 1,
    img: "/assets/user1.png",
    name: "Jenny Wilson",
    position: "Scout",
    review:
      "Eget eu rhoncus scelerisque sed quis. Ut tincidunt erat purus neque. Placerat consectetur risus vulputate orci nibh nunc aliquam. Pellentesque elit viverra natoque hendrerit in amet. Orci natoque at neque neque consequat. ",
  },
  {
    key: 2,
    img: "/assets/user2.png",
    name: "Ronald Richards",
    position: "Gestionnaire d`OS",
    review:
      "Eget eu rhoncus scelerisque sed quis. Ut tincidunt erat purus neque. Placerat consectetur risus vulputate orci nibh nunc aliquam. Pellentesque elit viverra natoque hendrerit in amet. Orci natoque at neque neque  ",
  },
  {
    key: 3,
    img: "/assets/user3.png",
    name: "Jacob Jones",
    position: "Coach",
    review:
      "Consectetur ut malesuada justo ut ullamcorper adipiscing. Convallis nisi lacus tempor lacus lorem a. Ut habitasse augue praesent elit tristique purus. Nunc nisl in urna egestas eu nunc arcu aenean proin. Tortor euismod vitae pellentesque !",
  },
  {
    key: 4,
    img: "/assets/user3.png",
    name: "Jacob Jones",
    position: "Coach",
    review:
      "Consectetur ut malesuada justo ut ullamcorper adipiscing. Convallis nisi lacus tempor lacus lorem a. Ut habitasse augue praesent elit tristique purus. Nunc nisl in urna egestas eu nunc arcu aenean proin. Tortor euismod vitae pellentesque !",
  },
  {
    key: 5,
    img: "/assets/user3.png",
    name: "Jacob Jones",
    position: "Coach",
    review:
      "Consectetur ut malesuada justo ut ullamcorper adipiscing. Convallis nisi lacus tempor lacus lorem a. Ut habitasse augue praesent elit tristique purus. Nunc nisl in urna egestas eu nunc arcu aenean proin. Tortor euismod vitae pellentesque !",
  },
  {
    key: 6,
    img: "/assets/user3.png",
    name: "Jacob Jones",
    position: "Coach",
    review:
      "Consectetur ut malesuada justo ut ullamcorper adipiscing. Convallis nisi lacus tempor lacus lorem a. Ut habitasse augue praesent elit tristique purus. Nunc nisl in urna egestas eu nunc arcu aenean proin. Tortor euismod vitae pellentesque !",
  },
];

export default function HomeComponent() {
  return (
    <div className="text-white relative z-0 -mt-10">
      <main>
        {/* hero section  */}
        <div className="h-screen w-full relative flex items-center px-4 md:px-16 lg:px-24 xl:px-32">
          <Image
            src={"/assets/desktop-hero.svg"}
            width={700}
            height={700}
            alt="hero-image"
            className="absolute hidden md:block  right-0 w-full object-cover h-full"
            unoptimized={true}
            priority
          />
          <Image
            src={"/assets/mobile-hero.svg"}
            width={300}
            height={700}
            alt="hero-image"
            className="absolute md:hidden right-0 -mt-20 w-full object-cover  h-full"
            unoptimized={true}
            priority
          />
          <div className="z-10">
            <h1 className="font-extrabold text-5xl pb-4">Snopt Connect</h1>
            <p className="font-semibold text-3xl pb-6">
              The platform serving <br /> the sport industry
            </p>
            <button className="px-4 relative py-2 rounded-[2px] border-2 font-bold border-yellow-600 z-10 hover:scale-105 duration-300 ease-in transition-transform cursor-pointer">
              <div className="flex items-center gap-2 ">
                <BtnLogo />
                Sign up now
              </div>
            </button>
          </div>
        </div>

        {/* 2nd Section  */}
        <div className=" px-4 md:px-16 lg:px-24 xl:px-32 mt-16 flex items-center justify-between flex-col gap-10 md:flex-row max-w-[1400px] w-full mx-auto">
          <div className="flex flex-col items-center relative">
            <Image
              src={"/assets/codyy.svg"}
              width={500}
              height={500}
              unoptimized={true}
              alt="player"
              className="object-contain"
              priority
            />
            <div className="mt-14">
              <FcSnoptSvg />
            </div>
            <div className="absolute hidden xl:block bottom-0 lg:-right-32 xl:-right-60 rotate-12">
              <SecondSectionLine />
            </div>
          </div>
          <div className="max-w-[431px]  mx-auto">
            <h2 className="font-bold text-4xl pb-4">
              Become a scout and sell your reports to clubs
            </h2>
            <p className="font-medium text-lg pb-6">
              Onboard in 5 minutes and start monetizing your time when watching
              soccer games.
            </p>
            <div className="xl:-ml-20 2xl:-ml-36 mt-7 transition-transform cursor-pointer hover:scale-110 ease-in duration-300">
              <PerformanceButtonSvg />
            </div>
          </div>
        </div>

        {/* 3rd Section  */}
        <div className=" px-4 md:px-16 lg:px-24 xl:px-32 mt-16 flex items-center justify-around flex-col gap-10 md:flex-row max-w-[1400px] mx-auto">
          <div className="max-w-[431px] mx-auto relative">
            <h3 className="font-bold text-4xl pb-4 mb-6 ">
              Powerful tool powered by AI
            </h3>
            <p className="font-medium text-lg pb-6">
              Lorem ipsum dolor sit amet consectetur. Pellentesque tortor
              accumsan in ullamcorper donec platea ut dignissim auctor. Cras
              enim feugiat et hac in vulputate cursus vitae.
            </p>
            <button className="px-4 relative py-2 rounded-[2px] border-2 font-bold border-yellow-600 z-10 hover:scale-105 duration-300 ease-in transition-transform cursor-pointer">
              <div className="flex items-center gap-2 ">
                <BtnLogo />
                Sign up now
              </div>
            </button>
            <div className="absolute hidden md:block -left-36 -top-80 -rotate-12 z-0">
              <AiSectionLines />
            </div>
          </div>
          <div className="flex items-center justify-center flex-1 relative mt-8 md:mt-0">
            <Image
              src={"/assets/powerful-tool-img.svg"}
              width={500}
              height={500}
              unoptimized={true}
              alt="player"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 4th Section  */}
        <div className=" px-4 md:px-16 lg:px-24 xl:px-32 mt-16 flex items-center justify-center flex-col gap-4">
          <div className="w-[70%] self-end h-0.5 bg-gradient-to-r from-white/20 to-transparent mb-10" />
          <div className="">
            <h4 className="font-bold text-4xl pb-4 ">
              Le meilleur outil des clubs
            </h4>
            <p className="font-medium text-lg pb-6">
              Here is the translation from French to English:
            </p>
            <p className="font-medium text-lg pb-6">
              &quot;Find reports on our marketplace. Order reports & hire
              scouts.&quot;
            </p>
            <button className="px-4 relative py-2 rounded-[2px] border-2 font-bold border-yellow-600 z-10 hover:scale-105 duration-300 ease-in transition-transform cursor-pointer">
              <div className="flex items-center gap-2 ">
                <BtnLogo />
                Sign up now
              </div>
            </button>
          </div>
        </div>

        {/* 5th section  */}
        <div className="mt-32  pb-16 relative w-full  overflow-hidden">
          <div className="w-32 h-[70%] pointer-events-non absolute -left-4 bg-[#110F1A] filter blur-xl" />
          <div className="w-32 h-[70%] pointer-events-non absolute -right-4 bg-[#110F1A] filter blur-xl" />
          <div className="overflow-x-scroll flex flex-shrink-0 scrollbar-hide gap-10">
            {cardsData.map((player) => (
              <div
                key={Math.random()}
                className="min-w-[350px] bg-gradient-to-b from-[#303054] to-[#1F1F37] p-4 rounded-md shadow-lg"
              >
                <div className="flex justify-between items-center pb-4">
                  <div className="px-1.5 py-0.5 bg-[#52528E] text-sm ">
                    {player.clubName1}
                  </div>
                  <div>{player.price}</div>
                </div>
                <div className="pb-7 flex items-center gap-2">
                  <Image src={player.img} alt="user" width={24} height={24} />
                  <p className="font-medium">{player.name}</p>
                  <div className="flex items-center">
                    <Image
                      src={player.shieldA}
                      alt="user"
                      width={24}
                      height={24}
                    />
                    <Image
                      src={player.shieldS}
                      alt="user"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pb-6">
                  <div className="bg-[#303054] rounded-sm  p-1.5 flex flex-col items-center">
                    <span className=" pb-1 font-bold px-6">0</span>
                    <div className="bg-[#1F1F37] w-full h-1" />
                    <span className="pt-1 font-bold px-6">0</span>
                  </div>

                  <div>
                    <p className="font-semibold pb-3 whitespace-nowrap">
                      {player.clubName1}
                    </p>
                    <p className="font-semibold whitespace-nowrap">
                      {player.clubName2}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold">{player.date}</span>
                    <span className="text-sm">{player.city}</span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-sm">{player.publishedDate}</span>
                    <span className="text-sm">{player.published}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6th Section  */}
        <div className=" px-4 md:px-10  bg-gradient-to-b from-transparent via-[#1A1A2D] to-transparent overflow-hidden mt-16 mb-32">
          <h4 className="font-bold text-4xl pb-4 text-center mb-16 ">
            They use Snopt
          </h4>
          <div className="flex shrink-0  items-center gap-6 overflow-x-scroll scrollbar-hide ">
            {testimonialsData?.map(({ key, img, name, position, review }) => (
              <div
                key={key}
                className="min-w-[332px] max-w-[350px] pl-4 border-l-2 mx-auto border-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image src={img} width={50} height={50} alt="user" />
                  <div>
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-[#CBCBE1]">{position}</p>
                  </div>
                </div>
                <p className="font-medium text-lg">{review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7th Section  */}
        <div className="h-0.5 bg-gradient-to-l from-white/20 from-10% to-transparent to-90% mb-3" />
        <div className=" px-4 md:px-16 lg:px-24 xl:px-32 my-16 flex items-center justify-center flex-col gap-4 ">
          <h5 className="font-bold text-4xl pb-20">They talk about us</h5>
          <div className="flex items-center gap-8 flex-wrap justify-evenly w-full">
            <div>
              <LequipeSvg />
            </div>
            <div>
              <LeParisienSvg />
            </div>
            <div>
              <FootMercatoSvg />
            </div>
            <div>
              <LeProgresSvg />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
