import TransactionForm from '@/components/transaction/transaction-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function EditTransactionPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Edit transaction</CardTitle>
        <CardDescription>
          Fill out the form to update your transaction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <TransactionForm />
      </CardContent>
    </Card>
  );
}
