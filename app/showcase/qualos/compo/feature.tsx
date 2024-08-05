import React from "react";
import Link from "next/link";

export default function FeatureDisplay() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            New Feature
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Streamline Your Workflow
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our latest feature helps you stay organized and focused, so you can
            get more done in less time.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Try it Now
          </Link>
        </div>
        <img
          src="/placeholder.svg"
          width="650"
          height="365"
          alt="Feature Illustration"
          className="aspect-video overflow-hidden rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
