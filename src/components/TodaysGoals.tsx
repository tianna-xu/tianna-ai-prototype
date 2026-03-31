import type { GoalItem } from "../data/mockData";

interface TodaysGoalsProps {
  goals: GoalItem[];
}

export function TodaysGoals(_props: TodaysGoalsProps) {
  return (
    <div className="bg-white rounded-16 p-16 flex flex-col gap-12">
      <div className="flex items-center gap-8">
        <span
          className="material-symbols-rounded text-blue-700"
          style={{ fontSize: 18 }}
        >
          trending_up
        </span>
        <h3 className="cds-subtitle-md text-grey-975">Your stats</h3>
      </div>

      <div className="flex items-stretch gap-8">
        <div className="flex-1 flex flex-col items-center gap-4 bg-grey-25 rounded-8 py-12 px-8">
          <span
            className="material-symbols-rounded text-red-700"
            style={{ fontSize: 28, fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
          <span className="cds-title-xs text-grey-975">5</span>
          <span className="cds-body-tertiary text-grey-600">day streak</span>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 bg-grey-25 rounded-8 py-12 px-8">
          <span
            className="material-symbols-rounded text-purple-700"
            style={{ fontSize: 28 }}
          >
            workspace_premium
          </span>
          <span className="cds-title-xs text-grey-975">#4</span>
          <span className="cds-body-tertiary text-grey-600">of 7</span>
        </div>

        <div className="flex-1 flex flex-col items-center gap-4 bg-grey-25 rounded-8 py-12 px-8">
          <span
            className="material-symbols-rounded text-green-700"
            style={{ fontSize: 28 }}
          >
            speed
          </span>
          <span className="cds-title-xs text-green-700">+23%</span>
          <span className="cds-body-tertiary text-grey-600">this week</span>
        </div>
      </div>
    </div>
  );
}
