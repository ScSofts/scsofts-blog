import Link from "next/link";
import { ApplyChalkEffect, chalk_filter } from "@/components/ChalkEffect";

export type TimeLineContent = {
  date: string;
  title: string;
  description: string;
  tags: Array<string>;
  link: string;
};

export interface TimeLineProps {
  contents: Array<TimeLineContent>;
}

export default function TimeLine({ contents }: TimeLineProps) {
  return (
    <ul className={"p-0 lg:p-2"}>
      {contents.map(({ date, title, description, tags, link }, index) => (
        <li
          key={index}
          className={
            "relative flex min-w-12 max-w-[24rem] flex-col gap-4 border-l border-gray-200 pb-8 pl-5 text-xs text-gray-400 md:max-w-[42rem] lg:min-w-[42rem] lg:max-w-[45rem] lg:pl-10 lg:text-2xl xl:max-w-[52rem] dark:border-gray-50"
          }
        >
          <div
            className={
              "absolute -left-2.5 top-1.5 h-5 w-5 rounded-full border border-white bg-gray-50 dark:border-gray-50 dark:bg-gray-50 " +
              chalk_filter
            }
          />
          <ApplyChalkEffect>
            <p className={"text-xl text-fuchsia-200 md:text-2xl"}>{date}</p>
            <Link href={link}>
              <h2
                className={
                  "text-3xl font-bold text-amber-100 underline underline-offset-4 hover:text-amber-200"
                }
              >
                {title}
              </h2>
            </Link>
          </ApplyChalkEffect>
          <h5
            className={
              "max-h-64 overflow-hidden overflow-ellipsis text-2xl text-[1.25rem] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] [display:-webkit-box]"
            }
          >
            {description}
          </h5>
          <div className={"flex gap-2 text-xl font-bold"}>
            <ApplyChalkEffect>Key Words:</ApplyChalkEffect>
            {tags.map((tag, index) => (
              <span
                key={index}
                className={
                  "text-lg text-[#FFD700] underline underline-offset-4"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
