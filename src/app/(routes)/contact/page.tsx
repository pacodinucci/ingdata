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
    <div className="h-screen flex items-center justify-center bg-contactbg bg-left-bottom">
      <div className="w-[60%] h-screen flex flex-col items-center justify-center space-y-8 pt-24">
        <div
          className={`flex flex-col space-y-4 w-1/2 text-xl ${montserrat.className} antialiased text-slate-800`}
        >
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p>
            Contact us for a demo of our solution and to learn what the benefits
            of a pilot project with us would bring to your production operations
          </p>
          <p>Phone: +541100000000</p>
          <p>Email: info@ingdata.com</p>
        </div>
        <Form />
      </div>
      <div className="w-[40%] h-screen bg-white bg-contactImage bg-cover bg-center" />
    </div>
  );
};

export default ContactPage;
