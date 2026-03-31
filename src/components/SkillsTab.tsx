import type { SkillArea } from "../data/mockData";

interface SkillsTabProps {
  skills: SkillArea[];
}

const LEVEL_LABELS = ["", "Beginner", "Familiar", "Intermediate", "Advanced", "Expert"];

export function SkillsTab({ skills }: SkillsTabProps) {
  const totalPoints = skills.reduce((s, sk) => s + sk.level, 0);
  const maxPoints = skills.reduce((s, sk) => s + sk.maxLevel, 0);

  return (
    <div className="flex flex-col gap-24">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="cds-subtitle-lg text-grey-975">Your skill map</h3>
          <p className="cds-body-secondary text-grey-600">
            {totalPoints} of {maxPoints} skill points earned across{" "}
            {skills.length} areas
          </p>
        </div>
        <div className="flex items-center gap-8 px-12 py-8 bg-blue-25 rounded-8">
          <span
            className="material-symbols-rounded text-blue-700"
            style={{ fontSize: 20 }}
          >
            trending_up
          </span>
          <span className="cds-action-secondary text-blue-700">
            +3 this month
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="border border-grey-100 rounded-16 p-24 flex flex-col gap-12 hover:shadow-elevation-1 transition-shadow duration-fast"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-12">
                  <div className="flex items-center justify-center size-40 rounded-8 bg-blue-25">
                    <span
                      className="material-symbols-rounded text-blue-700"
                      style={{ fontSize: 20 }}
                    >
                      {skill.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="cds-action-secondary text-grey-975">
                      {skill.name}
                    </span>
                    <span className="cds-body-tertiary text-grey-600">
                      {LEVEL_LABELS[skill.level]}
                    </span>
                  </div>
                </div>
                <span className="cds-body-secondary text-grey-600">
                  {skill.level}/{skill.maxLevel}
                </span>
              </div>

              <div className="flex gap-4">
                {Array.from({ length: skill.maxLevel }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-8 rounded-full ${
                      i < skill.level ? "bg-blue-700" : "bg-grey-100"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {skill.courses.map((course) => (
                  <span
                    key={course}
                    className="px-8 py-2 rounded-32 bg-grey-25 cds-body-tertiary text-grey-600"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
