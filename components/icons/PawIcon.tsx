interface IconProps {
  className?: string;
}

export function PawIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="6" cy="9" rx="1.8" ry="2.4" />
      <ellipse cx="10.5" cy="6" rx="1.8" ry="2.4" />
      <ellipse cx="13.5" cy="6" rx="1.8" ry="2.4" />
      <ellipse cx="18" cy="9" rx="1.8" ry="2.4" />
      <path d="M12 11.5c-2.8 0-5 2.2-5 4.5 0 1.7 1.3 3 3 3 1 0 1.5-.5 2-.5s1 .5 2 .5c1.7 0 3-1.3 3-3 0-2.3-2.2-4.5-5-4.5z" />
    </svg>
  );
}
