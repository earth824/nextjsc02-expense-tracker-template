import ExampleImage from '@/components/home/example-image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shark Tracker No.1 Expense Manager'
};

export default function Home() {
  return (
    <div className="flex items-center gap-12 h-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 w-2/5">
        <h1 className="text-5xl font-bold">
          Simple way to manage personal finances
        </h1>
        <p className="text-muted-foreground font-medium text-lg">
          It takes seconds to record daily transactions. Put them into clear and
          visualized categories such as Expense: Food, Shopping or Income:
          Salary, Investment.
        </p>
        <Button className="self-start">Start for free</Button>
      </div>
      <div className="w-3/5">
        <ExampleImage />
      </div>
    </div>
  );
}
