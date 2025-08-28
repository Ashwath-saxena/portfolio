// app/components/Work.jsx
"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const workHistory = [
  {
    role: "Software Development Engineer",
    company: "Laureate Global",
    location: "Bangalore, India",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-10-31"),
    description:
      "-> Developed 2 dynamic websites using ReactJS: LARC (Leader’s Academy of Refinement and Class) and CorpMarshal (India’s pioneering Corporate Debate Show), increasing traffic by 20%. -> Enhanced the online presence and user experience through strategic design improvements, leading to a 25% increase in site retention and created accessible platforms tailored for diverse audiences, ensuring accessibility, engagement and improving inclusivity by 10%.",
  },
  {
    role: "Software Development Engineer",
    company: "StampMyVisa",
    location: "Bangalore, India",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-06-30"),
    description:
      " -> Developed responsive web pages for StampMyVisa’s B2C product, improving page load speeds by 35% and mobile usability scores by 40% -> Collaborated with cross-functional teams to implement scalable UI components using Next.js, TailwindCSS, and Framer Motion, enhancing design consistency and reducing dev turnaround time by 30%",
  },
  {
    role: "Software Development Engineer",
    company: "SITE Digital Solutions",
    location: "New Delhi, India",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2025-02-28"),
    description:
      " -> Built responsive websites for 3+ clients using HTML, CSS, JavaScript, and React, following Agile development and also optimized website performance, improving load times by 40% for client sites -> Automated workflows, reducing manual processes for 5+ clients using APIs and custom scripts",
  },
];

const MONTH_HEIGHT = 55;
const COLLAPSED_HEIGHT = 240;

const getMonthsDiff = (d1, d2) => {
  const months = (d2.getFullYear() - d1.getFullYear()) * 12;
  return months - d1.getMonth() + d2.getMonth();
};

const formatDate = (date) => {
  if (!date || !(date instanceof Date)) return "Present";
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const TimelineCard = ({ job, index, minDate }) => {
  const isLeft = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  const top = getMonthsDiff(minDate, job.startDate) * MONTH_HEIGHT;

  const descriptionLines = job.description
    .split("->")
    .filter((line) => line.trim() !== "");
  const needsReadMore = descriptionLines.length > 1;

  const cardAnimation = {
    initial: { opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 },
    whileInView: { opacity: 1, x: 0, scale: 1 },
    viewport: { amount: 0.2 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      style={{ top: `${top}px` }}
      className={`absolute w-[calc(50%-1.5rem)] sm:w-[calc(50%-2.5rem)] flex ${
        isLeft ? "left-0 justify-end" : "right-0 justify-start"
      }`}
      {...cardAnimation}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative w-full -mt-6 max-w-md rounded-xl shadow-md border border-gray-400 bg-white hover:shadow-black hover:bg-light-hover duration-500 flex flex-col"
        animate={{ height: isExpanded ? "auto" : COLLAPSED_HEIGHT }}
      >
        <div className="p-4 sm:p-5 md:p-6 pb-2">
          <div
            className={`absolute top-6 w-4 h-4 bg-white border-gray-300 transform rotate-45 ${
              isLeft
                ? "right-[-8px] border-t border-r"
                : "left-[-8px] border-b border-l"
            }`}
          ></div>
          <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
            {job.role}
          </h3>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 mt-1">
            <Briefcase size={14} />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mt-1">
            <MapPin size={14} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
            <Calendar size={14} />
            <span>
              {formatDate(job.startDate)} - {formatDate(job.endDate)}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6 md:-mt-10 pt-2 flex-grow overflow-hidden">
          <div className="text-sm text-gray-600 leading-relaxed">
            {isExpanded ? (
              descriptionLines.map((line, i) => (
                <p key={i} className="mb-1">
                  <span className="mr-2">•</span>
                  {line.trim()}
                </p>
              ))
            ) : (
              <p className="mb-1">
                <span className="mr-2">•</span>
                {`${descriptionLines[0].trim().substring(0, 80)}...`}
              </p>
            )}
          </div>
        </div>
        {needsReadMore && (
          <div className="px-5 md:px-6 pb-4 pt-0 mt-auto text-center ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200 border border-gray-300 text-gray-800 text-xs font-bold hover:bg-blue-300 transition z-10 cursor-pointer"
            >
              {isExpanded ? "Read Less" : "Read More"}
              {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const { minDate, maxDate, timelineMarkers } = useMemo(() => {
    if (workHistory.length === 0) {
      const now = new Date();
      return { minDate: now, maxDate: now, timelineMarkers: [] };
    }
    const sortedHistory = [...workHistory].sort(
      (a, b) => a.startDate - b.startDate
    );
    const dates = sortedHistory.flatMap((job) => [
      job.startDate,
      job.endDate || new Date(),
    ]);

    const minDate = new Date(Math.min(...dates));
    minDate.setDate(1);
    minDate.setMonth(minDate.getMonth() - 1);

    const maxDate = new Date(Math.max(...dates));
    maxDate.setDate(1);
    maxDate.setMonth(maxDate.getMonth() + 7);

    const markers = [];
    let currentDate = new Date(minDate);
    while (currentDate <= maxDate) {
      const isYearMarker = currentDate.getMonth() === 0;
      markers.push({
        date: new Date(currentDate),
        type: isYearMarker ? "year" : "month",
      });
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return { minDate, maxDate, timelineMarkers: markers };
  }, []);

  const timelineHeight = (getMonthsDiff(minDate, maxDate) + 1) * MONTH_HEIGHT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="bg-white w-full px-4 md:px-[12%] py-16 md:py-24 font-Ovo"
      id="work"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
           career path
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          my work history
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        >
          a timeline of my professional journey, highlighting key roles and
          accomplishments.
        </motion.p>

        <div className="relative" style={{ height: `${timelineHeight}px` }}>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

          <motion.div
            className="relative w-full h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
          >
            {timelineMarkers.map((marker) => {
              const top = getMonthsDiff(minDate, marker.date) * MONTH_HEIGHT;
              return (
                <motion.div
                  key={marker.date.toString()}
                  variants={itemVariants}
                  style={{ top: `${top}px` }}
                  className="absolute left-1/2 -translate-x-1/2 w-full flex items-center"
                >
                  {marker.type === "year" ? (
                    <>
                      <div className="flex-grow border-t border-gray-300"></div>
                      <div className="w-16 h-8 bg-blue-400 text-white border-2 border-white rounded-full flex items-center justify-center shadow-md z-10 mx-2 sm:mx-4">
                        <span className="font-bold text-sm">
                          {marker.date.getFullYear()}
                        </span>
                      </div>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-grow border-t border-dashed border-gray-200"></div>
                      <span className="text-xs text-gray-400 mx-2 sm:mx-4">
                        {marker.date.toLocaleDateString("en-US", {
                          month: "short",
                        })}
                      </span>
                      <div className="flex-grow border-t border-dashed border-gray-200"></div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {workHistory
            .sort((a, b) => a.startDate - b.startDate)
            .map((job, index) => (
              <TimelineCard
                key={index}
                job={job}
                index={index}
                minDate={minDate}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
