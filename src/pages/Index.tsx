import { RetroWindow } from "@/components/RetroWindow";
import { BlogPost } from "@/components/BlogPost";
import { WorkHistoryItem } from "@/components/WorkHistoryItem";
import { EducationItem } from "@/components/EducationItem";
import { RetroButton } from "@/components/RetroButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);
  const [visitorCount] = useState(Math.floor(Math.random() * 9000) + 1000);

  return (
    <div className="min-h-screen bg-retro-beige p-4 md:p-6">

      {/* Hero Section */}
      <div className="text-center mb-6 md:mb-8">
        <img 
          src="/lovable-uploads/4bf13be7-7a6c-47b5-a4b4-32994c2d0709.png"
          alt="Retro Computer"
          className="w-16 h-16 mx-auto mb-4 animate-spin"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-retro-navy mb-4 blink">
          <span className="text-retro-purple">W</span>
          <span className="text-retro-teal">e</span>
          <span className="text-retro-navy">l</span>
          <span className="text-retro-purple">c</span>
          <span className="text-retro-teal">o</span>
          <span className="text-retro-navy">m</span>
          <span className="text-retro-purple">e</span>
          <span className="text-retro-teal"> to </span>
          <span className="text-retro-purple">Ziad </span>
          <span className="text-retro-teal">Al-Ziadi's </span>
          <span className="text-retro-navy">personal </span>
          <span className="text-retro-purple">website</span>
          <span className="text-retro-teal">!</span>
        </h1>
        <div className="animate-marquee whitespace-nowrap overflow-hidden">
          <p className="text-retro-purple inline-block text-sm md:text-base">
            * * * Welcome to my internet homepage! * * *
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 mb-6 md:mb-8">
        <RetroButton onClick={() => document.getElementById("work")?.scrollIntoView()}>
          Work History
        </RetroButton>
        <RetroButton onClick={() => document.getElementById("education")?.scrollIntoView()}>
          Education
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
        <RetroWindow title="WORK.EXE">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            {/* First 4 items always visible */}
            <WorkHistoryItem
              company="Banqora"
              position="Co-founder and CPO"
              period="Mar 2024 - Present"
              description="Applied AI to automate post-trade processing for financial institutions. Backed by VCs, angels and industry experts."
            />
            <WorkHistoryItem
              company="Antler"
              position="Founder in Residence"
              period="Feb 2024 - Apr 2024"
              description="Antler is a global early-stage VC."
            />
            <WorkHistoryItem
              company="Channel 4"
              position="Product Lead (Data Science)"
              period="Sep 2022 - Aug 2023"
              description="Scaling machine learning and data analytics to 29m users."
            />
            <WorkHistoryItem
              company="Raft"
              position="Product Lead (Machine Learning)"
              period="Sep 2021 - Aug 2022"
              description="Deploying NLP and computer vision to a 1,000-year old industry."
            />

            {/* Collapsible content */}
            <CollapsibleContent>
              <WorkHistoryItem
                company="Zilch"
                position="Machine Learning Researcher"
                period="May 2021 - Sep 2021"
                description="Researched and built Zilch's first ML model into production (MSc thesis research)."
              />
              <WorkHistoryItem
                company="ClearScore"
                position="Product Manager"
                period="Aug 2018 - Sep 2020"
                description="Product Manager for Global Data Engineering. Previously Product Manager for User Engagement and Retention."
              />
              <WorkHistoryItem
                company="Paperclip"
                position="Co-Founder (Product)"
                period="Jun 2014 - Sep 2017"
                description="Peer-to-peer marketplace for renting items locally. Backed by Hayley Parsons (founder of GoCompare), David Buttress (co-founder of Just-Eat), and John Davis (former CFO of Financial Times, Yahoo, and Yell.com), along with the Development Bank of Wales."
              />
            </CollapsibleContent>

            {/* Show More/Less Button */}
            <div className="mt-4 text-center">
              <CollapsibleTrigger asChild>
                <RetroButton>
                  {isExpanded ? "< Less />" : "< More />"}
                </RetroButton>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </RetroWindow>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-8 md:mb-12">
        <RetroWindow title="EDUCATION.BAT">
          <EducationItem
            institution="City, University of London"
            degree="Master of Science (M.Sc.), Data Science"
            grade="Grade: Distinction"
          />
          <EducationItem
            institution="SOAS, University of London"
            degree="Bachelor of Science (B.Sc.), Economics"
            grade="Grade: Second Class Honours"
          />
        </RetroWindow>
      </section>

      {/* Blog Posts Section */}
      <section id="blog">
        <RetroWindow title="BLOG.TXT">
          <BlogPost
            title="LLMs Aren't Products: The Challenge of Productionisation and Delivering Value"
            date="September 2024"
            excerpt="Let's face it: the technology scene is drunk on AI right now, and LLMs are the drink of choice. Organisations are..."
            url="https://drive.google.com/file/d/14bH2aAVRVnvrOIWighhzAsBE4QII3Fkk/view"
          />
          <BlogPost
            title="How I saw the Brexit outcome two days prior using an app"
            date="Sep 17, 2020"
            excerpt="The pre-Brexit world of 2015 looked a lot different even though it was a mere five years ago. Fringe opinions on politics and society were…"
            url="https://medium.com/@ziadalzee/how-i-saw-the-brexit-outcome-two-days-prior-using-an-app-e3802f47c2a"
          />
          <BlogPost
            title="Technological Unemployment: automation and the purpose of life"
            date="May 2, 2020"
            excerpt="The relationship between technological advancement and unemployment has been at the centre of scrutiny and debate for well over a century…"
            url="https://medium.com/@ziadalzee/technological-unemployment-automation-and-the-purpose-of-life-5247d138e017"
          />
          <BlogPost
            title="The Demise of Capitalism and the Rise of the Collaborative Commons"
            date="Jun 5, 2017"
            excerpt="In the last decade or so, the lifeline of capitalism, profit, has been slowly but steadily dying in information and data-heavy industries…"
            url="https://medium.com/@ziadalzee/the-demise-of-capitalism-and-the-rise-of-the-collaborative-commons-910d0638b272"
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
            Visitors: {String(visitorCount).padStart(8, '0')}
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
            <p className="text-xs">This site optimized for 800x600 resolution!</p>
            <p className="text-xs">Last updated: January 2025 - Page Counter by WebCounter™</p>
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
