type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-full flex justify-center items-center">
      {children}
    </div>
  );
}
