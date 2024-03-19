import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="block">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-10">
        <nav className="h-12 flex justify-between align-middle font-bold">
          <div className="p-2 pl-4">
            <Link href={`/`}>DNRatthee</Link>
          </div>
        </nav>
      </header>

      {/* Home */}
      <section id="home" className="block relative ">
        <div className="grid md:flex pt-12 max-w-5xl m-auto">
          <div className="flex flex-col justify-center h-2/5 sm:h-3/5 md:h-full text-3xl sm:text-5xl font-bold p-4 ">
            <h1 className="text-7xl">Hello, I&apos;m</h1>
            <h1>Ratthee Jarathbenjawong</h1>
          </div>
          <Image
            className="w-10/12 md:w-70 lg:w-90 absolute md:relative right-0 -bottom-12 object-contain pb-12"
            src={"/images/DNR.png"}
            alt="DNRatthee's photo"
            width={200}
            height={200}
            priority={true}
            unoptimized
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="block relative p-4 pt-12 ">
        <div className="max-w-5xl p-4 m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center pb-8">
            About
          </h2>

          <div className="grid max-sm:grid-rows-[200px_minmax(200px,_1fr)] md:grid-cols-2 m-auto md:pt-12">
            <div className="grid text-center justify-center m-auto">
              <Image
                className="bg-green rounded-full pt-4 justify-items-center object-contain w-40 h-40 md:w-56 md:h-56 "
                src={"/images/DNR.png"}
                alt="DNRatthee's photo"
                width={150}
                height={150}
                unoptimized
              />
            </div>

            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-bold text-green mb-2 ">
                I&apos;m Ratthee Jarathbenjawong
              </h3>
              <span className="mb-4">Full Stack Developer</span>
              <p className="font-thin text-base mb-4 pt-8">
                Web developer with experience in developing web applications. I
                am passionate about learning new technology and creating web
                applications. I have experience in both front-end and back-end
                development. I am always learn new technology and improve my
                skills.
              </p>
              <div className="grid max-sm:text-center max-sm:justify-center">
                <a href="https://github.com/dnratthee" className="p-2">
                  <Image
                    priority
                    src="/images/github-mark.svg"
                    height={24}
                    width={24}
                    alt="My GitHub page"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="block relative p-4 pt-12">
        <div className="pt-12 max-w-5xl m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center pb-8">
            Skills
          </h2>
          <div className="pt-8 text-base">
            <h3 className="text-xl font-bold text-green mb-4">
              Frontend Development
            </h3>
            <span className="skill">Next.js</span>
            <span className="skill">React</span>
            <span className="skill">HTML</span>
            <span className="skill">CSS</span>
            <span className="skill">TypeScript</span>
            <span className="skill">JavaScript</span>
          </div>
          <div className="pt-8 text-base">
            <h3 className="text-xl font-bold text-green mb-4">
              Backend Development
            </h3>
            <span className="skill">Node.js</span>
            <span className="skill">PHP</span>
            <span className="skill">MySQL</span>
            <span className="skill">PostgreSQL</span>
            <span className="skill">MongoDB</span>
            <span className="skill">Docker</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="block relative p-4 pt-12">
        <div className="pt-12 max-w-5xl m-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center pb-8">
            Contact
          </h2>
          <div className="pt-8 text-base">
            <h3 className="text-xl font-bold text-green mb-4">EMAIL</h3>
            <span>
              <a
                href={`mailto:info@dnratthee.me?subject=Mail from DNRatthee Website&body=Mail from DNRatthee Website`}
              >
                info@dnratthee.me
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col p-2 pl-4 align-middle gap-1 font-light text-base text-gray-300">
        <Link className="font-bold text-xl text-white" href={`/`}>
          DNRatthee
        </Link>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

        <span className="text-xs pt-2 pb-2">&copy; 2024 DNRatthee</span>
        <a
          href="https://www.flaticon.com/free-icons/letter-d"
          title="letter d icons"
          className="text-xs text-gray-600"
        >
          Letter d icons created by yukyik - Flaticon
        </a>
      </footer>
    </main>
  );
}
