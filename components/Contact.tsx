import { Inbox, LocateIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full gap-16 border-b py-18"
    >
      <h2 className="text-center text-4xl font-bold">Get In Touch</h2>
      <Card className="w-full flex flex-col md:pl-4 md:flex-row justify-between items-center gap-8">
        <CardHeader className="w-full flex flex-col gap-4">
          <h3 className="text-xl font-bold">Let&apos;s Work Together</h3>
          <p>
            I&apos;m currently available for freelance work and full-time
            opportunities. Let&apos;s discuss how we can work together.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <Inbox className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="text-slate-800 font-medium">mnaggarse@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <LocateIcon className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="text-slate-800 font-medium">Egypt</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="w-full flex flex-col gap-4">
          <h3 className="text-xl font-bold text-center">Connect With Me</h3>
          <div className="w-full px-2 flex justify-evenly items-center gap-4">
            <Image width="30" height="30" src="/linkedin.svg" alt="Github" />
            <Image width="30" height="30" src="/github.svg" alt="Github" />
            <Image width="30" height="30" src="/telegram.svg" alt="Github" />
            <Image width="30" height="30" src="/whatsapp.svg" alt="Github" />
            <Image width="30" height="30" src="/twitter.svg" alt="Github" />
            <Image width="30" height="30" src="/facebook.svg" alt="Github" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
