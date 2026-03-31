import type { SavedCourse } from "../data/mockData";

interface SavedTabProps {
  courses: SavedCourse[];
}

export function SavedTab({ courses }: SavedTabProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h3 className="cds-subtitle-lg text-grey-975">
          Saved for later ({courses.length})
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-grey-100 rounded-16 p-24 flex flex-col gap-16 hover:shadow-elevation-1 transition-shadow duration-fast cursor-pointer"
          >
            <div className="flex items-start gap-16">
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
              <div className="flex flex-col gap-4 flex-1 min-w-0">
                <span className="cds-action-primary text-grey-975">
                  {course.name}
                </span>
                <span className="cds-body-tertiary text-grey-600">
                  {course.provider}
                </span>
              </div>
              <button className="flex-shrink-0 text-blue-700 hover:text-blue-800 transition-colors duration-fast">
                <span
                  className="material-symbols-rounded"
                  style={{
                    fontSize: 20,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  bookmark
                </span>
              </button>
            </div>

            <div className="flex items-center gap-12 cds-body-tertiary text-grey-600">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-rounded text-yellow-700"
                  style={{
                    fontSize: 12,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  star
                </span>
                <span>{course.rating}</span>
              </div>
              <span>·</span>
              <span>{course.duration}</span>
              <span>·</span>
              <span>Saved {course.savedDate}</span>
            </div>

            <div className="flex items-center gap-8 px-12 py-8 bg-grey-25 rounded-8">
              <span
                className="material-symbols-rounded text-blue-700"
                style={{ fontSize: 14 }}
              >
                auto_awesome
              </span>
              <span className="cds-body-tertiary text-grey-600">
                {course.reason}
              </span>
            </div>

            <button className="self-start flex items-center gap-4 cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast">
              Start course
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
  );
}
