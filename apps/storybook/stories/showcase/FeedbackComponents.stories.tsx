import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@chrislittle/theme";
import {
  Button,
  Spinner,
  ProgressStepper,
  AudioWaveform,
} from "@chrislittle/theme-finchly";
import { Mic, MicOff, Play, RotateCcw } from "lucide-react";

// Demo wrapper for Spinner showcase
const SpinnerShowcase = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Spinner</CardTitle>
        <p className="text-sm text-muted-foreground">
          Loading indicators with multiple sizes
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Size Variants */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">Sizes</p>
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-muted-foreground">sm (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <span className="text-xs text-muted-foreground">md (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-muted-foreground">lg (32px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted-foreground">xl (48px)</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Interactive Demo */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Interactive Demo
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLoading(!isLoading)}
            >
              {isLoading ? "Stop" : "Start Loading"}
            </Button>
            {isLoading && (
              <div className="flex items-center gap-2">
                <Spinner size="sm" label="Loading your data..." />
                <span className="text-sm text-muted-foreground">
                  Loading your data...
                </span>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Usage in Context */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            In Button Context
          </p>
          <div className="flex gap-3">
            <Button disabled className="gap-2">
              <Spinner size="sm" className="border-primary-foreground/30 border-t-primary-foreground" />
              Saving...
            </Button>
            <Button variant="outline" disabled className="gap-2">
              <Spinner size="sm" />
              Processing...
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Demo wrapper for ProgressStepper showcase
const ProgressStepperShowcase = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = 6;
  const labels = ["Work", "Progress", "Deadline", "Blockers", "Next Week", "Summary"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Progress Stepper</CardTitle>
        <p className="text-sm text-muted-foreground">
          Horizontal step indicators for multi-step workflows
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Example */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Basic (Step {currentStep} of {totalSteps})
          </p>
          <ProgressStepper currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        <Separator />

        {/* With Labels */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            With Labels
          </p>
          <ProgressStepper
            currentStep={currentStep}
            totalSteps={totalSteps}
            labels={labels}
          />
        </div>

        <Separator />

        {/* Interactive Controls */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Interactive Demo
          </p>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep <= 1}
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
              disabled={currentStep >= totalSteps}
            >
              Next
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(1)}
              className="ml-2"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>

        <Separator />

        {/* Size Variants */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Size Variants
          </p>
          <div className="space-y-4">
            <div>
              <span className="text-xs text-muted-foreground">Small</span>
              <ProgressStepper currentStep={3} totalSteps={5} size="sm" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Medium (default)</span>
              <ProgressStepper currentStep={3} totalSteps={5} size="md" />
            </div>
            <div>
              <span className="text-xs text-muted-foreground">Large</span>
              <ProgressStepper currentStep={3} totalSteps={5} size="lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Demo wrapper for AudioWaveform showcase
const AudioWaveformShowcase = () => {
  const [isActive, setIsActive] = useState(false);
  const [levels, setLevels] = useState<number[]>([0.3, 0.7, 1.0, 0.5, 0.2]);

  // Simulate changing audio levels
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setLevels(
        Array(5)
          .fill(0)
          .map(() => 0.2 + Math.random() * 0.8)
      );
    }, 200);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">Audio Waveform</CardTitle>
        <p className="text-sm text-muted-foreground">
          Voice visualizer with animated bars
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Static vs Active */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            States
          </p>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={false} />
              <span className="text-xs text-muted-foreground">Inactive</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} />
              <span className="text-xs text-muted-foreground">Active (pulse)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} levels={[0.3, 0.7, 1.0, 0.5, 0.2]} />
              <span className="text-xs text-muted-foreground">With levels</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Size Variants */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Sizes
          </p>
          <div className="flex items-end gap-8">
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} size="sm" />
              <span className="text-xs text-muted-foreground">sm (16px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} size="md" />
              <span className="text-xs text-muted-foreground">md (24px)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} size="lg" />
              <span className="text-xs text-muted-foreground">lg (40px)</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Different Bar Counts */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Bar Counts
          </p>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} barCount={3} />
              <span className="text-xs text-muted-foreground">3 bars</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} barCount={5} />
              <span className="text-xs text-muted-foreground">5 bars</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <AudioWaveform isActive={true} barCount={7} />
              <span className="text-xs text-muted-foreground">7 bars</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Interactive Demo */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            Interactive Demo
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => setIsActive(!isActive)}
              className="gap-2"
            >
              {isActive ? (
                <>
                  <MicOff className="h-4 w-4" />
                  Stop
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4" />
                  Start Recording
                </>
              )}
            </Button>
            <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
              <AudioWaveform isActive={isActive} levels={levels} size="md" />
              <span className="text-sm text-muted-foreground">
                {isActive ? "Recording..." : "Ready"}
              </span>
            </div>
          </div>
        </div>

        <Separator />

        {/* In Context */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-3">
            In Context
          </p>
          <div className="flex items-center gap-3 p-4 bg-card border rounded-lg max-w-xs">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Mic className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Voice Note</p>
              <p className="text-xs text-muted-foreground">00:32</p>
            </div>
            <AudioWaveform isActive={true} size="sm" barCount={4} />
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main showcase component
const FeedbackComponentsShowcase = () => {
  return (
    <div className="w-[900px] bg-background p-6 space-y-6">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-1">Feedback Components</h1>
        <p className="text-sm text-muted-foreground">
          Loading indicators, progress steppers, and audio visualizers for the
          Finchly theme.
        </p>
      </div>

      <SpinnerShowcase />
      <ProgressStepperShowcase />
      <AudioWaveformShowcase />
    </div>
  );
};

const meta: Meta<typeof FeedbackComponentsShowcase> = {
  title: "Showcase/Feedback Components",
  component: FeedbackComponentsShowcase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FeedbackComponentsShowcase>;

export const Default: Story = {};
