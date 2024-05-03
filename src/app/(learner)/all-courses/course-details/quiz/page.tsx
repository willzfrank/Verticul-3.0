import AccordionQuestion from "@/app/_components/courses/AccordionQuestion";
import FillInTheGap from "@/app/_components/courses/interactive-quiz/FillInTheGap";
import SelectAImage from "@/app/_components/courses/interactive-quiz/SelectAImage";
import SelectAOption from "@/app/_components/courses/interactive-quiz/SelectAOption";
import SelectMultipleOptions from "@/app/_components/courses/interactive-quiz/SelectMultipleOptions";
import SortAListQuestion from "@/app/_components/courses/interactive-quiz/SortAListQuestion";
import TextBoxQuestion from "@/app/_components/courses/interactive-quiz/TextBoxQuestion";
import Back from "@/components/buttons/Back";
import Image from "next/image";
import React from "react";

type Props = {};

const Quiz = (props: Props) => {
  const items = [
    {
      key: "1",
      label: "Select the correct image that better represent.",
      children: <SelectAImage />,
    },
    {
      key: "2",
      label: "Which of the following is not a key fundamental of marketing?",
      children: <SelectMultipleOptions />,
    },
    {
      key: "3",
      label:
        "Q1. Which of the following is not a key fundamental of marketing?",
      children: <SelectAOption />,
    },
    {
      key: "4",
      label: "Describe  how digital marketing drive leads",
      children: <TextBoxQuestion />,
    },
    {
      key: "6",
      label: "Fill in the missing words in this paragraphs",
      children: <FillInTheGap />,
    },
    {
      key: "7",
      label: "Arrange each items in the correct sequence.",
      children: <SortAListQuestion />,
    },
  ];

  return (
    <div className="w-full max-w-[600px] lg:mx-auto">
      <div className="flex items-start gap-4 mb-10">
        <Back navigateBack />

        <div className="flex items-start gap-4 border-b pb-2 w-full">
          <Image
            className="w-16 h-16 cursor-pointer"
            src="/assets/images/quiz-icon.png"
            alt="quiz"
            sizes="100vw"
            width="0"
            height="0"
          />

          <div>
            <h2 className="text-2xl font-medium"> Quiz</h2>
            <p className="text-sm text-gray-600">
              Answer all questions in this section before proceeding{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="border rounded mb-5 px-4 py-1">
          <p>Introduction to Marketing fundamentals</p>
        </div>

        <div className="space-y-6">
          {items.map((i, idx) => {
            return (
              <AccordionQuestion
                key={idx}
                idx={idx + 1}
                header={i.label}
                body={i.children}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
