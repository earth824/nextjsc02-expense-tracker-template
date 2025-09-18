'use client';

import DatePicker from '@/components/shared/date-picker';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';

export default function TransactionFilter() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="text-xs">Search</FormLabel>
              <FormControl>
                <Input placeholder="Enter your search term" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Type</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="entertain">Entertain</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Start Date</FormLabel>
              <DatePicker field={field} placeholder="Pick a start date" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">End Date</FormLabel>
              <DatePicker field={field} placeholder="Pick an end date" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Sort By</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a sort criteria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="amount">Amount</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="payee">Payee</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs">Sort Direction</FormLabel>
              <Select>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a sort direction" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="default" disabled>
                    Default
                  </SelectItem>
                  <SelectItem value="asc">Asc</SelectItem>
                  <SelectItem value="desc">Desc</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="col-span-2 flex gap-6">
          <Button className="w-30">Search</Button>
          <Button variant="outline" className="w-30">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
