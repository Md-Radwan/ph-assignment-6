import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4 text-white">
      <div className="text-center">
        {/* 404 */}
        <h1 className="text-[120px] font-black leading-none text-[#baff00] md:text-[180px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold uppercase md:text-4xl">
          Workout Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 md:text-base">
          Sorry, the workout you&apos;re looking for doesn&apos;t exist or may have
          been removed.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="btn border-none bg-[#baff00] px-8 text-black hover:bg-[#a8e600]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;