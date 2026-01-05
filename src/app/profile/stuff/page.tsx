'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyStuffPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Stuff</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">This section will contain your reviews, ratings, and other content.</p>
            </CardContent>
        </Card>
    )
}
