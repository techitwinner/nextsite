import { TagFrequencyMap } from "@/app/lib/types";
import Link from "next/link";
import { useParams } from "next/navigation";

const Tags = ({ tagFrequencyMap }: { tagFrequencyMap: TagFrequencyMap }) => {
  const params = useParams();
  const { slug } = params;
  const flatTags = Object.entries(tagFrequencyMap).map(([name, number]) => ({ name, number }));
  flatTags.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="gap-2 flex flex-wrap outline-none">
      {flatTags.map(({ name, number }, index) => {
        const selected = name === slug;

        return (
          <Link href={selected ? "/search" : `/tag/${name}`} key={index}>
            <button className={selected ? "active accent font-bold" : "ghost"}>
              {`${name} (${number})`}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
