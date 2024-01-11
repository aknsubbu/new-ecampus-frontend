'use client'
import { title } from "@/components/primitives";
import { dataFocusVisibleClasses } from "@nextui-org/theme";
import axios from "axios";
import React,{useState,useEffect} from 'react';
import MarkCard from "@/components/MarkCard";

interface CAMarks{
  courseCode: string;
  courseTitle: string;
  ca1: string;
  ca2: string;
  ca3: string;
  bestOfCA: string;
  at1: string;
  at2: string;
  ap: string;
  total: string;

}
export default function Page({ params }: { params: { slug: string } }) {
  const login=params.slug;
  //split params.slug into username and password
  const [username, password] = login.split("_");
  const [CAMarks, setCAMarks] = useState<CAMarks[]>([]);
  const [attendance, setAttendance] = useState(null);
  const [timetable, setTimetable] = useState(null);
  
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/attendance/${username}/${password}`)
    .then((response) => {
      setAttendance(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(`http://127.0.0.1:5000/marks/${username}/${password}`)
    .then((response) => {
      setCAMarks(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(`http://127.0.0.1:5000/timetable/${username}/${password}`)
    .then((response) => {
      setTimetable(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });


  }, [username,password]);


  //feature extreaction

	return (

  <div>
  <div>My Details: {params.slug}</div>
  <div>My Attendance: {attendance}</div>
  {/* //iterate markcard for each mark in CAMarks */}
  {CAMarks && CAMarks.map((mark, index) => (
    <MarkCard key={index} CAMarks={mark} />
  ))}


  

  </div>


  )

  }