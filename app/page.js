// "use client"

// import React from "react"
// import companyIcon from "./_components/Assets/img/comp.png"
// import user from "./_components/Assets/img/user.png"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import Link from "next/link"
// import Heading from "./_components/Headings"

// const Home = () => {
//   const router = useRouter()

//   return (
//     <div className="bg-[url(/img/homepage.png)] h-screen bg-cover bg-center flex items-center px-[8%] justify-end">
//       <div className="flex flex-col gap-4 px-6 xl:px-8 py-[64px] bg-white rounded-[16px] w-[90dvw] max-w-[534px]">
//         <div className="text-gray-800 gap-8 flex flex-col">
//           <Heading
//             as="h1"
//             size="base"
//             className="text-[40px] leading-[48px] font-[600] text-[#1B1818]"
//           >
//             Sign up
//           </Heading>
//           <SignupType
//             heading="As an organization?"
//             body="Set up a new organization"
//             imageSrc={companyIcon}
//             onClick={() => router.push("/signup?type=employer")}
//           />
//           {/* <SignupType
//             heading="As an employee?"
//             body="Create your account"
//             imageSrc={user}
//             onClick={() => router.push("/signup?type=employee")}
//           /> */}
//         </div>

//         <p className="text-center text-[#645D5D] text-base">Or</p>

//         <Link
//           className="bg-primary-500 text-white text-base leading-[145%] font-[600] text-center rounded-md w-full px-6 py-4"
//           href="/login"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Home

// function SignupType({ imageSrc, heading, body, onClick }) {
//   return (
//     <div
//       className="border border-[#B8B8B8] rounded-md hover:shadow-md transition-all flex items-center gap-[15px] px-[12px] py-[18px] xl:py-[24px] xl:px-[42px] cursor-pointer text-left"
//       name="signupType"
//       value="employer"
//       onClick={onClick}
//     >
//       <Image height={64} width={64} src={imageSrc} alt="" className="" />
//       <div>
//         <h3 className="text-base xl:text-[24px] leading-[150%] text-[#000000CC] font-medium leading-9 tracking-tighter">
//           {heading}
//         </h3>
//         <p className="text-[12px] xl:text-base text-[#000000CC] font-sm leading-6 tracking-tighter">{body}</p>
//       </div>
//     </div>
//   )
// }




import React from "react";
import Image from "next/image";
import CustomButtons from "./_components/homepageComps/CommonButtons";
import Home1 from "./_assets/img/Home1.png";
import Home2 from "./_assets/img/Home2.png";
import Home3 from "./_assets/img/Home3.png";
import Illustration from "./_assets/img/Illustration.svg";
import Illustration1 from "./_assets/img/Illustration1.svg";
import Table1 from "./_assets/img/Table1.png";
import Table2 from "./_assets/img/Table2.png";
import hands from "./_assets/img/hands.svg";
import bruce from "./_assets/img/bruce.svg";
import bruce1 from "./_assets/img/bruce1.svg";
import pexels from "./_assets/img/pexels.svg";
import Home from "./_assets/img/Home.svg";
import Manage from "./_assets/svgs/Manage";
import Secured from "./_assets/svgs/Secured";
import Support from "./_assets/svgs/Support";
import CommonHeader from "./_components/homepageComps/CommonHeader";
import CommonParagraph from "./_components/homepageComps/CommonParagraph";
import RightArrow from "./_assets/svgs/RightArrow";
import Link from "next/link";
import Footer from './_components/homepageComps/Footer';
import HomeHeader from "./_components/homepageComps/HomeHeader";

