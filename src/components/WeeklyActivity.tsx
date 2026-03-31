interface WeeklyActivityProps {
  streakWeeks?: number;
  message?: string;
  days?: { label: string; completed: boolean }[];
  itemsCompleted?: number;
  minutesLearned?: number;
}

export function WeeklyActivity(_props: WeeklyActivityProps) {
  return (
    <div className="bg-white rounded-16 p-16 flex flex-col gap-12">
      <div className="flex items-center gap-8">
        <span
          className="material-symbols-rounded text-yellow-700"
          style={{ fontSize: 24 }}
        >
          celebration
        </span>
        <h3 className="cds-subtitle-md text-grey-975">Team wins</h3>
      </div>

      <p className="cds-body-primary text-grey-975">
        Congratulations to <span className="cds-action-primary text-blue-700">Zheng</span> &{" "}
        <span className="cds-action-primary text-blue-700">Sedi</span> for
        finishing the Introduction to Robotics course!
      </p>

      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center size-32 rounded-full bg-aqua-700 text-white cds-body-tertiary">
          Z
        </div>
        <div className="flex items-center justify-center size-32 rounded-full bg-purple-700 text-white cds-body-tertiary">
          S
        </div>
        <span className="cds-body-tertiary text-grey-600">
          Completed this week
        </span>
      </div>
    </div>
  );
}
