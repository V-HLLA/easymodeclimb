export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-400  bg-neutral-200 dark:bg-black bottom-0">
      <div className="max-w-6xl mx-auto px-4 py-4 max-sm:py-2 flex flex-col gap-2 sm:gap-4 text-sm dark:text-gray-400">
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
          <p>
            &copy; {new Date().getFullYear()} EasymodeClimb. All rights
            reserved.
          </p>
          <p className="">Built for casual climbers.</p>
        </div>
        <div className="text-xs text-center sm:text-left leading-relaxed">
          <strong>Disclaimer:</strong> EasymodeClimb is non-commercial Learning
          project and is not affiliated with Riot Games or League of Legends.
          Champion data is collected from publicly available third-party sources
          and may not reflect the most up-to-date game changes. All trademarks
          and copyrights belong to their respective owners.
        </div>
      </div>
    </footer>
  );
}
