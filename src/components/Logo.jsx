import { profile } from "@/data/portfolioData";

export const Logo = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" data-testid="logo-mark">
    <rect width="64" height="64" rx="14" fill="#0C0C0E" />
    <path
      d="M32 7 55 20v24L32 57 9 44V20z"
      stroke="#10B981"
      strokeWidth="2.5"
      className="logo-ring"
    />
    <text
      x="32"
      y="41"
      textAnchor="middle"
      fontFamily="'JetBrains Mono', monospace"
      fontWeight="700"
      fontSize="20"
      fill="#FAFAFA"
    >
      {profile.initials}
    </text>
  </svg>
);
