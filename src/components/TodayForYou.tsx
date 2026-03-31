const suggestions = [
  {
    id: "continue",
    icon: "play_circle",
    label: "Pick up where you left off",
    title: "Email Marketing — Module 3, Lesson 2",
    description:
      "You paused mid-lesson last Thursday. It's a short one — about 12 minutes to finish.",
    action: "Continue",
  },
  {
    id: "strength",
    icon: "trending_up",
    label: "Build on a strength",
    title: "Data Storytelling — next challenge",
    description:
      "You've completed all 13 items here. There's a practice exercise that could sharpen this further.",
    action: "Start exercise",
  },
  {
    id: "unfinished",
    icon: "target",
    label: "One step closer",
    title: "Social Media Strategy",
    description:
      "You're 4 of 9 modules in. One more puts you past the halfway mark this week.",
    action: "Resume",
  },
];

export function TodayForYou() {
  return (
    <section className="pb-48">
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
        <h2 className="cds-subtitle-lg text-grey-975 mb-4">
          Your focus for today
        </h2>
        <p className="cds-body-secondary text-grey-600 mb-16">
          Three things worth your time right now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-12 p-24 bg-white border border-grey-100 rounded-16 transition-shadow duration-normal hover:shadow-elevation-1"
            >
              <div className="flex items-center gap-8">
                <span
                  className="material-symbols-rounded text-blue-700"
                  style={{ fontSize: 20 }}
                >
                  {item.icon}
                </span>
                <span className="cds-body-tertiary text-grey-600">
                  {item.label}
                </span>
              </div>

              <p className="cds-subtitle-sm text-grey-975">{item.title}</p>

              <p className="cds-body-secondary text-grey-600 flex-1">
                {item.description}
              </p>

              <button className="self-start flex items-center gap-4 cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast">
                {item.action}
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: 16 }}
                >
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
