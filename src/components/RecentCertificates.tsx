import type { CertificateItem } from "../data/mockData";

interface RecentCertificatesProps {
  certificates: CertificateItem[];
}

export function RecentCertificates({ certificates }: RecentCertificatesProps) {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="cds-subtitle-lg text-grey-975">Recent certificates</h3>
      <div className="flex flex-col gap-16">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex items-center gap-16">
            <div
              className={`flex-shrink-0 size-48 rounded-8 border border-grey-100 overflow-hidden flex items-center justify-center ${cert.iconBg || "bg-white"}`}
            >
              {cert.iconText ? (
                <span
                  className="cds-title-xs"
                  style={{ color: cert.iconColor, fontFamily: "serif" }}
                >
                  {cert.iconText}
                </span>
              ) : (
                <img src={cert.logo} alt="" className="w-full h-full object-contain p-8" />
              )}
            </div>
            <div className="flex flex-col gap-4 min-w-0">
              <span className="cds-body-primary text-grey-975">
                {cert.name}
              </span>
              <div className="flex items-center gap-12">
                <button className="cds-action-secondary text-blue-700 hover:underline">
                  {cert.primaryAction}
                </button>
                <button className="cds-action-secondary text-blue-700 hover:underline">
                  {cert.secondaryAction}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
