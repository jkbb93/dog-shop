import useMediaQuery from "../../hooks/useMediaQuery";
import HeroSection from "./HeroSection";
import CTA from "./CTA";
import DogContainer from "../../components/Dog/DogContainer";

function HomePage() {
    const deviceSupportsHover = useMediaQuery("(any-hover: hover)");
    const minHeightMatches = useMediaQuery("(min-height: 670px)");

    return (
        <HeroSection>
            <CTA />
            {deviceSupportsHover && minHeightMatches && <DogContainer />}
        </HeroSection>
    );
}

export default HomePage;