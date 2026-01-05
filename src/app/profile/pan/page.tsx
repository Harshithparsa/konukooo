'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Info } from 'lucide-react';

const panFormSchema = z.object({
  panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number format.'),
  fullName: z.string().min(1, 'Full name is required.'),
});

export default function PanCardPage() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof panFormSchema>>({
        resolver: zodResolver(panFormSchema),
        defaultValues: {
            panNumber: '',
            fullName: '',
        },
    });

    function onSubmit(values: z.infer<typeof panFormSchema>) {
        console.log('PAN Details Submitted:', values);
        toast({
            title: 'PAN Details Saved',
            description: 'Your PAN information has been securely saved.',
        });
        form.reset();
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>PAN Card Information</CardTitle>
                <CardDescription>
                    Provide your PAN details for KYC and tax purposes.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="panNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PAN Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ABCDE1234F" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name (as per PAN)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-start gap-3 rounded-lg border bg-muted/50 p-4 text-sm">
                            <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <p className="text-muted-foreground">
                                Your PAN information is required for identity verification and to comply with government regulations on financial transactions. Your data is stored securely.
                            </p>
                        </div>
                        <Button type="submit">Save and Continue</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
