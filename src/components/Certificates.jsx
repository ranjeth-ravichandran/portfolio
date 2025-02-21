import { useState, useEffect } from "react";
import Image from "next/image";

export default function Certificates({ data }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageOverlay = (image) => {
        setSelectedImage(image);
    };

    const closeImageOverlay = () => {
        setSelectedImage(null);
    };

    // Prevent scrolling when the overlay is open
    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [selectedImage]);

    return (
        <div className="basic-container">
            <h2>Certifications</h2>
            <div className="certificates-container">
                {data.map((cert, index) => (
                    <div key={index} className="cert">
                        <h3>{cert.title}</h3>
                        <Image
                            src={cert.image}
                            width={220}
                            height={140}
                            className="certificate-thumbnail"
                            onClick={() => openImageOverlay(cert.image)}
                            style={{ cursor: "pointer" }}
                            alt={cert.title}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="cert-image-overlay" onClick={closeImageOverlay}>
                    <div className="cert-image-overlay-content">
                        <button className="cert-close-button" onClick={closeImageOverlay}>
                            Close
                        </button>
                        <Image src={selectedImage} width={800} height={600} alt="Certificate" />
                    </div>
                </div>
            )}
        </div>
    );
}
