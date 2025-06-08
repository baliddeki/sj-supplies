import Link from "next/link";
import Image from "next/image";
import { CardTitle } from "./Typography";

// Default card size
const CARD_WIDTH = "min-w-[160px] max-w-[160px]";

export const ProductCard = ({
  img,
  title,
  description,
  href,
}: {
  img: string;
  title: string;
  description: string;
  href: string;
}) => (
  <Link
    href={href}
    className={`flex flex-col ${CARD_WIDTH} rounded-lg bg-white group shadow-none hover:shadow-md transition-shadow duration-200`}
    style={{ textDecoration: "none" }}
  >
    <div className="w-full aspect-square relative rounded-lg overflow-hidden bg-[#f8f8f8]">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-200 group-hover:scale-105"
        sizes="160px"
        priority={false}
      />
    </div>
    <div className="flex flex-col gap-1 px-2 py-2">
      <CardTitle>{title}</CardTitle>
      <p className="text-sm text-[#60748a]">{description}</p>
    </div>
  </Link>
);
