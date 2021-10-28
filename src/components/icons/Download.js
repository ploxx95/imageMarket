function Download(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={24} height={24} rx={4} fill="#E5E7EB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 19a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L11 12.586V5a1 1 0 112 0v7.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        fill="#111827"
      />
    </svg>
  );
}

export default Download;
