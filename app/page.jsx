import Footer1 from "@/components/footers/Footer1";
import AnimatedText from "@/components/common/AnimatedText";

import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import Image from "next/image";
import About from "@/components/homes/home-1/About";
import Team from "@/components/homes/home-1/Team";

import Hero4 from "@/components/homes/home-1/heros/Hero4";
import Portfolio from "@/components/homes/home-1/Portfolio";

export const metadata = {
    title: "Home 1 Slider Fullscreen MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1SliderFullscreenMultiPage() {
    return (
        <>
            <div className='theme-main '>
                <div className='page' id='top'>
                    <nav className='main-nav dark dark-after-scroll transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>
                    <main id='main'>
                        <Hero4 />
                        {/* <Home1 /> */}
                    </main>
                    <section className='' id='about'>
                        <div className='container position-relative pt-20 pt-md-10 pb-20 pb-md-10' style={{ backgroundColor: "#eae9e9" }}>
                            <About />
                        </div>
                    </section>
                    <section className='pt-120 pt-md-60 pb-120 pb-md-60' id='portfolio'>
                        <Portfolio />
                    </section>
                    <section id='team'>
                        <Team />
                    </section>
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
