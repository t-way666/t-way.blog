import {
  Baby,
  School,
  Plane,
  Briefcase,
  Code,
  Terminal,
  Target,
  TrendingUp,
  Pencil,
  Music,
  Clapperboard,
  BookOpen,
  LucideProps
} from "lucide-react"
import { AppIconName } from "@/lib/types"

const iconMap: Record<AppIconName, React.ComponentType<LucideProps>> = {
  baby: Baby,
  school: School,
  plane: Plane,
  sales: TrendingUp,
  work: Briefcase,
  code: Code,
  linux: Terminal,
  target: Target,
  draw: Pencil,
  music: Music,
  video: Clapperboard,
  book: BookOpen,
};

interface IconProps extends LucideProps {
  name: AppIconName;
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = iconMap[name] || Code; // Fallback иконка
  return <LucideIcon {...props} />;
}
