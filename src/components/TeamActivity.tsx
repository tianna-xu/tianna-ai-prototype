import type { TeamMember, TeamMessage } from "../data/mockData";

interface TeamActivityProps {
  members: TeamMember[];
  messages: TeamMessage[];
}

const TAG_STYLES: Record<string, string> = {
  question: "bg-blue-50 text-blue-700",
  "shared-learning": "bg-green-50 text-green-700",
  milestone: "bg-purple-50 text-purple-700",
};

const TAG_LABELS: Record<string, string> = {
  question: "Question",
  "shared-learning": "Shared learning",
  milestone: "Milestone",
};

export function TeamActivity({ members, messages }: TeamActivityProps) {
  const memberMap = Object.fromEntries(members.map((m) => [m.id, m]));

  return (
    <section className="pb-32">
      <div className="px-16 md:max-w-[1113px] md:mx-auto md:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-12 mb-16">
          <div className="flex items-center gap-12">
            <h2 className="cds-subtitle-lg text-grey-975">Your team</h2>
            <div className="flex items-center -space-x-8">
              {members.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center justify-center size-32 rounded-full text-white cds-body-tertiary border-2 border-white ${member.color}`}
                  title={member.isYou ? `${member.name} (you)` : member.name}
                >
                  {member.initial}
                </div>
              ))}
            </div>
          </div>
          <span className="cds-body-secondary text-grey-600">
            7 learners on Cursor Fundamentals
          </span>
        </div>

        {/* Message feed */}
        <div className="flex flex-col border border-grey-100 rounded-16 overflow-hidden">
          {messages.map((msg, i) => {
            const author = memberMap[msg.authorId];
            return (
              <div
                key={msg.id}
                className={`flex gap-12 p-16 ${
                  i < messages.length - 1 ? "border-b border-grey-100" : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 flex items-center justify-center size-32 rounded-full text-white cds-body-tertiary ${author.color}`}
                >
                  {author.initial}
                </div>
                <div className="flex flex-col gap-4 min-w-0">
                  <div className="flex items-center gap-8 flex-wrap">
                    <span className="cds-action-secondary text-grey-975">
                      {author.name}
                      {author.isYou && (
                        <span className="text-grey-600"> (you)</span>
                      )}
                    </span>
                    <span className="cds-body-tertiary text-grey-400">
                      {msg.timestamp}
                    </span>
                    {msg.tag && (
                      <span
                        className={`px-8 py-2 rounded-32 cds-body-tertiary ${TAG_STYLES[msg.tag]}`}
                      >
                        {TAG_LABELS[msg.tag]}
                      </span>
                    )}
                  </div>
                  <p className="cds-body-secondary text-grey-975">
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Input area */}
          <div className="flex items-center gap-8 p-16 border-t border-grey-100 bg-grey-25">
            <input
              type="text"
              placeholder="Share something with your team..."
              className="flex-1 p-12 border border-grey-400 rounded-8 bg-white cds-body-secondary text-grey-975 placeholder:text-grey-600 hover:bg-blue-25 hover:border-blue-800 cds-focus-ring"
            />
            <button className="flex items-center justify-center size-40 bg-blue-700 text-white rounded-8 hover:bg-blue-800 transition-colors duration-fast flex-shrink-0">
              <span
                className="material-symbols-rounded"
                style={{ fontSize: 20 }}
              >
                send
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
