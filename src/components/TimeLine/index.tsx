import Link from "next/link";

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
        <li key={index}
            className={"relative flex flex-col gap-4 text-xs lg:text-2xl text-gray-400 border-l border-gray-200 dark:border-gray-50 pl-5 lg:pl-10 max-w-[24rem] md:max-w-[42rem] lg:max-w-[45rem] xl:max-w-[52rem] min-w-12 lg:min-w-[42rem] pb-8"}>
          <div
            className="absolute w-5 h-5 bg-gray-50 rounded-full -left-2.5 top-1.5 border border-white dark:border-gray-50 dark:bg-gray-50"></div>
          <p className={"text-fuchsia-200 text-xl md:text-2xl"}>{date}</p>
          <Link href={link}><h2
            className={'text-3xl font-bold text-amber-100 underline underline-offset-4 hover:text-amber-200'}>{title}</h2>
          </Link>
          <h5
            className={'text-[1.25rem] text-2xl overflow-hidden max-h-64 overflow-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]'}>{description}</h5>
          <div className={'flex gap-2 text-xl font-bold'}>
            keywords:
            {tags.map((tag, index) => (
              <span key={index} className={'text-[#FFD700] underline underline-offset-4 text-lg'}>{tag}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

