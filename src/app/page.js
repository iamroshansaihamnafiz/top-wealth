import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import IfYou from "@/components/IfYou/IfYou";
import Opportunity from "@/components/Opportunity/Opportunity";
import Outcome from "@/components/Outcome/Outcome";
import Footer from "@/components/Footer/Footer";
import HowHelp from "@/components/HowHelp/HowHelp";
import WhyChoose from "@/components/WhhyChoose/WhyChoose";
import Testimonial from "@/components/Testimonial/Testimonial";
import FAQ from "@/components/FAQ/FAQ";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <IfYou/>
            <Opportunity/>
            <Outcome/>
            <HowHelp/>
            <WhyChoose/>
            <Testimonial/>
            <FAQ/>

            <Footer/>
        </>
    )
}
