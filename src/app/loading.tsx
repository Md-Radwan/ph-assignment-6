const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      <main className="container mx-auto px-4 py-7">
        {/* ================= Hero Skeleton ================= */}
        <section className="mb-10 rounded-xl border border-[#242831] bg-[#15171c] p-8 md:p-10">
          <div className="flex min-h-52.5 items-center justify-between gap-8">
            <div className="w-full max-w-xl">
              {/* Small label */}
              <div className="skeleton mb-5 h-3 w-28 rounded bg-[#242831]" />

              {/* Heading */}
              <div className="skeleton mb-2 h-10 w-full max-w-107.5 rounded bg-[#242831]" />
              <div className="skeleton mb-5 h-10 w-4/5 max-w-87.5 rounded bg-[#242831]" />

              {/* Description */}
              <div className="skeleton mb-2 h-3 w-full max-w-115 rounded bg-[#242831]" />
              <div className="skeleton mb-6 h-3 w-3/4 max-w-87.5 rounded bg-[#242831]" />

              {/* Button */}
              <div className="skeleton h-10 w-32 rounded bg-[#242831]" />
            </div>

            {/* Hero image */}
            <div className="hidden md:block">
              <div className="skeleton h-44 w-44 rounded-xl bg-[#242831]" />
            </div>
          </div>
        </section>

        {/* ================= Section Heading ================= */}
        <section className="mb-5">
          <div className="flex items-center gap-3">
            <div className="skeleton h-7 w-7 rounded-full bg-[#1c1f26]" />
            <div className="skeleton h-7 w-36 rounded bg-[#1c1f26]" />
          </div>

          <div className="skeleton mt-2 h-3 w-64 rounded bg-[#1c1f26]" />
        </section>

        {/* ================= Workout Grid ================= */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <WorkoutCardSkeleton key={index} />
          ))}
        </section>
      </main>

      {/* ================= Footer Skeleton ================= */}
      <footer className="mt-10 border-t border-[#1c1f26]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="skeleton h-5 w-5 rounded bg-[#1c1f26]" />
            <div className="skeleton h-3 w-14 rounded bg-[#1c1f26]" />
          </div>

          <div className="skeleton h-3 w-64 rounded bg-[#1c1f26]" />
        </div>
      </footer>
    </div>
  );
};

/* ================= Workout Card Skeleton ================= */

const WorkoutCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-[#242831] bg-[#15171c]">
      {/* Image */}
      <div className="skeleton h-56 w-full rounded-none bg-[#242831]" />

      {/* Card Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="mb-3 flex gap-2">
          <div className="skeleton h-5 w-14 rounded-full bg-[#242831]" />
          <div className="skeleton h-5 w-14 rounded-full bg-[#242831]" />
        </div>

        {/* Title */}
        <div className="skeleton mb-2 h-5 w-3/4 rounded bg-[#242831]" />

        {/* Equipment */}
        <div className="skeleton mb-4 h-3 w-24 rounded bg-[#242831]" />

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-[#242831]" />

        {/* Meta information */}
        <div className="flex items-center gap-4">
          <div className="skeleton h-3 w-12 rounded bg-[#242831]" />
          <div className="skeleton h-3 w-14 rounded bg-[#242831]" />
          <div className="skeleton h-3 w-10 rounded bg-[#242831]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;