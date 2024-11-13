"use client";

import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

export default function Clock() {
  const [time, setTime] = useState(new Date()); 
  useEffect(() => { 
    const intervalId = setInterval(() => { 
      setTime(new Date()); 
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => { 
    let hours = date.getHours(); 
    const minutes = date.getMinutes(); 
    const seconds = date.getSeconds(); 
    const ampm = hours >= 12 ? 'PM' : 'AM'; 
    hours = hours % 12; 
    hours = hours ? hours : 12; // the hour '0' should be '12' 
    const strTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`; 
    return strTime; 
  };

  return <Typography variant="h2">{formatTime(time)}</Typography>;
}