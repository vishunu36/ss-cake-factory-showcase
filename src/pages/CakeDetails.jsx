import React from "react";
import { useParams } from "react-router-dom";
import cakes from "../data/cakes";

function CakeDetails() {
    const { id } = useParams();

    const cake = cakes.find((item) => item.id === Number(id));

    if (!cake) {
        return <h1 style={{ color: "white" }}>Cake Not Found</h1>;
    }

    return (
        <div style={{
            background: "#00145c",
            minHeight: "100vh",
            color: "white",
            textAlign: "center",
            padding: "50px"
        }}>
            <h1>{cake.name}</h1>

            <img
                src={cake.image}
                alt={cake.name}
                style={{
                    width: "350px",
                    borderRadius: "20px",
                    marginTop: "20px"
                }}
            />

            <h2>{cake.price}</h2>
            <p>Flavor: {cake.flavor}</p>
            <p>Weight: {cake.weight}</p>

            <div className="cake-buttons">
                <a href={cake.location} target="_blank" rel="noreferrer" className="location-btn">
                    View Location
                </a>

                <a href={cake.whatsapp} target="_blank" rel="noreferrer" className="whatsapp-btn">
                    WhatsApp
                </a>
            </div>


        </div>
    );
}

export default CakeDetails;