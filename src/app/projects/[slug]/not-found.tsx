import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Sorry, the project you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
