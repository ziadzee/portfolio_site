import { RetroWindow } from "@/components/RetroWindow";
import { BlogPost } from "@/components/BlogPost";
import { WorkHistoryItem } from "@/components/WorkHistoryItem";
import { RetroButton } from "@/components/RetroButton";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-retro-beige p-4 md:p-6">
      {/* Hero Section */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-retro-navy mb-4">Welcome to My Personal Page!</h1>
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <p className="text-retro-purple inline-block text-sm md:text-base">
            * * * Thanks for visiting my corner of the World Wide Web * * *
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-6 md:mb-8">
        <RetroButton onClick={() => document.getElementById("work")?.scrollIntoView()}>
          Work History
        </RetroButton>
        <RetroButton onClick={() => document.getElementById("blog")?.scrollIntoView()}>
          Blog Posts
        </RetroButton>
        <RetroButton onClick={() => window.open("https://www.linkedin.com/in/ziadalziadi/", "_blank")}>
          Contact Me
        </RetroButton>
      </div>

      {/* Work History Section */}
      <section id="work" className="mb-8 md:mb-12">
        <RetroWindow title="Work History">
          <WorkHistoryItem
            company="Lovable Technology"
            position="Senior Software Engineer"
            period="Oct 2023 - Present"
            description="Building AI-powered developer tools to help developers write better code faster. Working with React, TypeScript, and various AI technologies."
          />
          <WorkHistoryItem
            company="Lovable Technology"
            position="Software Engineer"
            period="Jan 2023 - Oct 2023"
            description="Developed full-stack applications using React, TypeScript, and Node.js. Implemented AI-powered features and improved developer experience."
          />
          <WorkHistoryItem
            company="Lovable Technology"
            position="Junior Software Engineer"
            period="Sep 2022 - Jan 2023"
            description="Started as a junior developer working on web applications and learning modern development practices."
          />
          <WorkHistoryItem
            company="Freelance"
            position="Full Stack Developer"
            period="2020 - 2022"
            description="Worked on various freelance projects developing web applications and mobile apps using React, React Native, and Node.js."
          />
        </RetroWindow>
      </section>

      {/* Blog Posts Section */}
      <section id="blog">
        <RetroWindow title="Latest Blog Posts">
          <BlogPost
            title="The Future of Web Development"
            date="April 15, 2024"
            excerpt="Exploring upcoming trends in web development and what they mean for developers."
          />
          <BlogPost
            title="My Journey in Tech"
            date="April 1, 2024"
            excerpt="A personal reflection on my career path and lessons learned along the way."
          />
        </RetroWindow>
      </section>

      {/* Footer */}
      <footer className="text-center mt-8 md:mt-12 text-retro-navy border-t-2 border-retro-silver pt-6 md:pt-8">
        <div className="space-y-4">
          {/* Browser Badge */}
          <div className="inline-block bg-retro-silver p-2 shadow-retro mx-2 text-xs md:text-sm">
            <p>
              Best viewed with
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Netscape_Navigator_logo.svg/64px-Netscape_Navigator_logo.svg.png" 
                alt="Netscape Navigator" 
                className="h-4 md:h-6 inline mx-1"
              />
              Netscape Navigator 4.0
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="inline-block bg-black text-[#00ff00] px-3 md:px-4 py-1 font-mono mx-2 text-xs md:text-sm">
            Visitors: 000001337
          </div>

          {/* W3C Badge */}
          <div className="inline-block bg-retro-silver p-1 shadow-retro mx-2">
            <img 
              src="https://www.w3.org/Icons/valid-html401" 
              alt="Valid HTML 4.01!" 
              className="h-6 md:h-8"
            />
          </div>

          {/* Under Construction */}
          <p className="animate-blink text-sm md:text-base">* * * Under Construction * * *</p>

          {/* Copyright */}
          <div className="mt-4 space-y-2">
            <p className="text-xs">This page is 100% Y2K compliant!</p>
            <p className="text-sm md:text-base">© 2024 - Made with ❤️ using React</p>
            <p className="text-xs text-retro-purple">
              Resolution: {isMobile ? "320x480" : "800x600"} | 256 Colors
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;