import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Axis Token?",
    answer:
      "Axis is a utility token used for fast, secure, and low-cost digital payments. It also gives access to special services and rewards.",
  },
  {
    question: "How can I get Axis Tokens?",
    answer:
      "You can buy Axis Tokens from supported exchanges or directly through our official platform.",
  },
  {
    question: "Is Axis Token safe to use?",
    answer:
      "Yes. Axis uses blockchain and smart security systems to keep your funds safe and your transactions private.",
  },
  {
    question: "Where can I store Axis Tokens?",
    answer:
      "You can store Axis Tokens in any supported digital wallet that works with our platform.",
  },
  {
    question: "What can I do with Axis Tokens?",
    answer:
      "You can use Axis Tokens to send money, pay for services, join reward programs, and access smart features.",
  },
  {
    question: "Can I use Axis Tokens globally?",
    answer:
      "Yes. Axis Tokens are built for global use, allowing you to make fast and secure payments from anywhere in the world.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative rounded-[24px] bg-[#E1E1E1] px-[14px] py-[16px] lg:px-[63px] lg:py-[56px]">
      <section className="flex">
        <div className="w-full rounded-[24px] bg-[#E1E1E1]">
          <div className="rounded-[24px] bg-[#FFFFFF] p-[16px] lg:p-[36px]">
            <p className="pb-[16px] text-center font-dmsans text-[32px] font-bold leading-[40px] lg:pb-[24px] lg:text-[64px] lg:leading-[72px]">
              Your Questions, Answered
            </p>

            <div className="mx-auto grid grid-cols-1 gap-[24px] md:grid-cols-2">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="w-full cursor-pointer rounded-[24px] border-[1px] border-[#383838] p-[16px] transition-shadow hover:shadow-md"
                  onClick={() => toggle(index)}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-dmsansb text-[18px] font-bold leading-[24px] text-[#000000]">
                      {faq.question}
                    </p>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 font-dmsans text-[16px] font-normal leading-[24px] text-[#000000]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQSection;
