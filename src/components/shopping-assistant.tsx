'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bot, Send, X, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  shoppingAssistant,
  ShoppingAssistantOutput,
} from '@/ai/flows/shopping-assistant';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  products?: ShoppingAssistantOutput['recommendedProducts'];
};

export function ShoppingAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const assistantResponse = await shoppingAssistant({ query: input });

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantResponse.response,
        products: assistantResponse.recommendedProducts,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI assistant error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
          >
            <Bot className="h-8 w-8" />
            <span className="sr-only">Open AI Shopping Assistant</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Bot /> AI Shopping Assistant
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="flex-grow my-4 pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.products && message.products.length > 0 && (
                      <div className="mt-2 space-y-1">
                        <p className="text-xs font-semibold">
                          Here are some products I found:
                        </p>
                        <ul className="list-disc list-inside">
                          {message.products.map((product) => (
                            <li key={product.id} className="text-sm">
                              <Link
                                href={`/products/${product.id}`}
                                className="underline hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {product.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg p-3 bg-muted flex items-center">
                        <Loader className="h-5 w-5 animate-spin"/>
                    </div>
                 </div>
              )}
            </div>
          </ScrollArea>
          <div className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for recommendations..."
              disabled={isLoading}
            />
            <Button onClick={handleSend} disabled={isLoading}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
