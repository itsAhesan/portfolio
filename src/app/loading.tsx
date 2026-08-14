export default function Loading() {
  return (
    <div className="grid min-h-svh place-items-center">
      <div
        className="size-8 animate-spin rounded-full border-2 border-line border-t-accent motion-reduce:animate-none"
        role="status"
      >
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
