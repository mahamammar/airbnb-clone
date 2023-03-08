import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header.jsx";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-x-6 gap-y-8">
      {places.length > 0 &&
        places.map((place) => {
          return (
            <Link to={'place/' + place._id}>
              <div className="bg-gray-500 mb-2 rounded-2xl flex">
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:4000/uploads/" + place.photos[0]}
                />
              </div>
              <h3 className="font-bold ">{place.address}</h3>
              <h2 className="text-sm text-gray-500">{place.title}</h2>
              <div className="mt-2">
                <span className="font-bold">£{place.price}</span> per night
              </div>
            </Link>
          );
        })}
    </div>
  );
}
