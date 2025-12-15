'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Akshaya-Shri', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akshaya-k-9a46772a3', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:rkrkakshaya@gmail.com', label: 'Email' },
];

export default function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-[700px] text-foreground/80 md:text-xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and I'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" required />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-6">
            <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle>Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>Email:</strong> rkrkakshaya@gmail.com</p>
                    <p><strong>Location:</strong> Theni, Tamil Nadu</p>
                </CardContent>
            </Card>
            <div className="flex justify-center gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link key={label} href={href} target="_blank">
                  <Button variant="outline" size="icon" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
