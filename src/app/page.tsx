import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <main>
      <Card className="mb-8">
        <CardHeader>
          <SignedIn>
            <CardTitle className="text-4xl font-bold">
              Welcome to the template, {user?.firstName}!
            </CardTitle>
            <CardDescription className="text-lg">
              This is a simple, opinionated NextJS starter template.
            </CardDescription>
          </SignedIn>
          <SignedOut>
            <CardTitle className="text-4xl font-bold">
              Calum&apos;s NextJS Starter
            </CardTitle>
            <CardDescription className="text-lg">
              A simple, opinionated NextJS starter template.
            </CardDescription>
          </SignedOut>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This template was created by{" "}
            <a
              href="https://github.com/calum-bird"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Calum Bird
            </a>{" "}
            to help kickstart your NextJS projects.
          </p>
          <h3 className="font-semibold mb-2">Tools Used:</h3>
          <ul className="list-disc list-inside pl-1">
            <li>NextJS + Tailwind</li>
            <li>ShadCN UI</li>
            <li>Clerk.com Auth</li>
          </ul>
          <p className="mt-4">
            If all goes well, you should be able to access{" "}
            <Link href="/authed" className="text-blue-500 hover:underline">
              this protected page
            </Link>{" "}
            after you sign in.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this template for?</AccordionTrigger>
          <AccordionContent>
            This template is designed to provide a quick start for NextJS
            projects with a set of opinionated tools and configurations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I customize the theme?</AccordionTrigger>
          <AccordionContent>
            You can customize the theme by modifying the Tailwind configuration
            and the global CSS file. The template uses CSS variables for easy
            theming.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Is this template regularly updated?
          </AccordionTrigger>
          <AccordionContent>
            Check the GitHub repository for the most up-to-date information on
            maintenance and updates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
