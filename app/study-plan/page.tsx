export default function StudyPlan() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Study Plan</h1>
      <p className="text-lg">This is your personalized study plan.</p>
      <div className="flex flex-col items-start gap-4">
        <p className="text-base">
          Here you can add your study materials and schedule.
        </p>
        <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors">
          Add Material
        </button>
      </div>
    </div>
  );
}
