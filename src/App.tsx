import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { CircularProgress } from "./components/CircularProgress";
import { TodaysGoals } from "./components/TodaysGoals";
import { WeeklyActivity } from "./components/WeeklyActivity";
import { CourseProgressGrid } from "./components/CourseProgressGrid";
import { CalendarWidget } from "./components/CalendarWidget";
import { DailyStats } from "./components/DailyStats";
import { RecentCertificates } from "./components/RecentCertificates";
import { TeamActivity } from "./components/TeamActivity";
import { TeamMomentum } from "./components/TeamMomentum";
import { SkillsTab } from "./components/SkillsTab";
import { InProgressTab } from "./components/InProgressTab";
import { SavedTab } from "./components/SavedTab";
import { CertificatesTab } from "./components/CertificatesTab";
import {
  todaysGoals,
  weeklyActivity,
  courseProgress,
  dailyStats,
  calendarActivity,
  recentCertificates,
  teamMembers,
  teamMessages,
  teamWeeklyProgress,
  skillAreas,
  inProgressCourses,
  savedCourses,
  earnedCertificates,
} from "./data/mockData";

const TABS = ["Overview", "Skills", "In progress", "Saved", "Certificates"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero section — light blue background */}
      <section className="w-full py-32" style={{ backgroundColor: "#f0f6ff" }}>
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24 flex flex-col gap-8">
          <p className="cds-body-primary text-grey-975">
            Hi Tianna, here's your progress in
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-12 pb-16">
            <h1 className="cds-title-sm text-grey-975 whitespace-nowrap">
              Applied Robotics & Automation
            </h1>
            <div
              className="flex items-center gap-6 h-32 px-12 rounded-32 self-start flex-shrink-0"
              style={{ backgroundColor: "#2d3440" }}
            >
              <span
                className="material-symbols-rounded text-white flex-shrink-0"
                style={{ fontSize: 14 }}
              >
                rocket_launch
              </span>
              <span className="cds-action-secondary text-white whitespace-nowrap">
                +28% job demand
              </span>
            </div>
            <span className="flex items-center gap-4 cds-body-secondary text-grey-600">
              <span
                className="material-symbols-rounded"
                style={{ fontSize: 16 }}
              >
                group
              </span>
              7 teammates learning together
            </span>
          </div>

          {/* Two-column: progress card + sidebar */}
          <div className="flex flex-col md:flex-row gap-16">
            {/* Progress card */}
            <div className="bg-white border border-grey-100 rounded-16 p-24 flex flex-col md:flex-row md:items-center gap-12 flex-1 min-w-0">
              <div className="flex flex-col gap-16 flex-1 min-w-0">
                <div className="flex flex-col gap-16">
                  <CircularProgress percent={46} />
                  <div className="flex flex-col gap-4">
                    <p className="cds-title-xs text-grey-975">
                      Robot Kinematics & Motion
                    </p>
                    <p className="cds-body-primary text-grey-600">
                      Applied Robotics Certificate
                    </p>
                  </div>
                </div>

                {/* Course preview — mobile only */}
                <div
                  className="md:hidden w-full rounded-8 overflow-hidden flex-shrink-0 relative"
                  style={{ height: 206 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop"
                    alt="Robot arm"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-16">
                    <p className="cds-subtitle-md text-white">Robot Kinematics & Motion</p>
                    <p className="cds-body-secondary text-grey-200">Module 6 of 10</p>
                  </div>
                </div>

                <button className="self-start flex items-center justify-center px-16 py-8 bg-blue-700 text-white rounded-8 cds-action-secondary hover:bg-blue-800 transition-colors duration-fast">
                  Resume learning
                </button>
              </div>

              {/* Course preview — desktop only */}
              <div
                className="hidden md:block flex-shrink-0 rounded-8 overflow-hidden relative"
                style={{ width: 360, height: 210 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format&fit=crop"
                  alt="Robot arm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-16">
                  <p className="cds-subtitle-md text-white">Robot Kinematics & Motion</p>
                  <p className="cds-body-secondary text-grey-200">Module 6 of 10</p>
                </div>
              </div>
            </div>

            {/* Right sidebar: goals + activity */}
            <div className="flex flex-col gap-16 md:w-[320px] flex-shrink-0">
              <TodaysGoals goals={todaysGoals} />
              <WeeklyActivity
                streakWeeks={weeklyActivity.streakWeeks}
                message={weeklyActivity.message}
                days={weeklyActivity.days}
                itemsCompleted={weeklyActivity.itemsCompleted}
                minutesLearned={weeklyActivity.minutesLearned}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="py-32">
        <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
          {/* Tabs */}
          <div className="flex gap-0 border-b border-grey-100 mb-24">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-16 py-12 cds-action-secondary transition-colors duration-fast ${
                  activeTab === tab
                    ? "text-grey-975 border-b-2 border-grey-975"
                    : "text-grey-600 hover:text-grey-975"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Overview" && (
            <div className="flex flex-col md:flex-row gap-32">
              <div className="flex flex-col gap-32 flex-1 min-w-0">
                <CourseProgressGrid courses={courseProgress} />

                <div className="bg-grey-25 rounded-16 p-24 flex gap-12">
                  <span
                    className="material-symbols-rounded text-grey-975 flex-shrink-0"
                    style={{ fontSize: 20 }}
                  >
                    auto_awesome
                  </span>
                  <p className="cds-body-primary text-grey-975">
                  Great pace! You're averaging 52 minutes per session this
                  month. At this rate, you'll finish Applied Robotics 2
                  weeks ahead of your April 15th goal.
                  </p>
                </div>

                <RecentCertificates certificates={recentCertificates} />
              </div>

              <div className="flex flex-col gap-24 md:w-[300px] flex-shrink-0">
                <CalendarWidget
                  currentDay={25}
                  activityDays={calendarActivity}
                />
                <DailyStats
                  date={dailyStats.date}
                  minutesLearned={dailyStats.minutesLearned}
                  itemsCompleted={dailyStats.itemsCompleted}
                  highestGrade={dailyStats.highestGrade}
                />
              </div>
            </div>
          )}

          {activeTab === "Skills" && <SkillsTab skills={skillAreas} />}

          {activeTab === "In progress" && (
            <InProgressTab courses={inProgressCourses} />
          )}

          {activeTab === "Saved" && <SavedTab courses={savedCourses} />}

          {activeTab === "Certificates" && (
            <CertificatesTab certificates={earnedCertificates} />
          )}
        </div>
      </section>

      {/* Team activity feed */}
      <TeamActivity members={teamMembers} messages={teamMessages} />

      {/* Team momentum + recommended courses */}
      <TeamMomentum
        members={teamMembers}
        weeklyProgress={teamWeeklyProgress}
      />
    </div>
  );
}