export default function HomePage() {
  const blogPosts = [
    {
      image: bruce,
      title: "What are other companies doing to function with ease?",
      category: "Operations",
    },
    {
      image: bruce1,
      title: "What are other companies doing to function with ease?",
      category: "Business",
    },
    {
      image: pexels,
      title: "What are other companies doing to function with ease?",
      category: "Tech",
    },
  ];

  return (

    <div className="">
      <div className="bg-gradient-radial from-[#FD9] via-[#CBF0BC] to-white">
        <HomeHeader />
        <div className=" flex flex-col items-center justify-center px-54 py-6 pt-8  xl:pt-16">
          <button className="bg-[#B2E89A] text-[#17320B] rounded-full px-4 py-2 text-base not-italic font-semibold leading-6 ">
            Team & shift management
          </button>
          <h1 className="capitalize text-center text-4xl not-italic font-extrabold text-[#36322F] my-6 xl:text-6xl">
            Supercharge Your
            <br /> Team
          </h1>
          <CommonParagraph>
            <div className="text-sm text-center">
              Streamline scheduling, timekeeping, communication, and reporting
              to
              <br /> drive efficiency across your workforce.
            </div>
          </CommonParagraph>
          <div className="flex items-center my-6">
            <Link href="/signup?type=for-profit">
              <CustomButtons>Get Started</CustomButtons>
            </Link>
            <Link href={"/about"}>
              <button className="border border-[#36322F] ml-4 text-[#36322F] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 ">
                Learn more
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-center my-6">
            <div class="flex -space-x-4 rtl:space-x-reverse">
              <Image
                height={53}
                width={53}
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Home1}
                alt=""
              />
              <Image
                height={53}
                width={53}
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Home2}
                alt=""
              />
              <Image
                height={53}
                width={53}
                class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src={Home3}
                alt=""
              />
            </div>
            <p className="text-sm not-italic font-normal leading-6 text-[#706763] mx-4 break-words">
              Join businesses and start scheduling to
              <br /> get your team working efficiently.
            </p>
          </div>

          <div>
            <Image
              height={600}
              width={900}
              className="mx-auto"
              src={Home}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" px-4 xl:px-16">
        <div className="flex flex-col items-center justify-center my-12">
          <button className="bg-[#FFCD66] text-[#332200] rounded-full px-4 py-2 text-base not-italic font-semibold leading-6 my-3">
            Swift Results and operations
          </button>
          <h2 className="text-center text-3xl not-italic font-semibold text-[#36322F]">
            Workflow on Steroids
          </h2>
          <p className="text-center text-sm not-italic font-bold leading-6 text-[#706763]">
            Create an efficient and seamless workflow with your team members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 flex-row my-8 ">
          <div className="p-5 rounded-xl mx-3">
            <Manage />
            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">
              Manage your team in real time
            </h2>
            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
              Emphasizes the platform&apos;s ability to provide
              up-to-the-minute workforce oversight.{" "}
            </p>
          </div>

          <div className="p-5 border border-dashed rounded-xl mx-3">
            <Secured />
            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">
              Secured & Safe Payments
            </h2>
            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
              Assures users that financial transactions are protected.{" "}
            </p>
          </div>

          <div className="p-5 rounded-xl mx-3">
            <Support />
            <h2 className="text-lg not-italic font-bold leading-6 text-[#18181B] py-4">
              24//7 Customer Support
            </h2>
            <p className="text-base not-italic font-normal leading-6 text-[#52525B] py-2">
              Communicates the availability of assistance whenever it&apos;s
              needed.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around gap-4 bg-[#1A212C] rounded-2xl p-8 my-8 xl:flex-row xl:my-20">
          <Image
            src={Illustration}
            alt="Illustration"
            height={477}
            width={384}
          />
          <div className="flex flex-col items-start justify-start p-8">
            <CommonHeader>
              <div className="text-[#D5DBE6]">
                Managing Your Teams
                <br /> Schedule and Shifts
              </div>
            </CommonHeader>
            <CommonParagraph>
              <div className="text-[#EFEDED] py-6">
                Streamline your team&apos;s scheduling and shift management
                with Runshifts. Our intuitive platform makes it easy to
                create, update, and coordinate shifts in real-time. Keep your
                workforce informed and operations running smoothly.
              </div>
            </CommonParagraph>
            <Link href={"/signup?type=for-profit"}>
              <button className="flex items-center border border-[#fff] ml-4 text-[#fff] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 ">
                <p className="px-2">Create your account now</p>
                <RightArrow />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 p-4 xl:flex-row my-20 xl:p-8">
          <div className="flex flex-col items-start justify-start p-8">
            <h2 className="text-center text-xl not-italic font-semibold rounded-full text-[#36322F] my-2 xl:text-5xl xl:my-4 ">
              Fully integrated teams communication and operation features
            </h2>
            <CommonParagraph>
              Runshifts integrates seamless team communication with
              comprehensive operational tools. Keep your workforce connected
              and your business running efficiently all in one platform.
            </CommonParagraph>
          </div>
          <Image
            src={Illustration1}
            alt="Illustration"
            height={545}
            width={473}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#E5F7DD] rounded-2xl p-2 my-8 xl:flex-row xl:p-8 xl:my-20">
          <div className="flex flex-col items-center justify-center bg-[#B2E89A] rounded-2xl  xl:w-1/2 p-6">
            <Image src={Table2} alt="" height={92} width={492} className="" />
            <Image src={Table1} alt="" height={434} width={392} />
          </div>
          <div className="flex flex-col justify-start items-start ml-6 p-8 text-left xl:w-1/2">
            <button className="bg-[#283142] text-[#fff] rounded-full px-2 text-base not-italic font-semibold leading-6 my-5">
              Real-time Analytics
            </button>
            <CommonHeader>
              <p className="text-left">
                Understand your operations with better reports.
              </p>
            </CommonHeader>
            <Link href="/signup?type=for-profit">
              <button className="bg-[#283142] text-[#fff] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 my-5">
                Start using runshifts
              </button>
            </Link>
            <hr />
            <CommonParagraph>
              Gain data-driven insights to optimize your workforce. Runshifts
              provides comprehensive reporting and analytics, giving you the
              visibility to make informed decisions.
            </CommonParagraph>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-6 xl:flex-row">
          <div className="flex flex-col items-start justify-center ">
            <CommonHeader>Non-Profits & Charities</CommonHeader>
            <CommonParagraph>
              <div className="break-words">
                Runshifts supports the unique scheduling needs of non-profit
                and charitable organizations. Streamline your workforce
                management to focus on your mission.
              </div>
            </CommonParagraph>
            <Link href="/signup?type=non-profit">
              <button className="bg-[#283142] text-[#fff] rounded-lg px-4 py-2 text-base not-italic font-semibold leading-6 my-5">
                Start using runshifts for free
              </button>
            </Link>
          </div>
          <Image
            src={hands}
            alt=""
            height={92}
            width={492}
            className="rounded-2xl "
          />
        </div>

        <div className="my-8 xl:my-20">
          <div>
            <p className="w-fit mx-auto bg-[#B2E89A] text-[#17320B] text-center rounded-full px-2 py-1 text-base not-italic font-semibold leading-6 my-5">
              Updates
            </p>
            <CommonHeader>
              <div className="text-[#090914] my-4">Read our blog</div>
            </CommonHeader>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center xl:flex-row xl:gap-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center xl:flex-row"
              >
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Image
                    src={post.image}
                    alt={post.title}
                    height={300}
                    width={350}
                    className="rounded-xl mb-4 w-full h-auto" // Image width set to cover the container
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {post.title}
                    </h5>
                    <p className="text-[#5BC62D] text-xs not-italic font-medium leading-5">
                      {post.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
