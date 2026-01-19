import { Github, Mail, Twitter, Linkedin, MapPin, Link2, Terminal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center space-y-8 mb-20 relative">
      {/* Decorative scanline or glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

      {/* Avatar with Tech Ring */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative w-40 h-40 rounded-full bg-black p-1">
          <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-primary/50">
            <Image
              height={160}
              width={160}
              src="https://avatars.githubusercontent.com/u/53326016?v=6"
              alt="Avatar"
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Status Indicator */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-green-500/50 rounded-full px-3 py-1 text-xs text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Online</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500 font-mono tracking-tight">
          imduchuyyy<span className="text-primary">.eth</span>
        </h1>

        <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-sm md:text-base">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-primary mr-2">{">"}</span>
          <span className="typing-effect">Building the open internet...</span>
          <span className="w-2 h-4 bg-primary animate-pulse inline-block ml-1 align-middle" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span>Ho Chi Minh City, VN</span>
          </div>
        </div>
      </div>
      {/* Social Links - Glassmorphism */}
      <div className="flex justify-center gap-4 mt-6">
        {[
          { icon: Github, href: "https://github.com/imduchuyyy" },
          { icon: Twitter, href: "https://x.com/imduchuyyy" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/buiduchuy2412/" },
          { icon: Mail, href: "mailto:duchuy.124dk@gmail.com" },
          { icon: Link2, href: "https://imduchuyyy.github.io" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-secondary/50 backdrop-blur-md border border-white/10 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center justify-center group"
          >
            <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
}
