'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SavedCardsPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Saved Cards</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">You have no saved cards.</p>
                 {/* Placeholder for adding Cards */}
            </CardContent>
        </Card>
    )
}
