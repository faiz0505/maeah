import CustomImage from "@/components/CustomImage";
import RequestForm from "@/components/RequestForm";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="py-10 paddings space-y-12">
      <section className="grid md:grid-cols-2 gap-8">
        <aside className="space-y-8">
          <h1 className="text-3xl md:text-4xl text-dark-purple lg:text-5xl text-center md:text-start font-semibold">
            The #1 virtual mental health benefit
          </h1>
          <p className="lg:text-xl text-lg text-justify md:text-start text-pretty">
            BetterHelp has served more than 4,000,000 consumers, and covers +280
            million lives across 1,000+ partnerships with employers, health
            plans, universities, nonprofits, EAPs, insurance brokers, and
            benefits consultants.
            <br />
            <br /> The world's largest online therapy platform is now available
            for large groups. Easy to use, simple to manage.
          </p>
          <ul className="text-xl text-dark-purple space-y-4">
            <li className="flex items-center gap-2">
              <CircleCheck
                size={26}
                className="text-dark-purple bg-dark-purple/10 rounded-full flex-none"
              />
              Easy access for employers to manage all forms of care
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck
                size={26}
                className="text-dark-purple bg-dark-purple/10 rounded-full flex-none"
              />
              Flexible group sizes for care that meets your organization's needs
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck
                size={26}
                className="text-dark-purple bg-dark-purple/10 rounded-full flex-none"
              />
              HITRUST certified
            </li>
          </ul>
        </aside>
        <aside>
          <RequestForm />
        </aside>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <aside className="w-full min-h-[200px] md:h-full">
          <CustomImage
            src={"/assets/connecting-teams.svg"}
            alt={"teams"}
            fill
          />
        </aside>
        <aside className="">
          <p className="lg:text-xl text-lg text-justify md:text-start text-pretty">
            Through this form, BetterHelp will collect information including
            your name, email address, and employment details. This information
            will only be retained for as long as needed to fulfill the purposes
            of advertising, sales outreach and client support. By clicking
            request a demo, you consent to allow BetterHelp Business to store
            and process the personal information submitted above to provide you
            the content requested. For more information about how we use and
            retain your information, please see our{" "}
            <Link href={"#"} className="text-dark-purple">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href={"#"} className="text-dark-purple">
              Terms of Use.
            </Link>
          </p>
        </aside>
      </section>
      <section className="grid md:grid-cols-2 gap-8">
        <aside className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="h-16 w-16 rounded-3xl rounded-tl-full bg-lavender-mist -rotate-[20deg] mt-10"></div>
          <div className="flex items-center gap-4">
            <div className="space-y-4">
              <figure className="h-36 w-40 rounded-3xl rounded-tl-[70px] relative overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="relative">
                <figure className="h-36 w-40 rounded-3xl relative overflow-hidden bg-blue-400 shadow-lg">
                  <img
                    src="/assets/relaxed.svg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="h-14 w-14 bg-blue-400 shadow-lg rounded-full absolute -left-12 top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative">
              <figure className="h-44 w-40 rounded-3xl rounded-br-[70px] relative overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="h-14 w-14 bg-dark-purple rounded-full absolute -bottom-2 -right-2"></div>
            </div>
          </div>
        </aside>
        <aside className="space-y-8">
          <h1 className="text-3xl md:text-4xl text-dark-purple lg:text-5xl text-center md:text-start font-semibold">
            The world's largest online therapy service.
          </h1>
          <p className="lg:text-xl text-lg text-justify md:text-start text-pretty">
            Tap into the world's largest network of licensed, accredited, and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more.
            <br />
            <br />
            With our therapists, you get the same professionalism and quality
            you would expect from an in-office therapist, but with the ability
            to communicate when and how you want.
          </p>
        </aside>
      </section>
      <section className="paddings shadow flex flex-col items-center md:items-start gap-4 py-6 rounded-3xl">
        {/* Icon */}
        <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
          <CalendarCheck className="text-dark-purple w-8 h-8" />
        </div>

        {/* Text + Button */}
        <div className="flex flex-col gap-4">
          <div className="text-center md:text-start">
            <h2 className="text-xl sm:text-2xl font-semibold text-dark-purple">
              Request a demo today and see what BetterHelp can do for your team.
            </h2>
            <p className="mt-2 text-gray-700 max-w-2xl">
              Schedule a call with one of our team members and find out how
              BetterHelp can bring behavioral health care to your company.
            </p>
          </div>

          <Button size={"xl"} className={"rounded-full w-fit mx-auto md:mx-0"}>
            Request Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
