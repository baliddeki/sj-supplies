import { Star } from "lucide-react";
export const TestimonialCard = ({
  avatar,
  name,
  date,
  rating,
  text,
  likes,
  comments,
}: {
  avatar: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  likes: number;
  comments: number;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        style={{ backgroundImage: `url('${avatar}')` }}
      ></div>
      <div>
        <p className="text-[#111418] text-base font-medium leading-normal">{name}</p>
        <p className="text-[#60748a] text-sm font-normal leading-normal">{date}</p>
      </div>
    </div>
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-[#111418] text-[#111418]" : "text-[#bac4cf]"}`}
        />
      ))}
    </div>
    <p className="text-[#111418] text-base font-normal leading-normal">{text}</p>
    <div className="flex gap-9 text-[#60748a]">
      <span>👍 {likes}</span>
      <span>💬 {comments}</span>
    </div>
  </div>
);
