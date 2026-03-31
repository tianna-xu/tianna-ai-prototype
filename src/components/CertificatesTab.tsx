import type { EarnedCertificate } from "../data/mockData";

interface CertificatesTabProps {
  certificates: EarnedCertificate[];
}

export function CertificatesTab({ certificates }: CertificatesTabProps) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center justify-between">
        <h3 className="cds-subtitle-lg text-grey-975">
          Earned certificates ({certificates.length})
        </h3>
        <div className="flex items-center gap-4 px-12 py-8 bg-green-25 rounded-8">
          <span
            className="material-symbols-rounded text-green-700"
            style={{ fontSize: 16 }}
          >
            workspace_premium
          </span>
          <span className="cds-action-secondary text-green-700">
            {certificates.length} earned
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border border-grey-100 rounded-16 p-24 flex items-start gap-24 hover:shadow-elevation-1 transition-shadow duration-fast"
          >
            <div
              className={`flex-shrink-0 flex items-center justify-center size-64 rounded-16 border border-grey-100 ${cert.iconBg}`}
            >
              <span
                className="cds-title-xs"
                style={{ color: cert.iconColor, fontFamily: "serif" }}
              >
                {cert.iconText}
              </span>
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="cds-action-primary text-grey-975">
                  {cert.name}
                </span>
                <span className="cds-body-tertiary text-grey-600">
                  Issued by {cert.issuer} · {cert.earnedDate}
                </span>
              </div>

              <div className="flex items-center gap-4 cds-body-tertiary text-grey-600">
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: 14 }}
                >
                  badge
                </span>
                <span>Credential ID: {cert.credentialId}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-8 py-2 rounded-32 bg-blue-25 text-blue-700 cds-body-tertiary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-12 pt-4">
                <button className="flex items-center gap-4 cds-action-secondary text-blue-700 hover:text-blue-800 transition-colors duration-fast">
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 16 }}
                  >
                    share
                  </span>
                  Add to LinkedIn
                </button>
                <button className="flex items-center gap-4 cds-action-secondary text-grey-600 hover:text-grey-975 transition-colors duration-fast">
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 16 }}
                  >
                    download
                  </span>
                  Download PDF
                </button>
                <button className="flex items-center gap-4 cds-action-secondary text-grey-600 hover:text-grey-975 transition-colors duration-fast">
                  <span
                    className="material-symbols-rounded"
                    style={{ fontSize: 16 }}
                  >
                    visibility
                  </span>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
