/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nSfSi5GkNxl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function TimeL() {
  return (
    <div className="py-12">
      <div className="relative border-l border-muted-foreground/20 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20">
        <div className="grid gap-8">
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                01
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>may 2, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>new fullscreen ui</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/0-50-12.png"
                  width={1920}
                  height={1080}
                  alt="fullscreen ui"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                the website back then does not offer a light theme. to view the
                image more clearly, please switch to light mode using the option
                at the top of the page.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                02
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>may 2, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>ui improvements</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/0-50-33.png"
                  width={1920}
                  height={1080}
                  alt="improving display card"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                the data display card is better formatted to mimic the first
                version of the website
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                03
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>may 6, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>added map labels, improving the zoom function</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/0-53-00.png"
                  width={1920}
                  height={1080}
                  alt="added map labels"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                added the padding function in the leaflet map bounds
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                04
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>may 11, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>light theme support</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/0-53-45.png"
                  width={1920}
                  height={1080}
                  alt="added light theme support"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                the map provider&apos;s light theme tiles are also provided
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                05
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>may 31, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>intensity report support</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/0-57-52.png"
                  width={1920}
                  height={1080}
                  alt="intensity report support"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                the website will now recieves and displays ScalePrompt data from
                p2pquake&apos;s api
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                06
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>june 16, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>P/S wave support</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/pswave.png"
                  width={1920}
                  height={1080}
                  alt="pswave support"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                this renders p and s wave of an EEW. data is from yahoo&apos;s
                api
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-medium text-primary-foreground">
                07
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>jul 16, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>stations grouping</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/1-07-51.png"
                  width={1920}
                  height={1080}
                  alt="stations grouping"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                it will now groups the intensity data from the station to its
                smaller, colored, semi-transparent circles
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[48px_1fr] items-start gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center border-2 dark:border-white border-black bg-opacity-0 rounded-full">
              <span className="text-sm font-medium dark:text-white text-black">
                08
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>jul 22, 2024</span>
                <Separator orientation="vertical" className="h-4" />
                <span>tsunami warning</span>
              </div>
              <div className="mt-2">
                <Image
                  src="https://pickingname.github.io/images/logbook/image/001/1-15-21.png"
                  width={1920}
                  height={1080}
                  alt="tsunami warning"
                  className="rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                although its <span className="underline">unfinished</span>, the
                website will now display tsunami warning from the jma&apos;s api
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
