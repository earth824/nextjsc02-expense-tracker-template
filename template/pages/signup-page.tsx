import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function SignUpPage() {
  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Create new account</CardTitle>
        <CardDescription>Get Started - It's free</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <SignUpForm /> */}
        <div className="text-center text-sm mt-4">
          Already have an account?{' '}
          {/* <Link className="hover:underline underline-offset-4 text-primary font-medium">
            Sign In
          </Link> */}
        </div>
      </CardContent>
    </Card>
  );
}
