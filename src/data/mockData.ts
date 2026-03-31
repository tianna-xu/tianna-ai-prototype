export const ASSETS = {
  courseraLogo: "https://www.figma.com/api/mcp/asset/5e651512-f2a9-455b-9e75-5c75c9f3efb3",
  coursePreview: "https://www.figma.com/api/mcp/asset/c214ae2f-98c7-4b6c-b0b3-74379c5b0835",
  rocketIcon: "https://www.figma.com/api/mcp/asset/460abfc5-6734-459c-bf83-0201facd77df",
  googleLogo: "https://www.figma.com/api/mcp/asset/4f5e211b-1bbe-4ecb-a1f6-af971b5a7fd6",
  microsoftLogo: "https://www.figma.com/api/mcp/asset/0727f03d-83cc-4db4-86dc-c3b4b3d8c1b6",
  metaLogo: "https://www.figma.com/api/mcp/asset/9d8f3cd4-a2b4-47ea-acf2-91b7043cac4b",
  ibmLogo: "https://www.figma.com/api/mcp/asset/8b9eacd4-c421-402c-9381-c50ea5e1e29d",
  uiLogo: "https://www.figma.com/api/mcp/asset/d33c82bf-d455-4fab-a725-612443529b74",
  vanderbiltLogo: "https://www.figma.com/api/mcp/asset/d09d48d6-7a16-4037-a684-55643d541e5b",
  macquarieLogo: "https://www.figma.com/api/mcp/asset/7fae0293-84ed-461c-a9df-ed23de69c334",
};

export interface CourseCardData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  rating: number;
  reviewCount: string;
  level: string;
  type: string;
  duration: string;
  matchPercent: number;
  tags: string[];
  bestFor: string;
}

export interface TrendingCourseData {
  id: string;
  title: string;
  provider: string;
  providerLogo: string;
  thumbnail: string;
  type: string;
  rating: number;
}

export interface TrendingPanelData {
  label: string;
  courses: TrendingCourseData[];
}

