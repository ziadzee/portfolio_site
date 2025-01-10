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
      <footer className="text-center mt-12 text-retro-navy">
        <p className="animate-blink">* * * Under Construction * * *</p>
        <p className="mt-4">© 2024 - Made with ❤️ using React</p>
      </footer>
    </div>
  );
};

export default Index;