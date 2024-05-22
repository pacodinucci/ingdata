import Form from "./components/ContactForm";
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

const ContactPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center bg-contactbg bg-left-bottom">
      <div className="w-full md:w-[60%] h-full md:h-screen flex flex-col items-center justify-center space-y-8 pt-24 bg-opacity-50 md:bg-transparent bg-white p-4 md:p-0 relative z-10">
        <div
          className={`flex flex-col space-y-4 w-full md:w-1/2 text-xl ${montserrat.className} antialiased text-slate-800`}
        >
          <h1 className="text-2xl font-bold md:font-semibold">Contact Us</h1>
          <p className="font-semibold md:font-normal text-slate-800">
            Contact us for a demo of our solution and to learn what the benefits
            of a pilot project with us would bring to your production operations
          </p>
          <p className="font-semibold md:font-normal text-slate-800">
            Phone: +541100000000
          </p>
          <p className="font-semibold md:font-normal text-slate-800">
            Email: info@ingdata.com
          </p>
        </div>
        <Form />
      </div>
      <div className="w-full md:w-[40%] h-full md:h-screen bg-white bg-contactImage bg-cover bg-center absolute md:relative top-0 left-0 md:top-auto md:left-auto z-0 md:z-auto" />
    </div>
  );
};

export default ContactPage;
