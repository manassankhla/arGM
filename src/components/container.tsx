export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20">
      {children}
    </div>
  );
}