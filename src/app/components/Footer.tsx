export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} EasymodeClimb. All rights
            reserved.
          </p>
          <p className="mt-2 sm:mt-0">Built for casual climbers.</p>
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
