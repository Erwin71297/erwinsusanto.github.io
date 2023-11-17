import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Nav Bar */}
      {/* Picture area */}
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image
            className="relative border-white-300 rounded-2xl"
            src="/assets/image_erwin.jpeg"
            alt="Erwin Picture"
            width={150}
            height={37}
            priority
          />
        </div>
        <div className="lg:grid-cols-1 lg:text-left">
          <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link
              className="mb-3 text-2xl font-semibold"
              href="/directories/about"
            >
              About
            </Link>
          </p>
          <p className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Link className="mb-3 text-2xl font-semibold" href="assets/Erwin_CV.pdf" download>
              Download CV
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-20 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <p className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-5 py-4">
            <Link href="/directories/skillset">Skillset</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            In here, you can find information about the tools and skills that I
            use to code.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <p className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-5 py-4">
            <Link href="/directories/contact">Contacts</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            You can find about my contact information
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <p className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-5 py-4">
            <Link href="/directories/hobbies">Hobbies</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Here is what I like to do in my spare time.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <p className="mb-3 text-2xl font-semibold group rounded-lg border border-transparent px-5 py-4">
            <Link href="/directories/extrainfo">Extras</Link>
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Unclassified infomation. Dare to click?
          </p>
        </div>
      </div>
    </main>
  )
}
