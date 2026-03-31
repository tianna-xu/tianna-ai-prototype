import { useState } from "react";
import type { TeamMember, TeamWeeklyItem } from "../data/mockData";

const DAILY_CHALLENGES = [
  {
    question:
      "Boston Dynamics' Spot robot is inspired by which animal?",
    options: ["Cat", "Horse", "Dog", "Spider"],
    correctIndex: 2,
    explanation:
      "Spot is modeled after a dog — it walks on 4 legs, can open doors, climb stairs, and even dance. Boston Dynamics literally calls it a robot dog!",
    xp: 50,
  },
  {
    question: "In a BattleBots competition, what is the most common winning weapon type?",
    options: ["Flamethrower", "Spinning blade / drum", "Hammer", "Net launcher"],
    correctIndex: 1,
    explanation:
      "Spinning blades and drums dominate BattleBots because they store massive kinetic energy and can send opponents flying across the arena!",
    xp: 50,
  },
  {
    question: "NASA's Mars rover Perseverance carries a tiny helicopter. What's its name?",
    options: ["Buzz", "Ingenuity", "Spirit", "Falcon"],
    correctIndex: 1,
    explanation:
      "Ingenuity was the first aircraft to achieve powered flight on another planet — it was only meant for 5 flights but completed over 70!",
    xp: 75,
  },
  {
    question:
      "What's the 'uncanny valley' in robotics?",
    options: [
      "A debugging technique",
      "A factory in Japan",
      "When robots look almost-but-not-quite human and feel creepy",
      "The gap between simulation and real world",
    ],
    correctIndex: 2,
    explanation:
      "The uncanny valley is the eerie feeling humans get when a robot or CGI face looks 95% real but something feels off — our brains notice the tiny flaws.",
    xp: 50,
  },
  {
    question: "Which country has the most industrial robots per worker?",
    options: ["USA", "Japan", "South Korea", "Germany"],
    correctIndex: 2,
    explanation:
      "South Korea leads the world with ~1,000 robots per 10,000 manufacturing workers — heavily driven by their electronics and automotive industries!",
    xp: 75,
  },
];

const RECOMMENDED_COURSES = [
  {
    id: "rc1",
    title: "Modern Robotics: Mechanics & Control",
    provider: "Northwestern University",
    duration: "16 hours",
    rating: 4.8,
    enrolled: "42k",
    tag: "Hot",
    tagColor: "bg-red-700",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "rc2",
    title: "Self-Driving Cars Specialization",
    provider: "University of Toronto",
    duration: "24 hours",
    rating: 4.7,
    enrolled: "89k",
    tag: "Trending",
    tagColor: "bg-purple-700",
    image: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "rc3",
    title: "Robotics with ROS2: Build & Program",
    provider: "Open Robotics",
    duration: "10 hours",
    rating: 4.6,
    enrolled: "18k",
    tag: "New",
    tagColor: "bg-green-700",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&q=80&auto=format&fit=crop",
  },
];

interface TeamMomentumProps {
  members: TeamMember[];
  weeklyProgress: TeamWeeklyItem[];
}

