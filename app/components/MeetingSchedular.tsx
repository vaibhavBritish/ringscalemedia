// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   format,
//   startOfMonth,
//   endOfMonth,
//   eachDayOfInterval,
//   getDay,
// } from "date-fns";

// const MeetingScheduler = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");

//   const monthStart = startOfMonth(new Date());
//   const monthEnd = endOfMonth(new Date());

//   const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

//   const times = ["10:30", "12:00", "14:00", "15:30", "16:45"];


//   const startDay = getDay(monthStart);
//   const emptyDays = startDay === 0 ? 6 : startDay - 1;

//   return (
//     <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-pink-100 mt-16">

//       <div className="bg-pink-400 text-white p-10">
//         <div className="flex flex-col items-center">
//           <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
//             👩‍💼
//           </div>

//           <h2 className="text-2xl font-semibold mt-4">Schedule a Meeting</h2>
//           <p className="text-lg opacity-90">
//             {format(new Date(), "MMMM yyyy")}
//           </p>
//         </div>

//         <div className="grid grid-cols-7 gap-2 text-center font-medium mt-8 text-sm opacity-90">
//           {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
//             <p key={d}>{d}</p>
//           ))}
//         </div>

//         <div className="grid grid-cols-7 gap-2 mt-3">
//           {Array.from({ length: emptyDays }).map((_, i) => (
//             <div key={`empty-${i}`} />
//           ))}

//           {days.map((day) => (
//             <motion.div
//               key={day.toISOString()}
//               whileHover={{ scale: 1.05 }}
//               onClick={() => setSelectedDate(day)}
//               className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
//                 ${
//                   selectedDate.toDateString() === day.toDateString()
//                     ? "bg-white text-pink-600 font-semibold shadow"
//                     : "opacity-80 hover:bg-white/20"
//                 }`}
//             >
//               {format(day, "d")}
//             </motion.div>
//           ))}
//         </div>
//       </div>

     
//       <div className="bg-white p-10">
//         <h3 className="text-lg font-semibold">Meeting duration</h3>

//         <div className="bg-gray-200 py-3 rounded-md text-center mt-2">
//           15 mins
//         </div>

//         <h3 className="text-lg font-semibold mt-6">
//           What time works best?
//         </h3>

//         <p className="text-gray-600 text-sm mt-1">
//           Showing times for{" "}
//           <span className="font-semibold">
//             {format(selectedDate, "d MMMM yyyy")}
//           </span>
//         </p>

//         <p className="text-pink-600 font-medium text-sm mt-3">
//           UTC +05:30 New Delhi, Mumbai, Calcutta
//         </p>

//         <div className="grid grid-cols-2 gap-3 mt-6">
//           {times.map((t) => (
//             <motion.div
//               key={t}
//               whileHover={{ scale: 1.03 }}
//               onClick={() => setSelectedTime(t)}
//               className={`border px-5 py-3 rounded-lg text-center cursor-pointer
//                 ${
//                   selectedTime === t
//                     ? "border-pink-500 text-pink-600 font-semibold"
//                     : "border-gray-300 hover:border-pink-300"
//                 }`}
//             >
//               {t}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetingScheduler;
