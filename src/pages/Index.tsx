import { RetroWindow } from "@/components/RetroWindow";
import { BlogPost } from "@/components/BlogPost";
import { WorkHistoryItem } from "@/components/WorkHistoryItem";
import { RetroButton } from "@/components/RetroButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-beige p-6">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-retro-navy mb-4">Welcome to My Personal Page!</h1>
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <p className="text-retro-purple inline-block">
            * * * Thanks for visiting my corner of the World Wide Web * * *
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <RetroButton onClick={() => document.getElementById("work")?.scrollIntoView()}>
          Work History
        </RetroButton>
        <RetroButton onClick={() => document.getElementById("blog")?.scrollIntoView()}>
          Blog Posts
        </RetroButton>
      </div>

      {/* Work History Section */}
      <section id="work" className="mb-12">
        <RetroWindow title="Work History">
          <WorkHistoryItem
            company="TechCorp Solutions"
            position="Senior Developer"
            period="2020 - Present"
            description="Leading development of cutting-edge web applications using modern technologies."
          />
          <WorkHistoryItem
            company="Digital Innovations"
            position="Web Developer"
            period="2018 - 2020"
            description="Developed and maintained client websites and applications."
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
      <footer className="text-center mt-12 text-retro-navy border-t-2 border-retro-silver pt-8">
        <div className="space-y-4">
          {/* Browser Badge */}
          <div className="inline-block bg-retro-silver p-2 shadow-retro mx-2">
            <p className="text-xs">
              Best viewed with
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Netscape_Navigator_logo.svg/64px-Netscape_Navigator_logo.svg.png" 
                alt="Netscape Navigator" 
                className="h-6 inline mx-1"
              />
              Netscape Navigator 4.0
            </p>
          </div>

          {/* Visitor Counter */}
          <div className="inline-block bg-black text-[#00ff00] px-4 py-1 font-mono mx-2">
            Visitors: 000001337
          </div>

          {/* W3C Badge */}
          <div className="inline-block bg-retro-silver p-1 shadow-retro mx-2">
            <img 
              src="https://www.w3.org/Icons/valid-html401" 
              alt="Valid HTML 4.01!" 
              className="h-8"
            />
          </div>

          {/* Under Construction */}
          <p className="animate-blink">* * * Under Construction * * *</p>

          {/* Copyright */}
          <div className="mt-4 space-y-2">
            <p className="text-xs">This page is 100% Y2K compliant!</p>
            <p>© 2024 - Made with ❤️ using React</p>
            <p className="text-xs text-retro-purple">
              Resolution: 800x600 | 256 Colors
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;