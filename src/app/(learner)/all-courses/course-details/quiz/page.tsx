import AccordionQuestion from "@/app/_components/courses/AccordionQuestion";
import FillInTheGap from "@/app/_components/courses/interactive-quiz/FillInTheGap";
import SelectAImage from "@/app/_components/courses/interactive-quiz/SelectAImage";
import SelectAOption from "@/app/_components/courses/interactive-quiz/SelectAOption";
import SelectMultipleOptions from "@/app/_components/courses/interactive-quiz/SelectMultipleOptions";
import SortAListQuestion from "@/app/_components/courses/interactive-quiz/SortAListQuestion";
import TextBoxQuestion from "@/app/_components/courses/interactive-quiz/TextBoxQuestion";
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
    <div className="w-full lg:w-[60%] lg:mx-auto">
      <div className="space-y-6">
        {items.map((i, idx) => {
          return (
            <AccordionQuestion
              key={idx}
              idx={idx}
              header={i.label}
              body={i.children}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
