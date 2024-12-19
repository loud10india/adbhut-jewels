"use client";
import { teamMembers } from "@/data/team";
import Image from "next/image";
import "animate.css";
import { useState } from "react";

export default function Team() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='container pt-120 pt-md-60 pb-120 pb-md-60' style={{ backgroundColor: "#eaeaea" }}>
            <h1 className='text-center'>Our Awards</h1>
            <p className='text-center mb-80 mb-md-40' style={{ letterSpacing: "0.2em" }}>
                Our customers know they can rely on us for design and quality. And our industry knows it too!
            </p>
            <div className='row justify-content-center'>
                {/* Map through team members */}
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='col-md-2 text-center'
                        style={{ flex: "0 0 20%", maxWidth: "20%" }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`team-item ${hoveredIndex === index ? "animate__animated animate__pulse" : ""}`}>
                            <div className='team-item-image'>
                                <Image width={400} height={800} src={member.image} alt='Image Description' className='team-image' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
