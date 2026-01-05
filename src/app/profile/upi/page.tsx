'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SavedUpiPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Saved UPI</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">You have no saved UPI IDs.</p>
                 {/* Placeholder for adding UPI IDs */}
            </CardContent>
        </Card>
    )
}
