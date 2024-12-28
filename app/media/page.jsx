import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});
import PortfolioMassonry4 from "@/components/portfolio/PortfolioMassonry4";
import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItems } from "@/data/menu";

export const metadata = {
    title: "Element Page Cookie Banner || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Media() {
    return (
        <>
            <div className='theme-main'>
                <div className='page' id='top'>
                    <nav className='main-nav dark dark-after-scroll transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav>
                    <main id='main'>
                        <section className='page-section pt-0 pb-0' id='home'>
                            <ParallaxContainer
                                className='page-section bg-gray-light-1 bg-light-alpha-90 parallax-5 position-relative'
                                style={{
                                    backgroundImage: "url(/assets/images/demo-fancy/bg-shape-1.svg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className='position-absolute top-0 start-0 w-100 h-100 bg-dark' style={{ opacity: 0.5 }}></div>
                                <div className='container position-relative pt-30 pt-sm-50'>
                                    {/* Section Content */}
                                    <div className='text-center'>
                                        <div className='row'>
                                            {/* Page Title */}
                                            <div className='col-md-8 offset-md-2'>
                                                <h1 className='hs-title-1 mb-20'>
                                                    <span className='wow charsAnimIn' data-splitting='chars' style={{ color: "white" }}>
                                                        <AnimatedText text='Media' />
                                                    </span>
                                                </h1>
                                            </div>
                                            {/* End Page Title */}
                                        </div>
                                    </div>
                                    {/* End Section Content */}
                                </div>
                            </ParallaxContainer>
                        </section>
                        {/* Section */}
                        <section className='page-section'>
                            <PortfolioMassonry4 />
                        </section>
                        {/* End Section */}
                        <hr />
                    </main>

                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
