import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import Contact from "@/components/homes/home-1/Contact";

export const metadata = {
    title: "Element Page Cookie Banner || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
    description: "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function About() {
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
                                                        <AnimatedText text='Contact us' />
                                                    </span>
                                                </h1>
                                                {/* <div className='row'>
                                                    <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                                                        <p
                                                            className=' mb-0 wow fadeIn'
                                                            data-wow-delay='0.2s'
                                                            data-wow-duration='1.2s'
                                                            style={{ color: "white" }}
                                                        >
                                                            Open this file in the HTML editor and copy the code of the wished component.
                                                        </p>
                                                    </div>
                                                </div> */}
                                            </div>
                                            {/* End Page Title */}
                                        </div>
                                    </div>
                                    {/* End Section Content */}
                                </div>
                            </ParallaxContainer>
                        </section>
                        <section className='mt-120 mt-md-60 mb-120 mb-md-60'>
                            <Contact />
                        </section>
                    </main>
                    <hr />
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
