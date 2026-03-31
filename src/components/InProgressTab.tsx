import type { InProgressCourse } from "../data/mockData";

interface InProgressTabProps {
  courses: InProgressCourse[];
}

export function InProgressTab({ courses }: InProgressTabProps) {
  const activeCourses = courses.filter((c) => c.completed > 0);
  const notStarted = courses.filter((c) => c.completed === 0);

  return (
    <div className="flex flex-col gap-24">
      {activeCourses.length > 0 && (
        <div className="flex flex-col gap-16">
          <h3 className="cds-subtitle-lg text-grey-975">
            Continue learning ({activeCourses.length})
          </h3>
          <div className="flex flex-col gap-12">
            {activeCourses.map((course) => (
              <CourseRow key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}

      {notStarted.length > 0 && (
        <div className="flex flex-col gap-16">
          <h3 className="cds-subtitle-lg text-grey-975">
            Not started ({notStarted.length})
          </h3>
          <div className="flex flex-col gap-12">
            {notStarted.map((course) => (
              <CourseRow key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CourseRow({ course }: { course: InProgressCourse }) {
  const pct = (course.completed / course.total) * 100;

  return (
    <div className="border border-grey-100 rounded-16 p-24 flex items-start gap-16 hover:shadow-elevation-1 transition-shadow duration-fast cursor-pointer">
      <div
        className={`flex-shrink-0 flex items-center justify-center size-48 rounded-8 ${course.iconBg}`}
      >
        <span
          className="material-symbols-rounded text-white"
          style={{ fontSize: 24 }}
        >
          {course.icon}
        </span>
      </div>

      <div className="flex-1 min-w-0 flex flex-col gap-8">
        <div className="flex items-start justify-between gap-16">
          <div className="flex flex-col gap-2">
            <span className="cds-action-primary text-grey-975">
              {course.name}
            </span>
            <span className="cds-body-tertiary text-grey-600">
              Last accessed {course.lastAccessed}
            </span>
          </div>
          <span className="cds-body-secondary text-grey-600 flex-shrink-0">
            {course.completed}/{course.total} lessons
          </span>
        </div>

        <div className="h-4 bg-grey-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-700"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span
              className="material-symbols-rounded text-grey-600"
              style={{ fontSize: 14 }}
            >
              play_circle
            </span>
            <span className="cds-body-secondary text-grey-600">
              Next: {course.nextLesson}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-rounded text-grey-600"
              style={{ fontSize: 14 }}
            >
              schedule
            </span>
            <span className="cds-body-tertiary text-grey-600">
              ~{course.estimatedMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
