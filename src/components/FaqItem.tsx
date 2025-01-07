import { useState } from "react";
import { ChevronRight } from "@geist-ui/icons";
import { FaqItemProps } from "@/lib/types";

export default function FaqItem({ question, answer, index }: FaqItemProps) {
  const [faqOpened, setFaqOpened] = useState(false);

  const toggleFaq = () => {
    setFaqOpened(!faqOpened);
  };

  return (
    <div className="w-full">
      {/* Question */}
      <div
        className={`${
          faqOpened ? "rounded-b-none border-b" : ""
        } w-full flex justify-between items-center text-left text-sm px-2 py-3 font-semibold text-gray-800 bg-white cursor-pointer focus:outline-none rounded-lg`}
        onClick={toggleFaq}
      >
        <div className="flex items-center">
          <span className="text-gray-400 px-2">
            {String(index).padStart(2, "0")}
          </span>
          {question}
        </div>
        <ChevronRight
          size={16}
          className={`${
            faqOpened ? "rotate-90" : ""
          } transition-transform duration-300`}
        />
      </div>

      {/* Answer */}
      <div
        className={`${
          faqOpened ? "block" : "hidden"
        } w-full p-4 text-sm text-gray-600 bg-white rounded-b-lg transition-all duration-500 ease-in-out`}
      >
        {answer}
      </div>
    </div>
  );
}
