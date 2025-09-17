import AuthCard from '@/components/auth/auth-card';
import { ROUTE } from '@/config/route.config';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In'
};

export default function SignInPage() {
  return (
    <AuthCard
      title="Sign in to your account"
      description="Enter your credentials to access to your account"
    >
      <div className="text-center text-sm mt-4">
        Don&apos;t have an account?{' '}
        <Link
          href={ROUTE.SIGNUP}
          className="hover:underline text-primary font-medium"
        >
          Sign Up
        </Link>
      </div>
    </AuthCard>
  );
}
