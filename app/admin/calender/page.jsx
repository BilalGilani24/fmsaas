"use client";

import React, { useEffect, useState } from "react";
import {
  ScheduleXCalendar,
  useCalendarApp,  // useCalendarApp (default) rather than “useNextCalendarApp”, unless your version differs
} from "@schedule-x/react";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "temporal-polyfill/global"; // **Add this import** (if you haven’t)  
import "@schedule-x/theme-default/dist/index.css";

import useUserStore from "@/app/store/userid";
import axios from "axios";
import { toast } from "react-toastify";

function CalendarApp() {
  const [events, setEvents] = useState([]);
  const { userId, initializeUser } = useUserStore();

  const eventsService = createEventsServicePlugin();
  const calendar = useCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [],  // initial empty
      callbacks: {
        onEventClick: (ev) => {
          toast.info(
            `📌 ${ev.title}\n📝 ${ev.description}\n📋 Remarks: ${ev.remarks}`,
            { position: "top-right", autoClose: 5000 }
          );
        },
      },
    },
    [eventsService]
  );

  const formatToISO = (dateStr, timeStr) => {
    return new Date(`${dateStr}T${timeStr}`).toISOString().slice(0, 16);
  };

  const addOneHourISO = (dateStr, timeStr) => {
    const dt = new Date(`${dateStr}T${timeStr}`);
    dt.setHours(dt.getHours() + 1);
    return dt.toISOString().slice(0, 16);
  };

  const fetchEnquiries = async () => {
    try {
      const res = await axios.post("/api/admin/getadminenq", { userId });
      const data = res.data || [];
      const evs = [];
console.log(data)
      data.forEach((item, idx) => {
        if (item.Appointmentdate && item.Appointmenttime) {
          evs.push({
            id: `appointment-${idx}`,
            title: `Appointment - ${item.FirstName} ${item.LastName}`,
            start: formatToISO(item.Appointmentdate, item.Appointmenttime),
            end: addOneHourISO(item.Appointmentdate, item.Appointmenttime),
            description: `Course: ${item.Intrestedcourse}, Country: ${item.Intrestedcountry}`,
            remarks: item.Appointmentremarks || "",
          });
        }
        if (item.Followupdate && item.Followuptime) {
          evs.push({
            id: `followup-${idx}`,
            title: `Follow-up - ${item.FirstName} ${item.LastName}`,
            start: formatToISO(item.Followupdate, item.Followuptime),
            end: addOneHourISO(item.Followupdate, item.Followuptime),
            description: `Course: ${item.Intrestedcourse}, Country: ${item.Intrestedcountry}`,
            remarks: item.Followupremarks || "",
          });
        }
      });

      setEvents(evs);
    } catch (err) {
      console.error("Error fetching:", err);
      toast.error("Failed to fetch calendar data.");
    }
  };

  // initialize user
  useEffect(() => {
    initializeUser();
  }, []);

  // fetch when userId ready
  useEffect(() => {
    if (userId) {
      fetchEnquiries();
    }
  }, [userId]);

  // update plugin when events change
  useEffect(() => {
    if (events && eventsService && eventsService.calendarEvents?.setAll) {
      eventsService.calendarEvents.setAll(events);
    }
  }, [events]);

  return (
    <div className="calendar-wrapper ml-56" style={{ width: "100%", height: "700px" }}>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
