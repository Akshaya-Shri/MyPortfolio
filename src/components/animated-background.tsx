export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-black to-background opacity-80" />
      <div
        className="animate-move-gradient absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
        style={{ backgroundSize: '400% 400%' }}
      />
    </div>
  );
}
