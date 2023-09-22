import HeroSection from "./HeroSection";
import CTA from "./CTA";
import DogContainer from "../../components/Dog/DogContainer";

function HomePage() {
    return (
        <HeroSection>
            <CTA />
            <DogContainer />
        </HeroSection>
    );
}

export default HomePage;