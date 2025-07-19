import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-16 border-b py-18">
      <h2 className="text-4xl font-bold">About Me</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <Image
          width="400"
          height="400"
          src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
          alt="Profile Picture"
          className="rounded-lg shadow-xl"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">
            Hello! I'm Alex, a passionate developer.
          </h3>
          <p className="text-slate-600 font-medium">
            I'm a full-stack developer with over 5 years of experience creating
            digital solutions that make a difference. I specialize in React,
            Node.js, and modern web technologies.
          </p>
          <p className="text-slate-600 font-medium">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or enjoying a good cup of
            coffee while reading about the latest in tech.
          </p>
          <p className="text-slate-600 font-medium">
            I believe in writing clean, maintainable code and creating user
            experiences that are both beautiful and functional.
          </p>
        </div>
      </div>
    </section>
  );
}
