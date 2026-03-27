const testimonials = [
  {
    quote:
      "Finally, an app that makes it easy to give every kid equal playing time. The parents love seeing the stats at the end of the season.",
    author: "Coach Mike",
    team: "U8 Lightning",
  },
  {
    quote:
      "I used to dread managing subs during games. Now I just tap and swap. It's honestly changed how I coach.",
    author: "Sarah T.",
    team: "U6 Dragons",
  },
  {
    quote:
      "The snack signup alone is worth it. No more 'who's bringing snacks?' texts in the group chat.",
    author: "David K.",
    team: "U10 Strikers",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-orange-500 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Coaches love CoachKit
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-2xl bg-white p-8 shadow-lg"
              >
                <svg
                  className="h-8 w-8 text-orange-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-4 text-gray-700">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.team}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
