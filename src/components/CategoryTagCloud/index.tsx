import { type Tag, TagCloud } from "react-tagcloud";
import * as React from "react";
import { useRouter } from "next/navigation";

interface CategoryTagCloudProps {
  tags: Array<Tag>;
}

export default function CategoryTagCloud({ tags }: CategoryTagCloudProps) {
  const router = useRouter();
  const handleTagClick = (
    { value }: Tag,
    _event: React.MouseEvent<HTMLDivElement>,
  ) => {
    console.log(`Tag ${value} is selected`);
    router.push(`/timeline/${value}`);
  };


  return (
    <TagCloud
      tags={tags}
      maxSize={64}
      minSize={28}
      className="max-w-[55%] text-center [&_span]:cursor-pointer [&_span]:select-none hover:[&_span]:underline hover:[&_span]:[filter:grayscale(60%)]"
      onClick={handleTagClick}
    ></TagCloud>
  );
}
