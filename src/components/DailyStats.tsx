interface DailyStatsProps {
  date: string;
  minutesLearned: number;
  itemsCompleted: number;
  highestGrade: number;
}

export function DailyStats({
  date,
  minutesLearned,
  itemsCompleted,
  highestGrade,
}: DailyStatsProps) {
  return (
    <div className="flex flex-col gap-12">
      <h3 className="cds-subtitle-md text-grey-975">{date} stats</h3>
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-2">
          <span className="cds-body-tertiary text-grey-600">
            Minutes learned
          </span>
          <span className="cds-title-xs text-grey-975">{minutesLearned}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="cds-body-tertiary text-grey-600">
            Items completed
          </span>
          <span className="cds-title-xs text-grey-975">{itemsCompleted}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="cds-body-tertiary text-grey-600">Highest grade</span>
        <span className="cds-title-xs text-grey-975">{highestGrade}%</span>
      </div>
    </div>
  );
}
