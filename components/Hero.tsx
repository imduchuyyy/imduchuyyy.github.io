import { Github, Linkedin, Mail, ArrowDown, Contact, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Hi, I&apos;m <span className="text-primary">Huy</span>
            </h1>

            <div className="space-y-2">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I built a lot of opensources, you can find them here.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="size-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="pt-12 animate-bounce">
            <Link
              href="/posts"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="size-6 mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
