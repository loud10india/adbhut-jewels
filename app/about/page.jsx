import Footer1 from "@/components/footers/Footer1";

import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(() => import("@/components/common/ParallaxContainer"), {
    ssr: false, // Disable server-side rendering
});

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import { menuItems } from "@/data/menu";

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
                                                        <AnimatedText text='About us' />
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
                        <section className='page-section'>
                            <div className='container position-relative'>
                                <p>‘No matter how much you gain or lose, jewellery always fits’ – Ellen</p>
                                <p>
                                    Jewellery adds to the beautiful you and Adbhut Jewels knows and acknowledges exactly that. Every piece of
                                    jewellery crafted at Adbhut Jewels speaks of the integrity invested in moulding it. The company holds unbeaten
                                    leadership in bringing forth an unparalleled collection of special and certified precious jewellery owing to the
                                    years of experience in the business.
                                </p>
                                <p>
                                    Mr. Mohan Badhalia, the Founder and Director of Adbhut Jewels is a true visionary whose setup and establishment
                                    that cater to unleashed demand in the expansive jewellery market. Mr. Monto Badhalia – Director and CEO along with
                                    Ms. Bela Badhalia – Director and Head of Designing have been the driving force of Adbhut Jewels and have
                                    successfully placed Adbhut on national and international maps. Mr. Monto supervises all global and domestic
                                    purchases of rare and precious natural stones. Ms. Bela Badhalia heads finished jewellery and is the Chief
                                    Consultant & Design approver at Adbhut Jewels. Her experience, creative orientation, design aptitude, and
                                    entrepreneurial abilities have enabled Adbhut Jewels to be recognised for its impeccable finishing and
                                    contemporary designs.
                                </p>
                                <p>
                                    Together, their vision, along with their passion for perfection have been steering Adbhut Jewels at newer heights.
                                </p>
                                <p>
                                    Adbhut Jewels participates in various jewellery shows and trade fairs and upholds the reputation of being an
                                    ethical and responsible buyer/seller.
                                </p>
                                <div>
                                    Why us?
                                    <ul>
                                        <li>Uncompromising attitude towards assuring, delivering and maintaining Quality.</li>
                                        <li>Well- defined process of authentication and quality assessment for each piece of jewellery.</li>
                                        <li>Stunning and exquisite ornaments.</li>
                                        <li>
                                            Being there for you at each and every step – be it a cocktail party or your big day, we make sure all your
                                            needs are met.
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    Adbhut Jewels has been proudly catering to the diverse demands of private collectors, leading international
                                    business houses of Southeast Asia and individual clients. Glamour world icons and renowned trade and fashion
                                    events have showcased a diverse range of Adbhut’s jewellery.
                                </p>
                            </div>
                        </section>
                    </main>
                    <hr />
                    <Footer1 />
                </div>{" "}
            </div>
        </>
    );
}
