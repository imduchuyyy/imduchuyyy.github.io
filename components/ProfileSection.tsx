import { Github, Mail, Twitter, Linkedin, MapPin, Link2 } from 'lucide-react';
import { Badge } from './ui/badge';
import Image from 'next/image';

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center space-y-6 mb-16">
      {/* Avatar */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
              <Image height={128} width={128} src="https://avatars.githubusercontent.com/u/53326016?v=4" alt="Avatar" className="w-28 h-28 rounded-full object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
          <span className="text-lg">✨</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center space-y-2">
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {"imduchuyyy.eth"}
        </h1>
        <p className="text-muted-foreground">Web3 Developer & Open Source Enthusiast</p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Ho Chi Minh city, VN</span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-center max-w-2xl text-muted-foreground px-4">
        Passionate about building elegant solutions to complex problems. Love contributing to open source
        and creating tools that make developers&apos; lives easier. Always learning, always shipping.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 justify-center px-4">
        <Badge variant="secondary">Solidity</Badge>
        <Badge variant="secondary">Solana - Anchor lang</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="secondary">PostgreSQL</Badge>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/imduchuyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/imduchuyyy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/buiduchuy2412/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:duchuy.124dk@gmail.com"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://imduchuyyy.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
        >
          <Link2 className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
