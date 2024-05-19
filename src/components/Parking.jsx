import { useEffect, useState, useContext } from "react";
import "../styles/Parking.css";
import { io } from "socket.io-client";
import { PageContext } from "../App";

function Parking() {
  const [data, setData] = useState(null);
  const [distance, setDistance] = useState(0);
  const { changePage } = useContext(PageContext);

  useEffect(() => {
    const socket = io("http://192.168.1.91:3000");

    socket.on("connect", () => {
      console.log("Conectado al servidor");
    });

    socket.on("data", (newData) => {
      setData(parseInt(newData) * 1.9 - 320);
      console.log(newData);
    });
    socket.on("distance", (distance) => {
      setDistance(parseInt(distance));
      console.log(distance);
    });

    return () => {
      socket.off("data");
      socket.off("connect");
      socket.close();
    };
  }, []);

  const pixelDistance = data;
  const carSpeed = Math.max(0, Math.min(0.5, 100 - distance * 0.1));

  return (
    <div className="parking-container">
      <div className="back-container">
        <div className="back">
          <i className="bx bx-chevron-left"></i>
          <p
            onClick={() => {
              setData(500);
              setDistance(0);
              changePage("Home");
            }}
          >
            {" "}
            Volver
          </p>
        </div>
      </div>
      <div className="information">
        <p>Distancia en cm: {distance}</p>
      </div>
      <picture>
        <img
          src="/public/images/Parking/parking-bg.png"
          alt="bg"
          className="bg"
        />
        <img
          src="/public/images/Parking/car.png"
          alt="car"
          className="car"
          style={{
            transform: `translate(-50%, ${pixelDistance}px)`,
            transition: `transform ${carSpeed}s ease-in-out`,
          }}
        />
      </picture>
      {/* <button className="btn btn-finish">Finalizar</button> */}
    </div>
  );
}

export default Parking;
