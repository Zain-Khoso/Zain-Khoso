'use client';

// Utils.
import { useContactForm } from '@/utils/contactForm';
import { cn } from '@/utils';

// Assets.
import { IoMdSend } from 'react-icons/io';

// Components.
import { Input, Select, Textarea } from '../input';
import { Button } from '../button';

// Types.
import { FormEventHandler } from 'react';

// Contact Form at the footer.
export default function ContactForm() {
  const { isLoading, data, sendMail, setData } = useContactForm();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async function (event) {
    event.preventDefault();

    if (isLoading) return;

    await sendMail();
  };

  return (
    <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Name"
        name="user_name"
        value={data.name}
        onChange={(event) => setData('name', event.target.value)}
      />

      <Input
        id="email"
        label="Email"
        name="user_email"
        value={data.email}
        onChange={(event) => setData('email', event.target.value)}
      />

      <Select
        name="user_subject"
        id="subject"
        label="Subject"
        value={data.subject}
        onChange={(event) => setData('subject', event.target.value)}
      >
        <option value="" className="hidden"></option>
        <option value="Job Offer">Job Offer</option>
        <option value="Freelance Offer">Freelance Offer</option>
        <option value="Collaboration Offer">Collaboration Offer</option>
        <option value="Other">Other</option>
      </Select>

      <Textarea
        name="user_message"
        id="message"
        label="Message"
        value={data.message}
        onChange={(event) => setData('message', event.target.value)}
      ></Textarea>

      <Button
        className={cn('w-full', isLoading ? 'pointer-events-none opacity-80' : '')}
        icon={IoMdSend}
      >
        Submit
      </Button>
    </form>
  );
}
