interface WorkHistoryItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const WorkHistoryItem = ({ company, position, period, description }: WorkHistoryItemProps) => {
  return (
    <div className="mb-6 p-4 bg-white border shadow-retro">
      <h3 className="text-xl font-bold text-retro-teal mb-1">{position}</h3>
      <h4 className="text-lg text-retro-navy mb-1">{company}</h4>
      <p className="text-sm text-retro-purple mb-2">{period}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};