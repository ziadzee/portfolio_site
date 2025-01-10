interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  url: string;
}

export const BlogPost = ({ title, date, excerpt, url }: BlogPostProps) => {
  return (
    <div 
      className="mb-6 p-4 bg-retro-beige border shadow-retro cursor-pointer hover:bg-retro-silver transition-colors"
      onClick={() => window.open(url, "_blank")}
    >
      <h3 className="text-xl font-bold text-retro-navy mb-2">{title}</h3>
      <p className="text-sm text-retro-purple mb-2">{date}</p>
      <p className="text-gray-700">{excerpt}</p>
    </div>
  );
};