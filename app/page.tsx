import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <Image
        className="w-full self-center justify-self-center"
        src="/tara-yazdian.jpeg"
        alt="Tara Yazdian"
        width={1024}
        height={768}
      />
      <div className="space-y-5 col-span-2">
        <p>
          My name is Tara Yazdian Anari, and I am currently pursuing a master
          degree in human-Computer Interaction at Utrecht University. I hold a
          Bachelor degree in Computer Engineering.
        </p>
        <p>
          My interests lie at the intersection of UX research, UI design, and
          psychology. After four years of studying programming and two years of
          working as a front-end developer, I discovered a strong passion for
          understanding people—their behaviors, decision-making processes, and
          how they interact with technology. I became especially curious about
          how we can leverage this knowledge to enhance user experiences in
          everyday applications.
        </p>
        <p>
          Motivated by this interest, I returned to academia to deepen my
          understanding of human-technology interaction and research
          methodologies.
        </p>
        <p>
          I consider my strengths to be responsibility, adaptability, and a
          strong eagerness to continuously learn and grow.
        </p>
      </div>
    </section>
  );
}
