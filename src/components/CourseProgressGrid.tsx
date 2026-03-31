import type { CourseProgressItem } from "../data/mockData";

interface CourseProgressGridProps {
  courses: CourseProgressItem[];
}

export function CourseProgressGrid({ courses }: CourseProgressGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
      {courses.map((course) => {
        const isComplete = course.completed === course.total;
        const percent = (course.completed / course.total) * 100;
        return (
          <div key={course.id} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="cds-body-secondary text-grey-975">
                {course.name}
              </span>
              <div className="flex items-center gap-4">
                <span className="cds-body-secondary text-grey-600">
                  {course.completed}/{course.total}
                </span>
                <span
                  className={`material-symbols-rounded ${
                    isComplete ? "text-green-700" : "text-blue-700"
                  }`}
                  style={{
                    fontSize: 16,
                    ...(isComplete
                      ? { fontVariationSettings: "'FILL' 1" }
                      : {}),
                  }}
                >
                  {isComplete ? "check_circle" : "info"}
                </span>
              </div>
            </div>
            <div className="h-4 bg-grey-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-700"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
