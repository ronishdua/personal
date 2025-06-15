"use client";

import { useState, useEffect } from "react";

export const useVisitorLocation = () => {
  const [visitorLocation, setVisitorLocation] = useState<string>("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city && data.region) {
          setVisitorLocation(`${data.city}, ${data.region}`);
        } else {
          setVisitorLocation("San Francisco, CA");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setVisitorLocation("Unknown Location");
      }
    };

    fetchLocation();
  }, []);

  return visitorLocation;
};
