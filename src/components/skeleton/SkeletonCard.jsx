import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((items, idx) => (
      <div className="relative bg-zinc-900 flex flex-col gap-1 h-[22rem] my-4 rounded-lg overflow-hidden" key={idx}>
        <div>
          <Skeleton height={280} />
        </div>
        <div>
          <Skeleton count={3} />
        </div>
      </div>
    ));
};

export default SkeletonCard;
