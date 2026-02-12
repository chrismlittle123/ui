import * as React from "react";
import { cn } from "../../../utils/cn";
import { Avatar, AvatarFallback } from "./avatar";

export interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  author: string;
  timestamp: string;
  title: string;
  description?: string;
  tags?: string[];
}

function getInitials(email: string): string {
  const name = email.split("@")[0];
  if (!name) return "?";
  return name.slice(0, 2).toUpperCase();
}

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>(
  ({ author, timestamp, title, description, tags, className, ...props }, ref) => {
    const initials = getInitials(author);

    return (
      <div
        ref={ref}
        className={cn(
          "py-4 border-b last:border-0 cursor-pointer hover:bg-muted/30 -mx-4 px-4 transition-colors",
          className
        )}
        {...props}
      >
        {/* Author line */}
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          </Avatar>
          <span className="font-mono text-xs text-muted-foreground">
            {author} • {timestamp}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
);
PostCard.displayName = "PostCard";

export { PostCard };
