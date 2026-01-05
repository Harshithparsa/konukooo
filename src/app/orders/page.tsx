import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { getAllOrders } from "@/lib/data"
import Image from "next/image";

export default function OrdersPage() {
    const orders = getAllOrders();

    return (
        <div className="container mx-auto py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">My Orders</h1>
            
            {orders.length === 0 ? (
                <p>You have not placed any orders yet.</p>
            ) : (
                <Card>
                    <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                        {orders.map((order) => (
                        <AccordionItem value={order.id} key={order.id}>
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <p className="font-semibold">Order #{order.id}</p>
                                        <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">₹{order.total.toFixed(2)}</p>
                                        <p className="text-sm text-muted-foreground">Status: {order.status}</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                                <Separator className="mb-4"/>
                                <div className="space-y-4">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <Image src={item.imageUrl} alt={item.name} width={64} height={64} className="rounded-md object-cover"/>
                                                <div>
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                            <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
