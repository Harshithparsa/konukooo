
'use client';

import { useMemo, useState } from 'react';
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
import { Plus, Home, Trash2, Edit, Loader2 } from 'lucide-react';
import { useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { addDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { useCollection } from '@/firebase/firestore/use-collection';
import { Separator } from '@/components/ui/separator';
import type { Address } from '@/lib/types';

const addressFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  mobileNumber: z.string().length(10, 'Mobile number must be 10 digits.'),
  pincode: z.string().length(6, 'Pincode must be 6 digits.'),
  address: z.string().min(1, 'Address is required.'),
  city: z.string().min(1, 'City is required.'),
  state: z.string().min(1, 'State is required.'),
});

function SavedAddressCard({ address }: { address: Address }) {
    const { user } = useUser();
    const firestore = useFirestore();

    const handleDelete = () => {
        if (!user || !firestore) return;
        const addressRef = useMemoFirebase(() => doc(firestore, 'users', user.uid, 'addresses', address.id), [firestore, user.uid, address.id]);
        if (addressRef) {
          deleteDocumentNonBlocking(addressRef);
        }
    }

    return (
        <Card className="bg-muted/50">
            <CardContent className="p-4 flex justify-between items-start">
                <div className="space-y-1 text-sm">
                    <p className="font-semibold">{address.name}</p>
                    <p className="text-muted-foreground">{address.address}, {address.city}, {address.state} - {address.pincode}</p>
                    <p className="text-muted-foreground">Mobile: <span className="font-medium text-foreground">{address.mobileNumber}</span></p>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                    </Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDelete}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default function ManageAddressesPage() {
    const { toast } = useToast();
    const { user } = useUser();
    const firestore = useFirestore();
    const [showForm, setShowForm] = useState(false);

    const addressesRef = useMemoFirebase(
      () => (firestore && user ? collection(firestore, 'users', user.uid, 'addresses') : null),
      [firestore, user]
    );

    const { data: addresses, isLoading } = useCollection<Address>(addressesRef);

    const form = useForm<z.infer<typeof addressFormSchema>>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: {
            name: '',
            mobileNumber: '',
            pincode: '',
            address: '',
            city: '',
            state: '',
        },
    });

     function onSubmit(values: z.infer<typeof addressFormSchema>) {
        if (!addressesRef) return;
        
        addDocumentNonBlocking(addressesRef, values);

        toast({
            title: 'Address Saved',
            description: 'Your new address has been saved.',
        });
        form.reset();
        setShowForm(false);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Manage Addresses</CardTitle>
                <CardDescription>
                    Add or manage your shipping addresses.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && <Loader2 className="animate-spin" />}

                {!isLoading && addresses && addresses.length > 0 && (
                     <div className="space-y-4 mb-6">
                        {addresses.map(addr => <SavedAddressCard key={addr.id} address={addr} />)}
                    </div>
                )}
                 {!isLoading && (!addresses || addresses.length === 0) && !showForm && (
                     <div className="text-center text-muted-foreground border-2 border-dashed rounded-lg p-8">
                        <Home className="mx-auto h-12 w-12" />
                        <p className="mt-4">No saved addresses found.</p>
                        <p>Add an address to get started.</p>
                    </div>
                )}

                <Separator className="my-6" />

                {!showForm ? (
                    <Button onClick={() => setShowForm(true)}>
                        <Plus className="mr-2 h-4 w-4" /> Add a new address
                    </Button>
                ) : (
                    <>
                        <h3 className="text-lg font-semibold mb-4">Add a new address</h3>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="mobileNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mobile Number</FormLabel>
                                                <FormControl><Input placeholder="10-digit mobile number" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="pincode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Pincode</FormLabel>
                                                <FormControl><Input placeholder="6-digit pincode" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>City</FormLabel>
                                                <FormControl><Input placeholder="e.g. Mumbai" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address (Area and Street)</FormLabel>
                                            <FormControl><Input placeholder="Flat, House no., Building, Apartment" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>State</FormLabel>
                                            <FormControl><Input placeholder="e.g. Maharashtra" {...field} /></FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="pt-2 flex gap-2">
                                <Button type="submit">Save Address</Button>
                                <Button variant="ghost" onClick={() => setShowForm(false)}>Cancel</Button>
                                </div>
                            </form>
                        </Form>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

    