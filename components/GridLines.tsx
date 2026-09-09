const COLUMNS = 6;

export default function GridLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden md:block">
      <div className="container-page grid h-full" style={{ gridTemplateColumns: `repeat(${COLUMNS}, 1fr)` }}>
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <div key={i} className={i < COLUMNS - 1 ? "border-r border-hairline" : ""} />
        ))}
      </div>
    </div>
  );
}
