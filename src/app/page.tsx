import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/sign-up"}>Register</Link>
      <Link href={"/sign-in"}>Login</Link>
      home page
      <div className="w-32 h-32 bg-border">border</div>
      <div className="w-32 h-32 bg-input">input</div>
      <div className="w-32 h-32 bg-ring">ring</div>
      <div className="w-32 h-32 bg-background">background</div>
      <div className="w-32 h-32 bg-foreground">foreground</div>
      <div className="w-32 h-32 bg-primary">primary</div>
      <div className="w-32 h-32 bg-primary-foreground">primary-foreground</div>
      <div className="w-32 h-32 bg-secondary">secondary</div>
      <div className="w-32 h-32 bg-secondary-foreground">secondary-foreground</div>
      <div className="w-32 h-32 bg-destructive">destructive</div>
      <div className="w-32 h-32 bg-destructive-foreground">destructive-foreground</div>
      <div className="w-32 h-32 bg-muted">muted</div>
      <div className="w-32 h-32 bg-muted-foreground">muted-foreground</div>
      <div className="w-32 h-32 bg-accent">accent</div>
      <div className="w-32 h-32 bg-accent-foreground">accent-foreground</div>
      <div className="w-32 h-32 bg-popover">popover</div>
      <div className="w-32 h-32 bg-popover-foreground">popover-foreground</div>
      <div className="w-32 h-32 bg-card">card</div>
      <div className="w-32 h-32 bg-card-foreground">card-foreground</div>
    </main>
  );
}
