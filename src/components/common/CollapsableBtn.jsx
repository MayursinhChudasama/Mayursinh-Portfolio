export default function CollapsableBtn({ onClick, state }) {
  return (
    <button
      onClick={onClick}
      className={`text-[#d4d4d4] transition-colors cursor-pointer mr-1 ${
        state ? "" : "rotate-270"
      }`}>
      <svg
        width='14'
        height='14'
        viewBox='0 0 24 24'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <polyline points='6 9 12 15 18 9'></polyline>
      </svg>
    </button>
  );
}
