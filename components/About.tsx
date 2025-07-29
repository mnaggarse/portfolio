import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full gap-16 border-b py-18"
    >
      <h2 className="text-center text-4xl font-bold">About Me</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Image
          width="250"
          height="250"
          src="/profile/profile.jpg"
          alt="Profile Picture"
          className="rounded-lg shadow-xl"
        />
        <div className="flex flex-col gap-4 px-2">
          <h3 className="text-xl font-bold">
            Hello! I&apos;m Mahmoud, a software engineer.
          </h3>
          <p className="text-slate-600 font-medium">
            I’m a full-stack developer who enjoys turning ideas into real,
            useful applications. I love learning new things, solving problems,
            and improving the way I build software. I enjoy working with others,
            sharing ideas, and staying organized as a team to deliver the best
            results.
          </p>
        </div>
      </div>
    </section>
  );
}
