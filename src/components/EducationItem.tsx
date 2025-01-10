interface EducationItemProps {
  institution: string;
  degree: string;
  grade: string;
}

export const EducationItem = ({ institution, degree, grade }: EducationItemProps) => {
  return (
    <div className="mb-6 p-4 bg-white border shadow-retro">
      <h3 className="text-xl font-bold text-retro-teal mb-1">{institution}</h3>
      <h4 className="text-lg text-retro-navy mb-1">{degree}</h4>
      <p className="text-sm text-retro-purple">{grade}</p>
    </div>
  );
};