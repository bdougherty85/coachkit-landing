const steps = [
  {
    number: "1",
    title: "Set up your team",
    description:
      "Add your players and their parent contacts. Import from a spreadsheet or enter them manually in minutes.",
  },
  {
    number: "2",
    title: "Run your game",
    description:
      "Start the clock, tap to substitute, and track goals. CoachKit handles the timekeeping automatically.",
  },
  {
    number: "3",
    title: "Share with parents",
    description:
      "Parents see the schedule, RSVP for games, and sign up for snack duty. Everyone stays in the loop.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No complicated setup. No training required. Just open the app and go.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-orange-200 md:block" />
                )}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
