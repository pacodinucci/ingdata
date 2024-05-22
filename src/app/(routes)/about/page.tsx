import { PT_Serif, Fira_Sans, Montserrat } from "next/font/google";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: "400" });

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const AboutPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-blue-950 text-white text-4xl font-semibold">
      <div className="h-full w-full md:w-1/2 flex items-center justify-center relative z-10 md:z-auto bg-opacity-70 md:bg-transparent bg-blue-950 p-4 md:p-0">
        <div className="w-[90%] h-[80%] py-2 md:p-0">
          <h1
            className={`${firaSans.className} text-blue-400 text-5xl md:text-6xl font-bold antialiased mt-4`}
          >
            Aca va algo
          </h1>
          <h1
            className={`${firaSans.className} text-customBlue text-4xl font-semibold mt-4 antialiased`}
          >
            Aca va otra cosa
          </h1>
          <p
            className={`${montserrat.className} text-white text-lg font-normal mt-8 antialiased`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            quibusdam non nobis magni repellendus voluptates saepe enim iure
            perspiciatis? Provident fuga nisi, iusto dolore consequuntur quo
            aspernatur velit corrupti eveniet incidunt amet hic, itaque,
            laudantium repudiandae consectetur odit. Natus magni id neque, harum
            molestias facere sapiente inventore nisi quibusdam libero excepturi
            deserunt voluptate deleniti magnam porro ipsa unde asperiores
            nesciunt facilis. Commodi repellendus culpa, ad iure voluptatem quos
            facilis exercitationem.
          </p>
        </div>
      </div>
      <div className="h-full w-full md:w-1/2 bg-aboutImage bg-background bg-center absolute md:relative top-0 left-0 md:top-auto md:left-auto z-0 md:z-auto" />
    </div>
  );
};

export default AboutPage;