export const skillRecommendationCourses: CourseCardData[] = [
  {
    id: "1",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/5df463e3-1095-4c3b-b9ed-596c78a07667",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "2",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/8bd35774-c5f0-4701-8536-678f99f1e827",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "3",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/e1ad5770-dbc9-44d5-8dea-3d7a440e0d97",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
  {
    id: "4",
    title: "Applied Software Engineering Fundamentals Specialization",
    provider: "Google",
    providerLogo: ASSETS.googleLogo,
    thumbnail: "https://www.figma.com/api/mcp/asset/df702f8d-838f-4be1-ae30-dd8d1a8d9e37",
    rating: 4.9,
    reviewCount: "3.4k",
    level: "Beginner",
    type: "Degree",
    duration: "3-6 months",
    matchPercent: 90,
    tags: ["AI Skills"],
    bestFor:
      "Beginners, non-technical learners, business leaders, and teams who want to understand AI conceptually",
  },
];

export interface GoalItem {
  id: string;
  text: string;
  progress?: string;
}

export interface CourseProgressItem {
  id: string;
  name: string;
  completed: number;
  total: number;
}

export interface CertificateItem {
  id: string;
  name: string;
  logo: string;
  iconBg?: string;
  iconText?: string;
  iconColor?: string;
  primaryAction: string;
  secondaryAction: string;
}

export const todaysGoals: GoalItem[] = [
  { id: "g1", text: "Complete any 5 learning items", progress: "0/5" },
  { id: "g2", text: "Complete 1 practice item" },
  { id: "g3", text: "Use Coach" },
];

export const weeklyActivity = {
  streakWeeks: 1,
  message:
    "Way to go! You've exceeded your learning target by x days this week.",
  days: [
    { label: "Tu", completed: true },
    { label: "We", completed: true },
    { label: "Th", completed: true },
    { label: "Fr", completed: true },
    { label: "Sa", completed: false },
    { label: "Su", completed: false },
    { label: "Mo", completed: false },
  ] as { label: string; completed: boolean }[],
  itemsCompleted: 3,
  minutesLearned: 10,
};

export const courseProgress: CourseProgressItem[] = [
  { id: "cp1", name: "Introduction to Robotics", completed: 8, total: 8 },
  { id: "cp2", name: "Robot Kinematics & Motion", completed: 5, total: 10 },
  { id: "cp3", name: "Sensors & Perception", completed: 4, total: 7 },
  { id: "cp4", name: "Robot Operating System (ROS)", completed: 2, total: 6 },
  { id: "cp5", name: "Computer Vision for Robots", completed: 3, total: 8 },
  { id: "cp6", name: "Path Planning & Navigation", completed: 1, total: 6 },
  { id: "cp7", name: "Robot Learning & AI", completed: 0, total: 9 },
];

export const calendarActivity: Record<number, "partial" | "full"> = {
  2: "partial",
  3: "full",
  4: "full",
  5: "partial",
  9: "partial",
  10: "full",
  11: "full",
  12: "partial",
  16: "partial",
  17: "full",
  18: "full",
  19: "partial",
  23: "full",
  24: "full",
  25: "partial",
};

export const dailyStats = {
  date: "March 25",
  minutesLearned: 50,
  itemsCompleted: 20,
  highestGrade: 85.5,
};

export const recentCertificates: CertificateItem[] = [
  {
    id: "cert1",
    name: "Introduction to Robotics",
    logo: "",
    iconBg: "bg-blue-700",
    iconText: "🤖",
    iconColor: "#ffffff",
    primaryAction: "Add to LinkedIn",
    secondaryAction: "View badge",
  },
  {
    id: "cert2",
    name: "Build Your First Battle Bot",
    logo: "",
    iconBg: "bg-red-700",
    iconText: "💥",
    iconColor: "#ffffff",
    primaryAction: "Add to LinkedIn",
    secondaryAction: "View certificate",
  },
];

export interface TeamMember {
  id: string;
  name: string;
  initial: string;
  color: string;
  isYou?: boolean;
}

export interface TeamMessage {
  id: string;
  authorId: string;
  timestamp: string;
  text: string;
  tag?: "question" | "shared-learning" | "milestone";
}

export const teamMembers: TeamMember[] = [
  { id: "tm1", name: "Tianna", initial: "T", color: "bg-blue-700", isYou: true },
  { id: "tm2", name: "Sara", initial: "S", color: "bg-green-700" },
  { id: "tm3", name: "Sedi", initial: "S", color: "bg-purple-700" },
  { id: "tm4", name: "Zheng", initial: "Z", color: "bg-red-700" },
  { id: "tm5", name: "Harkiran", initial: "H", color: "bg-aqua-700" },
  { id: "tm6", name: "Olwen", initial: "O", color: "bg-yellow-700" },
  { id: "tm7", name: "Tony", initial: "T", color: "bg-pink-700" },
];

export const teamMessages: TeamMessage[] = [
  {
    id: "msg1",
    authorId: "tm3",
    timestamp: "2h ago",
    text: "Just got the inverse kinematics simulation working for a 6-DOF arm! The Denavit-Hartenberg parameters finally clicked after the lesson on homogeneous transforms.",
    tag: "shared-learning",
  },
  {
    id: "msg2",
    authorId: "tm4",
    timestamp: "3h ago",
    text: "Has anyone figured out how to tune the PID controller for the path-following exercise? My robot keeps overshooting the turns.",
    tag: "question",
  },
  {
    id: "msg3",
    authorId: "tm2",
    timestamp: "5h ago",
    text: "@Zheng Try lowering the derivative gain and adding a small integral term. I used Kp=1.2, Ki=0.05, Kd=0.3 and it smoothed out nicely.",
  },
  {
    id: "msg4",
    authorId: "tm6",
    timestamp: "1d ago",
    text: "Completed the Computer Vision for Robots module! Object detection with YOLO on a live camera feed is mind-blowing.",
    tag: "milestone",
  },
];

export interface TeamWeeklyItem {
  memberId: string;
  itemsCompleted: number;
}

export interface CoachNudge {
  message: string;
  actionLabel: string;
  statLine: string;
}

export const teamWeeklyProgress: TeamWeeklyItem[] = [
  { memberId: "tm3", itemsCompleted: 14 },
  { memberId: "tm7", itemsCompleted: 12 },
  { memberId: "tm2", itemsCompleted: 11 },
  { memberId: "tm6", itemsCompleted: 10 },
  { memberId: "tm4", itemsCompleted: 9 },
  { memberId: "tm5", itemsCompleted: 8 },
  { memberId: "tm1", itemsCompleted: 7 },
];

export const coachNudge: CoachNudge = {
  message:
    "You're halfway through Robot Kinematics & Motion — the next lesson covers forward kinematics with DH parameters. Finishing it today keeps your 1-week streak alive.",
  actionLabel: "Continue",
  statLine: "You've learned 50 minutes today — more than your weekly average.",
};

export interface SkillArea {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  icon: string;
  courses: string[];
}

export const skillAreas: SkillArea[] = [
  {
    id: "sk1",
    name: "Robot Kinematics",
    level: 3,
    maxLevel: 5,
    icon: "precision_manufacturing",
    courses: ["Robot Kinematics & Motion", "Introduction to Robotics"],
  },
  {
    id: "sk2",
    name: "Sensor Integration",
    level: 2,
    maxLevel: 5,
    icon: "sensors",
    courses: ["Sensors & Perception", "Computer Vision for Robots"],
  },
  {
    id: "sk3",
    name: "Computer Vision",
    level: 2,
    maxLevel: 5,
    icon: "visibility",
    courses: ["Computer Vision for Robots", "Sensors & Perception"],
  },
  {
    id: "sk4",
    name: "Motion Planning",
    level: 1,
    maxLevel: 5,
    icon: "route",
    courses: ["Path Planning & Navigation"],
  },
  {
    id: "sk5",
    name: "ROS Development",
    level: 1,
    maxLevel: 5,
    icon: "terminal",
    courses: ["Robot Operating System (ROS)"],
  },
  {
    id: "sk6",
    name: "Robot Programming",
    level: 4,
    maxLevel: 5,
    icon: "smart_toy",
    courses: ["Introduction to Robotics", "Robot Learning & AI"],
  },
];

export interface InProgressCourse {
  id: string;
  name: string;
  completed: number;
  total: number;
  nextLesson: string;
  estimatedMinutes: number;
  lastAccessed: string;
  icon: string;
  iconBg: string;
}

export const inProgressCourses: InProgressCourse[] = [
  {
    id: "ip1",
    name: "Robot Kinematics & Motion",
    completed: 5,
    total: 10,
    nextLesson: "Forward kinematics with DH parameters",
    estimatedMinutes: 20,
    lastAccessed: "Today",
    icon: "precision_manufacturing",
    iconBg: "bg-blue-700",
  },
  {
    id: "ip2",
    name: "Sensors & Perception",
    completed: 4,
    total: 7,
    nextLesson: "LIDAR point cloud processing",
    estimatedMinutes: 25,
    lastAccessed: "Yesterday",
    icon: "sensors",
    iconBg: "bg-purple-700",
  },
  {
    id: "ip3",
    name: "Robot Operating System (ROS)",
    completed: 2,
    total: 6,
    nextLesson: "Publishing & subscribing to ROS topics",
    estimatedMinutes: 30,
    lastAccessed: "2 days ago",
    icon: "terminal",
    iconBg: "bg-green-700",
  },
  {
    id: "ip4",
    name: "Computer Vision for Robots",
    completed: 3,
    total: 8,
    nextLesson: "Object detection with YOLO",
    estimatedMinutes: 20,
    lastAccessed: "3 days ago",
    icon: "visibility",
    iconBg: "bg-aqua-700",
  },
  {
    id: "ip5",
    name: "Path Planning & Navigation",
    completed: 1,
    total: 6,
    nextLesson: "A* and Dijkstra's algorithm for robots",
    estimatedMinutes: 22,
    lastAccessed: "Last week",
    icon: "route",
    iconBg: "bg-red-700",
  },
  {
    id: "ip6",
    name: "Robot Learning & AI",
    completed: 0,
    total: 9,
    nextLesson: "Introduction to reinforcement learning",
    estimatedMinutes: 15,
    lastAccessed: "Not started",
    icon: "psychology",
    iconBg: "bg-yellow-700",
  },
];

export interface SavedCourse {
  id: string;
  name: string;
  provider: string;
  duration: string;
  rating: number;
  icon: string;
  iconBg: string;
  savedDate: string;
  reason: string;
}

export const savedCourses: SavedCourse[] = [
  {
    id: "sv1",
    name: "Drone Autonomy & Aerial Robotics",
    provider: "University of Pennsylvania",
    duration: "10 hours",
    rating: 4.8,
    icon: "flight",
    iconBg: "bg-blue-700",
    savedDate: "Mar 20",
    reason: "Recommended by Sara",
  },
  {
    id: "sv2",
    name: "Industrial Automation with PLCs",
    provider: "University of Michigan",
    duration: "8 hours",
    rating: 4.7,
    icon: "factory",
    iconBg: "bg-green-700",
    savedDate: "Mar 18",
    reason: "Matches your skills path",
  },
  {
    id: "sv3",
    name: "Deep Learning for Robot Manipulation",
    provider: "Stanford Online",
    duration: "6 hours",
    rating: 4.9,
    icon: "neurology",
    iconBg: "bg-purple-700",
    savedDate: "Mar 15",
    reason: "Popular with your team",
  },
  {
    id: "sv4",
    name: "SLAM & Simultaneous Localization",
    provider: "ETH Zurich",
    duration: "12 hours",
    rating: 4.6,
    icon: "map",
    iconBg: "bg-aqua-700",
    savedDate: "Mar 12",
    reason: "Based on your activity",
  },
];

export interface EarnedCertificate {
  id: string;
  name: string;
  issuer: string;
  earnedDate: string;
  iconBg: string;
  iconText: string;
  iconColor: string;
  credentialId: string;
  skills: string[];
}

export const earnedCertificates: EarnedCertificate[] = [
  {
    id: "ec1",
    name: "Introduction to Robotics",
    issuer: "Stanford Online",
    earnedDate: "Mar 10, 2026",
    iconBg: "bg-blue-700",
    iconText: "R",
    iconColor: "#ffffff",
    credentialId: "STN-2026-0847",
    skills: ["Robot Programming", "Kinematics"],
  },
  {
    id: "ec2",
    name: "ROS Foundations for Engineers",
    issuer: "Open Robotics",
    earnedDate: "Feb 28, 2026",
    iconBg: "bg-red-700",
    iconText: "R",
    iconColor: "#ffffff",
    credentialId: "ROS-2026-1293",
    skills: ["ROS Development", "Linux Systems"],
  },
  {
    id: "ec3",
    name: "Mechanical Design for Robotics",
    issuer: "MIT OpenCourseWare",
    earnedDate: "Feb 15, 2026",
    iconBg: "bg-green-700",
    iconText: "M",
    iconColor: "#ffffff",
    credentialId: "MIT-2026-0561",
    skills: ["Mechanical Design", "CAD Modeling"],
  },
];

export const trendingPanels: TrendingPanelData[] = [
  {
    label: "Most popular",
    courses: [
      {
        id: "t1-1",
        title: "Google AI Essentials",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/8c8b9801-c76c-4b3c-b1a8-f5ec98c66790",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t1-2",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Microsoft",
        providerLogo: ASSETS.microsoftLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/2e5bffa3-f898-4ea7-9c17-d6e340deb41c",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t1-3",
        title: "Agentic AI and AI Agents for Leaders",
        provider: "Meta",
        providerLogo: ASSETS.metaLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/40139d60-1231-474a-b6d3-214769a944e1",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
  {
    label: "Weekly spotlight",
    courses: [
      {
        id: "t2-1",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/57f19d88-dce3-47fa-8567-3ec6124c78cf",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-2",
        title: "Successful Negotiation: Essential Strat..",
        provider: "IBM",
        providerLogo: ASSETS.ibmLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/13a69fc2-df2b-4afc-bf26-702b3b010045",
        type: "Professional Certificate",
        rating: 4.9,
      },
      {
        id: "t2-3",
        title: "Successful Negotiation: Essential Strat..",
        provider: "Google",
        providerLogo: ASSETS.googleLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/73970ea2-3c24-44c3-983f-6fe39dfcbae7",
        type: "Professional Certificate",
        rating: 4.9,
      },
    ],
  },
  {
    label: "In-demand AI skills",
    courses: [
      {
        id: "t3-1",
        title: "Excel Skills for Business Specialization",
        provider: "University of Illinois",
        providerLogo: ASSETS.uiLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/1104f1af-6cfb-4c31-a428-eef6592359e7",
        type: "Specialization",
        rating: 4.9,
      },
      {
        id: "t3-2",
        title: "Prompt Engineering for ChatGPT",
        provider: "Vanderbilt University",
        providerLogo: ASSETS.vanderbiltLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/75b18e69-32f9-42f3-947b-d993cd99ae09",
        type: "Course",
        rating: 4.9,
      },
      {
        id: "t3-3",
        title: "Strategic Leadership and Management...",
        provider: "Macquarie University",
        providerLogo: ASSETS.macquarieLogo,
        thumbnail: "https://www.figma.com/api/mcp/asset/5564a241-1927-46a8-919e-2e1a7c9064f8",
        type: "Course",
        rating: 4.9,
      },
    ],
  },
];
