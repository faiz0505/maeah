import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Largest Network",
    description: "30,000 and counting therapists on the platform.",
    imgSrc:
      "https://assets.betterhelp.com/bhorg/therapy-network.png?v=71aae1049dcd",
    alt: "Largest Network",
  },
  {
    title: "Match within 24 hours",
    description: "88% of clients are matched within 24 hours.",
    imgSrc:
      "https://assets.betterhelp.com/bhorg/match-therapist.png?v=71aae1049dcd",
    alt: "Match within 24 hours",
  },
  {
    title: "Communicate your way",
    description: "Enjoy live sessions via video, phone, and live chat.",
    imgSrc:
      "https://assets.betterhelp.com/bhorg/phone-img-2x.png?v=71aae1049dcd",
    alt: "Communicate your way",
  },
  {
    title: "Robust reporting",
    description:
      "Live & robust utilisation reporting with all the details you need.",
    imgSrc:
      "https://assets.betterhelp.com/bhorg/quick-rollout.png?v=71aae1049dcd",
    alt: "Robust reporting",
  },
  {
    title: "Pay for what you use",
    description: "Simple pay-per-use pricing plan to offer your clients.",
    imgSrc: "https://assets.betterhelp.com/bhorg/group-6.png?v=71aae1049dcd",
    alt: "Pay for what you use",
  },
  {
    title: "Zero integration rollout",
    description: "No hassle rollout within 14 days from an agreement.",
    imgSrc: "https://assets.betterhelp.com/bhorg/roullout-1.png?v=71aae1049dcd",
    alt: "Zero integration rollout",
  },
];

const UserBenefits = () => {
  return (
    <section className="px-4 pb-32 -mb-6 text-center bg-soft-white pt-12">
      <h2 className="text-2xl lg:text-3xl text-dark-purple pt-6 md:pt-0 mb-6">
        What you get
      </h2>

      <p className="max-w-3xl m-auto text-lg pb-8">
        We offer a simple pricing plan with comprehensive mental health support
        for your members. You will receive a designated partner success manager
        and support team to ensure seamless adoption and quality service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-6 lg:gap-12 lg:mt-16 max-w-6xl m-auto mb-12 text-center px-6 lg:px-0">
        {benefits.map((benefit, index) => (
          <div key={index} className="md:pb-6">
            <span className="block">
              <Image
                src={benefit.imgSrc}
                alt={benefit.alt}
                width={220}
                height={220}
                className="h-44 lg:h-52 m-auto pb-4 object-contain"
              />
            </span>
            <h3 className="text-lg lg:text-xl text-dark-purple pt-6 md:pt-0 mb-2">
              {benefit.title}
            </h3>
            <p className="max-w-3xl m-auto text-lg ">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      <Link href="/demo" className="bg-dark-purple py-4 px-6 hover:bg-purple-900 rounded-full text-white">
        Request a demo
      </Link>
    </section>
  );
};

export default UserBenefits;
