import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('./app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Failed to send message: ${data.error}`);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Let&apos;s Work Together
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          I&apos;m always excited to take on new projects and collaborate with passionate individuals and teams. If you have an idea you&apos;d like to discuss, feel free to reach out.
          </p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="max-w-lg flex-1"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-lg flex-1"
            required
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="max-w-lg flex-1"
            required
          />
          <Button type="submit" className="max-w-lg">
            Send Message
          </Button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
