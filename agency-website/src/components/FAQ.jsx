import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different. After understanding your requirements, we provide a clear scope and project estimate.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites take around 3–6 weeks depending on complexity, content, and feedback cycles.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We can redesign an existing website while keeping what works and improving the areas that don't.",
  },
  {
    question: "Do you provide both design and development?",
    answer:
      "Yes. We can handle the complete process from strategy and UX through design, development, testing, and launch.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, founders, small businesses, and growing teams.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-4">
      {faqs.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={question}
            className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-1.5 transition-all duration-300 hover:border-orange-500/20"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-[var(--text)] group"
            >
              <span className="text-lg font-bold tracking-tight">
                {question}
              </span>
              <span className={`flex h-9 w-9 items-center justify-center rounded-full bg-[var(--panel-alt)] border border-[var(--line)] text-slate-500 transition-all duration-300 group-hover:text-orange-500 ${
                isOpen ? "rotate-180 bg-orange-500/10 text-orange-500 border-orange-500/20" : ""
              }`}>
                <FiChevronDown size={18} />
              </span>
            </button>

            {/* Smooth Height Transition Panel */}
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? "160px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-5 pb-5 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
                {answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
