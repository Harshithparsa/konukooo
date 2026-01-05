import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto text-center py-20 flex flex-col items-center">
        <CheckCircle2 className="h-24 w-24 text-green-500 animate-pulse" />
        <h1 className="mt-6 text-3xl md:text-4xl font-bold font-headline">Thank You for Your Order!</h1>
        <p className="mt-3 text-lg text-muted-foreground">
            Your order has been placed successfully.
        </p>
        <p className="mt-1 text-muted-foreground">
            We've sent a confirmation email with your order details.
        </p>
        <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/orders">View My Orders</Link>
            </Button>
        </div>
    </div>
  );
}
