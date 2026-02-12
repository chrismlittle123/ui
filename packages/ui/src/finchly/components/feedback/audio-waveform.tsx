import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const audioWaveformVariants = cva("flex items-end justify-center gap-0.5", {
  variants: {
    size: {
      sm: "h-4 gap-0.5",
      md: "h-6 gap-1",
      lg: "h-10 gap-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const audioBarVariants = cva("rounded-full transition-all duration-150", {
  variants: {
    active: {
      true: "bg-primary",
      false: "bg-muted",
    },
    size: {
      sm: "w-0.5",
      md: "w-1",
      lg: "w-1.5",
    },
  },
  defaultVariants: {
    active: false,
    size: "md",
  },
});

export interface AudioWaveformProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof audioWaveformVariants> {
  isActive: boolean;
  levels?: number[];
  barCount?: number;
}

const AudioWaveform = React.forwardRef<HTMLDivElement, AudioWaveformProps>(
  ({ className, isActive, levels, barCount = 5, size, ...props }, ref) => {
    const [animatedLevels, setAnimatedLevels] = React.useState<number[]>(
      Array(barCount).fill(0.15)
    );

    React.useEffect(() => {
      if (!isActive) {
        setAnimatedLevels(Array(barCount).fill(0.15));
        return;
      }

      if (levels && levels.length > 0) {
        const normalizedLevels = Array(barCount)
          .fill(0)
          .map((_, i) => {
            const level = levels[i % levels.length] ?? 0.15;
            return Math.max(0.15, Math.min(1, level));
          });
        setAnimatedLevels(normalizedLevels);
        return;
      }

      const interval = setInterval(() => {
        setAnimatedLevels(
          Array(barCount)
            .fill(0)
            .map(() => 0.2 + Math.random() * 0.8)
        );
      }, 150);

      return () => clearInterval(interval);
    }, [isActive, levels, barCount]);

    const sizeHeights: Record<string, number> = {
      sm: 16,
      md: 24,
      lg: 40,
    };

    const maxHeight = sizeHeights[size ?? "md"] ?? 24;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={isActive ? "Audio playing" : "Audio paused"}
        className={cn(audioWaveformVariants({ size, className }))}
        {...props}
      >
        {animatedLevels.map((level, index) => (
          <div
            key={index}
            className={cn(audioBarVariants({ active: isActive, size }))}
            style={{
              height: `${Math.round(level * maxHeight)}px`,
              minHeight: `${Math.round(0.15 * maxHeight)}px`,
            }}
          />
        ))}
      </div>
    );
  }
);
AudioWaveform.displayName = "AudioWaveform";

export { AudioWaveform, audioWaveformVariants, audioBarVariants };
