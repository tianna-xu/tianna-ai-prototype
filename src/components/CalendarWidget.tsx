interface CalendarWidgetProps {
  currentDay: number;
  activityDays: Record<number, "partial" | "full">;
}

export function CalendarWidget({
  currentDay,
  activityDays,
}: CalendarWidgetProps) {
  const dayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const startDay = 0; // Mar 1, 2026 = Sunday
  const daysInMonth = 31;

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const hasActivity = (day: number) => day in activityDays;
  const isFullActivity = (day: number) => activityDays[day] === "full";

  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center justify-between">
        <h3 className="cds-subtitle-md text-grey-975">March 2026</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center size-32 rounded-full hover:bg-grey-25 text-grey-975 transition-colors duration-fast">
            <span
              className="material-symbols-rounded"
              style={{ fontSize: 20 }}
            >
              chevron_left
            </span>
          </button>
          <button className="flex items-center justify-center size-32 rounded-full hover:bg-grey-25 text-grey-975 transition-colors duration-fast">
            <span
              className="material-symbols-rounded"
              style={{ fontSize: 20 }}
            >
              chevron_right
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-center">
        {dayLabels.map((label) => (
          <div key={label} className="cds-body-tertiary text-grey-600 py-4">
            {label}
          </div>
        ))}
        {cells.map((day, i) => (
          <div key={i} className="flex flex-col items-center py-2">
            {day !== null ? (
              <>
                <span
                  className={`flex items-center justify-center size-28 rounded-full ${
                    day === currentDay
                      ? "bg-blue-700 text-white cds-action-secondary"
                      : hasActivity(day)
                        ? "text-grey-975 cds-action-secondary"
                        : "text-grey-600 cds-body-secondary"
                  }`}
                >
                  {day}
                </span>
                {hasActivity(day) && day !== currentDay && (
                  <span
                    className={`mt-2 rounded-full ${
                      isFullActivity(day)
                        ? "w-12 h-2 bg-blue-700"
                        : "size-4 bg-blue-200"
                    }`}
                  />
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-16 cds-body-tertiary text-grey-600">
        <div className="flex items-center gap-4">
          <span className="size-4 rounded-full bg-blue-200" />
          <span>1+ items completed</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-12 h-2 bg-blue-700 rounded-full" />
          <span>All daily goals completed</span>
        </div>
      </div>
    </div>
  );
}
