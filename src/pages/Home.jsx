import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import OurStory from "../components/OurStory";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";

export default function Home (){
    return(
        <div>
            <Hero />
            <Specialties />
            <OurStory />
            <BestSellers />
            <Testimonials />

        </div>

    );
}
