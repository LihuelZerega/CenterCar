import NavBar from "../../Components/NavBar/NavBar.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import HeroSection2 from "../../Components/HeroSection/HeroSection2.jsx";
import HeroSection3 from "../../Components/HeroSection/HeroSection3.jsx";
import HeroSection4 from "../../Components/HeroSection/HeroSection4.jsx";
import HeroSection5 from "../../Components/HeroSection/HeroSection5.jsx";
import Faq from "../../Components/HeroSection/Faq.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


const HomePage = () => {
    return (
        <>
            <NavBar/>
            <HeroSection/>
            <HeroSection2/>
            <HeroSection3/>
            <HeroSection4/>
            <HeroSection5/>
            <Faq/>
            <Footer/>
        </>
    )
}

export default HomePage;
