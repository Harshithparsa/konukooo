'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GiftCardsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gift Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">You have no active gift cards.</p>
                <div className="flex items-center space-x-2">
                    {/* Placeholder for adding a gift card */}
                    <Button>Add a Gift Card</Button>
                </div>
            </CardContent>
        </Card>
    )
}
