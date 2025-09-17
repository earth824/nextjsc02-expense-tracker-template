import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthCard({
  children,
  title,
  description
}: AuthCardProps) {
  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
