import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calum's Next Template",
  description: "A template for starting quick NextJS projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col max-w-full md:max-w-3xl mx-auto">
              <header className="py-8 px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                  Calum&apos;s NextJS Starter
                </h1>
                <div className="md:hidden">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader className="mb-4">
                        <SheetTitle>Calum&apos;s NextJS Starter</SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col space-y-4">
                        <SignedOut>
                          <SignInButton>
                            <div
                              className={buttonVariants({ variant: "default" })}
                            >
                              Sign In
                            </div>
                          </SignInButton>
                        </SignedOut>
                        <SignedIn>
                          <UserButton
                            appearance={{
                              elements: {
                                rootBox:
                                  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full",
                                avatarBox: "h-5 w-5",
                                userPreviewMainIdentifier: "ml-2",
                                userButtonOuterIdentifier:
                                  "order-1 text-foreground",
                              },
                            }}
                            userProfileMode="navigation"
                            userProfileUrl="/"
                            showName
                          />
                        </SignedIn>
                        <div
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full"
                          )}
                        >
                          <ThemeSwitcher />
                          <span>Theme</span>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                <div className="hidden md:flex items-center space-x-2">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <ThemeSwitcher />
                </div>
              </header>
              <main className="flex-grow px-4">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
