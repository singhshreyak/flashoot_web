import BlurText from "./BlurText";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border/40"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="px-4 space-y-2 text-center">
          <BlurText
            text={title}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-5xl font-bold"
          />
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
