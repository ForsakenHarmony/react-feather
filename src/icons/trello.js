const Trello = ({ color = 'currentColor', size = '24', ...otherProps }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...otherProps}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <rect x="7" y="7" width="3" height="9" />
    <rect x="14" y="7" width="3" height="5" />
  </svg>
);

export default Trello;
