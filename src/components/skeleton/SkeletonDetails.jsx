import Skeleton from "react-loading-skeleton";

const SkeletonDetails = () => {
  return (
    <div>
      <div className="grid bg-zinc-900  grid-cols-1 sm:grid-cols-3 sm:gap-5 rounded-md">
        <div>
          <Skeleton height={"100%"} />
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 justify-start col-span-2 my-4">
          <Skeleton count={7} />
        </div>
      </div>

      <div className="grid-cols-1 lg:grid-cols-2 grid gap-5">
        <div className="flex flex-col gap-3">
          <Skeleton />
          <div className="relative z-2 rounded-md">
            <Skeleton height={"100%"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between items-center">
          <Skeleton />
        </div>
        <div className="flex flex-row gap-4 h-full overflow-hidden">
          <div className="flex flex-col w-44 lg:w-36 h-80 rounded-b-md">
            <div className="relative w-full h-full max-h-64 rounded-t-md">
            <Skeleton count={8} height={"100%"}/>
            <Skeleton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetails;
