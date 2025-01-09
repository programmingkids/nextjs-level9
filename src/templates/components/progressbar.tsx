type ProgressBarProps = {
  bgColor: string;
};

export const LoadingProgressBar = function ({ bgColor }: ProgressBarProps) {
  return (
    <div className="relative h-screen" aria-label="読み込み中">
      <div className="absolute w-4/5 m-auto top-2/4 left-0 right-0">
        <div className="mb-5 h-2 overflow-hidden rounded-full bg-white">
          <div
            className={`h-2 animate-pulse rounded-full progressbar-anim ${bgColor}`}
            style={{ width: 0 }}
          ></div>
        </div>
      </div>
    </div>
  );
};
