'use client';

import DatePicker from '@/components/shared/date-picker';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function TransactionForm() {
  return (
    // <Form >
    <form className="grid grid-cols-2 gap-6">
      <FormField
        name=""
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel className="text-xs">Transaction Type</FormLabel>
            <FormControl>
              <RadioGroup className="flex gap-0">
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="" className="hidden" />
                  </FormControl>
                  <FormLabel>
                    <Button
                      asChild
                      className="w-24 rounded-r-none border-r-0 cursor-pointer"
                    >
                      <span>Expense</span>
                    </Button>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormControl>
                    <RadioGroupItem value="" className="hidden" />
                  </FormControl>
                  <FormLabel>
                    <Button
                      asChild
                      className="w-24 rounded-l-none cursor-pointer"
                    >
                      <span>Income</span>
                    </Button>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Payee</FormLabel>
            <FormControl>
              <Input placeholder="Enter a payee" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Transaction Date</FormLabel>
            <DatePicker field={field} placeholder="Pick a transaction date" />
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Category</FormLabel>
            <Select>
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">Automobile</SelectItem>
                <SelectItem value="2">Drink</SelectItem>
                <SelectItem value="3">Education</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter an amount" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <div className="col-span-2 flex gap-6">
        <Button className="w-30">Create</Button>
        <Button variant="outline" className="w-30" asChild>
          {/* <Link>Cancel</Link> */}
        </Button>
      </div>
    </form>
    // </Form>
  );
}
