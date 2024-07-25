import Cta from "@/components/landing/Cta";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Steps from "@/components/landing/Steps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <Features/>
      <Steps/>
      <Cta/>
      <Footer/>
      {/* <Link href={"/sign-up"}>Register</Link>
      <Link href={"/sign-in"}>Login</Link> */}
      {/* home page
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
      <div className="w-32 h-32 bg-card-foreground">card-foreground</div> */}
    </main>
  );
}