export function TeamMomentum({
  members: _members,
  weeklyProgress: _weeklyProgress,
}: TeamMomentumProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(DAILY_CHALLENGES.length).fill(null)
  );
  const [score, setScore] = useState(0);

  const challenge = DAILY_CHALLENGES[currentQ];
  const selected = answers[currentQ];
  const answered = selected !== null;
  const isCorrect = selected === challenge.correctIndex;
  const totalAnswered = answers.filter((a) => a !== null).length;
  const allDone = totalAnswered === DAILY_CHALLENGES.length;

  function handleSelect(i: number) {
    if (answered) return;
    const next = [...answers];
    next[currentQ] = i;
    setAnswers(next);
    if (i === challenge.correctIndex) {
      setScore((s) => s + challenge.xp);
    }
  }

  return (
    <section className="pb-48">
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
        <div className="flex flex-col md:flex-row md:items-stretch gap-24">
          {/* Left: Recommended courses */}
          <div className="flex-1 border border-grey-100 rounded-16 p-24 flex flex-col gap-16 justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span
                  className="material-symbols-rounded text-blue-700"
                  style={{ fontSize: 20 }}
                >
                  auto_awesome
                </span>
                <h2 className="cds-subtitle-lg text-grey-975">
                  Recommended for your team
                </h2>
              </div>
              <button className="flex items-center gap-4 cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast">
                View all
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: 16 }}
                >
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Featured course */}
            {(() => {
              const featured = RECOMMENDED_COURSES[0];
              return (
                <div className="group relative rounded-12 overflow-hidden cursor-pointer">
                  <div className="relative h-[160px]">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span
                      className={`absolute top-12 left-12 px-8 py-2 rounded-32 cds-body-tertiary text-white ${featured.tagColor}`}
                    >
                      {featured.tag}
                    </span>
                    <div className="absolute bottom-12 left-16 right-16 flex flex-col gap-4">
                      <span className="cds-body-tertiary text-grey-200">
                        {featured.provider}
                      </span>
                      <p className="cds-action-primary text-white">
                        {featured.title}
                      </p>
                      <div className="flex items-center gap-8 cds-body-tertiary text-grey-200">
                        <div className="flex items-center gap-2">
                          <span
                            className="material-symbols-rounded text-yellow-700"
                            style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                          <span>{featured.rating}</span>
                        </div>
                        <span>·</span>
                        <span>{featured.duration}</span>
                        <span>·</span>
                        <span>{featured.enrolled} enrolled</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Two smaller cards side by side */}
            <div className="grid grid-cols-2 gap-12">
              {RECOMMENDED_COURSES.slice(1).map((course) => (
                <div
                  key={course.id}
                  className="group rounded-12 overflow-hidden border border-grey-100 hover:shadow-elevation-1 transition-shadow duration-fast cursor-pointer"
                >
                  <div className="relative h-[90px] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
                    />
                    <span
                      className={`absolute top-8 left-8 px-6 py-2 rounded-32 cds-body-tertiary text-white ${course.tagColor}`}
                    >
                      {course.tag}
                    </span>
                  </div>
                  <div className="p-12 flex flex-col gap-4">
                    <span className="cds-body-tertiary text-grey-600">
                      {course.provider}
                    </span>
                    <p className="cds-action-secondary text-grey-975">
                      {course.title}
                    </p>
                    <div className="flex items-center gap-4 cds-body-tertiary text-grey-600">
                      <span
                        className="material-symbols-rounded text-yellow-700"
                        style={{ fontSize: 12, fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span>{course.rating}</span>
                      <span>·</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI study plan prompt */}
            <div className="bg-blue-25 rounded-12 p-16 flex flex-col gap-12 flex-1">
              <div className="flex items-center gap-8">
                <span
                  className="material-symbols-rounded text-blue-700"
                  style={{ fontSize: 18 }}
                >
                  auto_awesome
                </span>
                <span className="cds-action-secondary text-grey-975">
                  Get a personalized study plan
                </span>
              </div>
              <p className="cds-body-secondary text-grey-600">
                Tell us your goal and we'll draft a study plan with courses and milestones.
              </p>
              <div className="flex gap-8">
                <input
                  type="text"
                  placeholder="e.g. Our team needs to build autonomous robots in 3 months..."
                  className="flex-1 px-12 py-8 border border-grey-400 rounded-8 bg-white cds-body-secondary text-grey-975 placeholder:text-grey-600 hover:border-blue-800 hover:bg-blue-25 cds-focus-ring"
                />
                <button className="flex items-center justify-center gap-4 px-12 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast flex-shrink-0">
                  Draft plan
                </button>
              </div>
            </div>
          </div>

          {/* Right: Daily challenge */}
          <div className="md:w-[380px] flex-shrink-0 border border-grey-100 rounded-16 p-24 flex flex-col justify-between relative overflow-hidden">
            {/* Top: quiz content */}
            <div className="flex flex-col gap-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span
                    className="material-symbols-rounded text-purple-700"
                    style={{ fontSize: 20 }}
                  >
                    quiz
                  </span>
                  <h2 className="cds-subtitle-lg text-grey-975">
                    Daily challenge
                  </h2>
                </div>
                <span className="px-8 py-2 rounded-32 bg-purple-50 text-purple-700 cds-body-tertiary">
                  {score} XP
                </span>
              </div>

              <div className="flex items-center gap-8">
                {DAILY_CHALLENGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQ(i)}
                    className={`flex-1 h-4 rounded-full transition-all duration-fast ${
                      i === currentQ
                        ? "bg-purple-700"
                        : answers[i] !== null
                          ? answers[i] === DAILY_CHALLENGES[i].correctIndex
                            ? "bg-green-700"
                            : "bg-red-700"
                          : "bg-grey-200"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <p className="cds-body-tertiary text-grey-600">
                  Question {currentQ + 1} of {DAILY_CHALLENGES.length}
                </p>
                {answered && (
                  <span className="cds-body-tertiary text-purple-700">
                    +{isCorrect ? challenge.xp : 0} XP
                  </span>
                )}
              </div>

              <p className="cds-body-primary text-grey-975">
                {challenge.question}
              </p>

              <div className="flex flex-col gap-8">
                {challenge.options.map((option, i) => {
                  let optionClass =
                    "border border-grey-400 bg-white text-grey-975 hover:border-blue-700 hover:bg-blue-25 cursor-pointer";

                  if (answered) {
                    if (i === challenge.correctIndex) {
                      optionClass =
                        "border-2 border-green-700 bg-green-25 text-green-700";
                    } else if (i === selected) {
                      optionClass =
                        "border-2 border-red-700 bg-red-25 text-red-700";
                    } else {
                      optionClass =
                        "border border-grey-200 bg-grey-25 text-grey-400";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={answered}
                      className={`flex items-center gap-12 px-16 py-12 rounded-8 transition-all duration-fast text-left ${optionClass}`}
                    >
                      <span
                        className={`flex-shrink-0 flex items-center justify-center size-24 rounded-full cds-body-tertiary ${
                          answered && i === challenge.correctIndex
                            ? "bg-green-700 text-white"
                            : answered && i === selected
                              ? "bg-red-700 text-white"
                              : "bg-grey-100 text-grey-600"
                        }`}
                      >
                        {answered && i === challenge.correctIndex ? (
                          <span
                            className="material-symbols-rounded"
                            style={{ fontSize: 14 }}
                          >
                            check
                          </span>
                        ) : answered && i === selected ? (
                          <span
                            className="material-symbols-rounded"
                            style={{ fontSize: 14 }}
                          >
                            close
                          </span>
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="cds-body-secondary">{option}</span>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div
                  className={`p-12 rounded-8 ${
                    isCorrect ? "bg-green-25" : "bg-blue-25"
                  }`}
                >
                  <div className="flex items-center gap-8 mb-4">
                    <span
                      className={`material-symbols-rounded ${isCorrect ? "text-green-700" : "text-blue-700"}`}
                      style={{ fontSize: 16 }}
                    >
                      {isCorrect ? "emoji_events" : "lightbulb"}
                    </span>
                    <span
                      className={`cds-action-secondary ${isCorrect ? "text-green-700" : "text-blue-700"}`}
                    >
                      {isCorrect ? `Nice! +${challenge.xp} XP` : "Good try!"}
                    </span>
                  </div>
                  <p className="cds-body-tertiary text-grey-600">
                    {challenge.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom: navigation + social */}
            <div className="flex flex-col gap-12 pt-16">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentQ((q) => Math.max(0, q - 1))}
                  disabled={currentQ === 0}
                  className={`flex items-center gap-4 cds-action-secondary transition-colors duration-fast ${
                    currentQ === 0
                      ? "text-grey-200"
                      : "text-grey-600 hover:text-grey-975"
                  }`}
                >
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 16 }}
                  >
                    arrow_back
                  </span>
                  Back
                </button>

                {allDone ? (
                  <div className="flex items-center gap-4 cds-action-secondary text-purple-700">
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: 16 }}
                    >
                      emoji_events
                    </span>
                    {score}/{DAILY_CHALLENGES.reduce((s, c) => s + c.xp, 0)} XP
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      setCurrentQ((q) =>
                        Math.min(DAILY_CHALLENGES.length - 1, q + 1)
                      )
                    }
                    disabled={currentQ === DAILY_CHALLENGES.length - 1}
                    className={`flex items-center gap-4 cds-action-secondary transition-colors duration-fast ${
                      currentQ === DAILY_CHALLENGES.length - 1
                        ? "text-grey-200"
                        : "text-blue-700 hover:text-blue-800"
                    }`}
                  >
                    Next
                    <span
                      className="material-symbols-rounded"
                      style={{ fontSize: 16 }}
                    >
                      arrow_forward
                    </span>
                  </button>
                )}
              </div>

              <p className="cds-body-tertiary text-grey-600">
                4 of 7 teammates completed today's challenge
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
