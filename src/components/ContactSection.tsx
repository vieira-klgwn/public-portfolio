
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

import emailjs from 'emailjs-com';
import { toast } from 'sonner';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const social_media_links = ["https://github.com/vieira-klgwn", "https://www.linkedin.com/in/ntwali-isimbi-vieira-2b1213302/,", "https://x.com/IsimbiNtwali", "https://www.instagram.com/vieira.ntwali/ "];
const change_link = () => {
  var i;
  if (i == 4) {
    i = 0;

  }
  return social_media_links[i++];

}

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

 

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_2la2pkh', // Your Service ID
      'template_21bw0pl', // Your Template ID
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      'CGKANHHDap1ESsD_j' // Your Public key
    );

    toast.success('Message sent successfully! I will get back to you soon.');
    reset();
  } catch (error) {
    console.error('Email send error:', error);
    toast.error('Failed to send message. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6 bg-tech-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-tech-pink/10 border border-tech-pink/20 mb-4 opacity-0 animate-fade-in">
            <p className="text-tech-pink font-medium">Contact Me</p>
          </div>
          <h2 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-secondary-foreground max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            Have a project in mind or want to discuss a potential collaboration?
            I'm always open to new opportunities and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-6 opacity-0 animate-fade-in-right animate-delay-300">
            <div className="tech-card">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-tech-blue/10 text-tech-light-blue mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-secondary-foreground mb-1">Email</h4>
                    <a
                      href="mailto:ntwalisimbivieira@gmail.com"
                      className="text-tech-light-blue hover:text-tech-blue transition-colors"
                    >
                      ntwalisimbivieira@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-tech-purple/10 text-tech-purple mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-secondary-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+250788600099"
                      className="text-tech-light-blue hover:text-tech-blue transition-colors"
                    >
                      +250 (788) 600-099
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-tech-cyan/10 text-tech-cyan mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-secondary-foreground mb-1">Location</h4>
                    <p className="text-white">Masaka - Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {[
                    { platform: 'github', url: 'https://github.com/vieira-klgwn' },
                    { platform: 'linkedin', url: 'https://www.linkedin.com/in/ntwali-isimbi-vieira-2b1213302/' },
                    { platform: 'twitter', url: 'https://x.com/IsimbiNtwali' },
                    { platform: 'instagram', url: 'https://www.instagram.com/vieira.ntwali/' },
                  ].map(({ platform, url }) => (
                    <a
                      key={platform}
                      href={url}  // Link to the actual profile
                      className="p-3 rounded-lg bg-tech-dark/70 hover:bg-tech-blue/20 text-secondary-foreground hover:text-tech-light-blue transition-all"
                      aria-label={`Follow on ${platform}`}
                      target="_blank"  // Opens the link in a new tab
                      rel="noopener noreferrer"  // Security feature to prevent malicious behavior
                    >
                      <span className="capitalize">{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 opacity-0 animate-fade-in-left animate-delay-400">
            <form onSubmit={handleSubmit(onSubmit)} className="tech-card">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl bg-tech-dark/70 border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-tech-blue focus:outline-none transition-colors`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl bg-tech-dark/70 border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-tech-blue focus:outline-none transition-colors`}
                    placeholder="your.email@example.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter a valid email'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl bg-tech-dark/70 border ${errors.subject ? 'border-red-500' : 'border-border'} focus:border-tech-blue focus:outline-none transition-colors`}
                  placeholder="What is this regarding?"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-tech-dark/70 border ${errors.message ? 'border-red-500' : 'border-border'} focus:border-tech-blue focus:outline-none transition-colors`}
                  placeholder="Write your message here..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
