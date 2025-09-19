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

export default function SignUpForm() {
  return (
    // <Form>
    <form className="flex flex-col gap-6">
      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">First Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your first name" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your last name" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter your email" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        name=""
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xs">Password</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <Button>Create account</Button>
    </form>
    // </Form>
  );
}
