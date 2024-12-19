"use client";
import Image from "next/image";

export default function About() {
    return (
        <div className='row  mt-120 mt-md-60 mb-120 mb-md-60' data-wow-delay='0.5s'>
            <div className='col-lg-6 col-xl-6  '>
                <p className='text-gray'>
                    Uncompromising attitude towards assuring, delivering and maintaining quality since its inception has been a strong propeller in
                    making Adbhut Jewels carve a niche for itself in this expansive jewellery trade.
                </p>
                <p className='text-gray'>
                    Every piece of jewellery crafted at Adbhut Jewels speaks of the integrity invested in shaping an ornament. Adbhut Jewels Pvt Ltd
                    has earned recognition for its pristine and superior-quality precious and rare stones that are masterfully embedded in precious
                    metals. Initiated in the year 1972, the company holds unbeaten leadership in bringing forth an unparalleled collection of special
                    and certified precious stones that are procured directly from the mine owners and traders based in different parts of the world.
                </p>
                <p className='text-gray'>
                    Mr Pankaj Badhalia, CEO, Adbhut Jewels along with Ms Bela Badhalia, Director and Head, Designing, Adbhut Jewels, have been a
                    strong driving force of the company.
                </p>
            </div>
            <div className='col-lg-6 mb-md-60'>
                <div className='position-relative'>
                    {/* Image */}
                    <div className='position-relative overflow-hidden'>
                        <Image
                            width={939}
                            height={539}
                            src='/assets/images/founders-adj.jpg'
                            className='image-fullwidth relative'
                            alt='Image Description'
                        />
                    </div>
                    {/* End Image */}
                </div>
            </div>
        </div>
    );
}
