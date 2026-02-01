import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDotnet,
  //   SiReactnative,
  SiDjango,
  SiFlutter,
  SiNextdotjs,
  SiVuedotjs,
  SiWordpress,
  SiLaravel,
  SiPostgresql,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiSqlite,
} from "react-icons/si";

type Tech = {
  name: string;
  Icon: any;
};

const TechSection = ({ title, items }: { title: string; items: Tech[] }) => (
  <div>
    <h3 className="mb-6 text-2xl font-semibold text-gray-900">{title}</h3>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map(({ name, Icon }) => (
        <div
          key={name}
          className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <Icon className="text-4xl text-indigo-600 transition group-hover:scale-110" />
          <p className="mt-3 text-sm font-medium text-gray-700">{name}</p>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600">
            TECHNOLOGIES
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Our Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We use modern, scalable, and proven technologies to build
            high-performance web and mobile applications.
          </p>
        </div>

        <div className="space-y-20">
          {/* Languages */}
          <TechSection
            title="Languages"
            items={[
              { name: "HTML5", Icon: FaHtml5 },
              { name: "CSS3", Icon: FaCss3Alt },
              { name: "JavaScript", Icon: FaJs },
              { name: "React.js", Icon: FaReact },
              { name: "Angular", Icon: FaAngular },
              { name: "Node.js", Icon: FaNodeJs },
              { name: ".NET", Icon: SiDotnet },
              { name: "Python", Icon: FaPython },
              { name: "PHP", Icon: FaPhp },
              { name: "SQL", Icon: FaDatabase },
            ]}
          />

          {/* Frameworks */}
          <TechSection
            title="Frameworks & Platforms"
            items={[
              //   { name: "React Native", Icon: SiReactnative },
              { name: "Django", Icon: SiDjango },
              { name: "Flutter", Icon: SiFlutter },
              { name: "Next.js", Icon: SiNextdotjs },
              { name: "Vue.js", Icon: SiVuedotjs },
              { name: "WordPress", Icon: SiWordpress },
              { name: "Laravel", Icon: SiLaravel },
            ]}
          />

          {/* Databases */}
          <TechSection
            title="Databases"
            items={[
              { name: "PostgreSQL", Icon: SiPostgresql },
              { name: "Firebase", Icon: SiFirebase },
              { name: "MySQL", Icon: SiMysql },
              { name: "NoSQL", Icon: SiSqlite },
              { name: "MongoDB", Icon: SiMongodb },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
