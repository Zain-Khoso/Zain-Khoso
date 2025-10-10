// Lib Imports.
import { create } from 'zustand';
import isEmail from 'validator/lib/isEmail';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// Types.
type FormID = 'email' | 'name' | 'message';
type SubjectValuesT = 'Job Offer' | 'Freelance Offer' | 'Collaboration Offer' | 'Other';
type FormDataT = Record<FormID, string> & {
  subject: SubjectValuesT | '';
};
type FormErrorT = Record<FormID | 'subject', string>;
type StoreT = {
  isLoading: boolean;
  isError: boolean;
  error: FormErrorT | null;
  data: FormDataT;
  setData: (id: FormID | 'subject', value: SubjectValuesT | string) => void;
  sendMail: () => Promise<void>;
};

// Store Definition.
const useContactForm = create<StoreT>()((set, get) => ({
  isLoading: false,
  isError: false,
  error: null,
  data: {
    email: '',
    name: '',
    subject: '',
    message: '',
  },
  setData(id, value) {
    const { data } = get();

    set({ data: { ...data, [id]: value } });
  },
  async sendMail() {
    const {
      isLoading,
      data: { name, email, subject, message },
    } = get();

    if (isLoading) return;

    set({ isLoading: true });

    if (name.length === 0) {
      set({
        isLoading: false,
        error: {
          name: 'You need to enter your name here.',
          email: '',
          subject: '',
          message: '',
        },
      });

      return;
    }

    if (name.length > 20) {
      set({
        isLoading: false,
        error: {
          name: 'Name cannot be longer than 20 characters.',
          email: '',
          subject: '',
          message: '',
        },
      });

      return;
    }

    if (email.length === 0) {
      set({
        isLoading: false,
        error: {
          name: '',
          email: 'You need to enter your email here.',
          subject: '',
          message: '',
        },
      });

      return;
    }

    if (!isEmail(email)) {
      set({
        isLoading: false,
        error: {
          name: '',
          email: 'This is not a valid email address.',
          subject: '',
          message: '',
        },
      });

      return;
    }

    if (subject.length === 0) {
      set({
        isLoading: false,
        error: {
          name: '',
          email: '',
          subject: 'You need to choose a reason for your email.',
          message: '',
        },
      });

      return;
    }

    if (message.length === 0) {
      set({
        isLoading: false,
        error: {
          name: '',
          email: '',
          subject: '',
          message: 'Message cannot be empty.',
        },
      });

      return;
    }

    try {
      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            user_name: name,
            user_email: email,
            user_subject: subject,
            user_message: message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        {
          loading: 'Sending Your Email...',
          success: 'Your Email was Sent!',
          error: 'Something went wrong',
        }
      );
    } catch {
      return set({
        isLoading: false,
        error: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
      });
    }

    set({
      isLoading: false,
      isError: false,
      error: null,
      data: {
        email: '',
        name: '',
        subject: '',
        message: '',
      },
    });
  },
}));

export { useContactForm, type FormID };
