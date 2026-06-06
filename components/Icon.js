// Conjunto de íconos SVG en línea (stroke). Sin dependencias externas.

const paths = {
  tag: (
    <>
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0l-7.59-7.58A2 2 0 0 1 2.41 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.41.59l7.18 7.17a2 2 0 0 1 0 2.83Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="15.5" r="4.5" />
      <path d="m10.7 12.3 9.3-9.3M16 5l3 3M14 7l2 2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 2 4-6" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M10 21v-3.5a2 2 0 0 1 4 0V21" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6" />
      <path d="m3 12 4.5-4.5a2 2 0 0 1 2.8 0L13 10" />
      <path d="M14 11h2l4 4" />
      <path d="M3 12v4l3 3" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3V7L6 10H4a1 1 0 0 0-1 1Z" />
      <path d="M14 8a4 4 0 0 1 0 8M17 5a8 8 0 0 1 0 14" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5a3.5 3.5 0 0 1 0 7M17 20a6 6 0 0 0-3-5.2" />
    </>
  ),
  bed: (
    <>
      <path d="M3 8v11M3 13h18v6M21 19v-4a3 3 0 0 0-3-3H7" />
      <circle cx="7" cy="10" r="1.5" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12V6a2 2 0 0 1 3.4-1.4L9 6" />
      <path d="M3 12h18v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M7 18v2M17 18v2" />
    </>
  ),
  area: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 9h4M3 15h4M9 3v4M15 3v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  whatsapp: (
    <path d="M12.05 3a8.94 8.94 0 0 0-7.6 13.66L3 21l4.46-1.39A8.94 8.94 0 1 0 12.05 3Zm0 1.6a7.34 7.34 0 0 1 6.2 11.27 7.3 7.3 0 0 1-9.27 2.55l-.33-.18-2.65.82.83-2.57-.2-.34A7.34 7.34 0 0 1 12.05 4.6Zm-2.2 3.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.74 4.22 3.74 2.09.83 2.51.66 2.97.62.46-.04 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.46-.28-.24-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.56.12-.16.24-.64.81-.79.97-.14.16-.29.18-.53.06-.24-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.71-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.36-.77-1.86-.18-.42-.36-.41-.51-.42h-.4Z" />
  ),
};

export default function Icon({ name, className = "h-6 w-6", strokeWidth = 1.6 }) {
  const filled = name === "whatsapp";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || null}
    </svg>
  );
}
