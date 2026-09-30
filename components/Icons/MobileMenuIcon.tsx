interface MobileMenuIconProps {
  isOpen: boolean;
}

const MobileMenuIcon = ({ isOpen }: MobileMenuIconProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <path d={isOpen ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
    </svg>
  );
};

export default MobileMenuIcon;
