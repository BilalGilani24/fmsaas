"use client";
import React, { useState, useEffect } from "react";
import {
  ScheduleXCalendar,
  useNextCalendarApp,
} from "@schedule-x/react/dist/index";
import {
  createViewDay,
  createViewWeek,
  createViewMonthGrid,
  createViewMonthAgenda,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";

import "@schedule-x/theme-default/dist/index.css";
import Calenderpic from "./calenderpic";
import useUserStore from "@/app/store/userid";
import { toast } from "react-toastify";
import axios from "axios";

function CalendarApp() {
  const [events, setEvents] = useState([]);
  const { userId, initializeUser } = useUserStore();

  // Create events service plugin and store it so we can access methods like setAll later
  const eventsServicePlugin = createEventsServicePlugin();
  const plugins = [eventsServicePlugin, createDragAndDropPlugin()];

  const calendar = useNextCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [], // Start empty, populate manually
      callbacks: {
        onEventClick: (event) => {
          toast.info(
            `📌 ${event.title}\n📝 ${event.description}\n📋 Remarks: ${event.remarks}`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        },
      },
    },
    plugins
  );

  const formatToISO = (dateStr, timeStr) => {
    const iso = new Date(`${dateStr}T${timeStr}`).toISOString().slice(0, 16);
    return iso;
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

      const formattedEvents = [];

      data.forEach((item, index) => {
        // Appointment Event
        if (item.Appointmentdate && item.Appointmenttime) {
          formattedEvents.push({
            id: `appointment-${index}`,
            title: `Appointment - ${item.FirstName} ${item.LastName}`,
            start: formatToISO(item.Appointmentdate, item.Appointmenttime),
            end: addOneHourISO(item.Appointmentdate, item.Appointmenttime),
            description: `Course: ${item.Intrestedcourse}, Country: ${item.Intrestedcountry}`,
            remarks: item.Appointmentremarks || "",
          });
        }

        // Follow-up Event
        if (item.Followupdate && item.Followuptime) {
          formattedEvents.push({
            id: `followup-${index}`,
            title: `Follow-up - ${item.FirstName} ${item.LastName}`,
            start: formatToISO(item.Followupdate, item.Followuptime),
            end: addOneHourISO(item.Followupdate, item.Followuptime),
            description: `Course: ${item.Intrestedcourse}, Country: ${item.Intrestedcountry}`,
            remarks: item.Followupremarks || "",
          });
        }
      });

      setEvents(formattedEvents); // Store in local state
    } catch (err) {
      console.error("Error fetching enquiries:", err);
      toast.error("Failed to fetch calendar data.");
    }
  };

  // Initialize user
  useEffect(() => {
    initializeUser();
  }, []);

  // Fetch data when userId is available
  useEffect(() => {
    if (userId) {
      fetchEnquiries();
    }
  }, [userId]);

  // Update calendar plugin when events are fetched
  useEffect(() => {
    if (events.length > 0 && eventsServicePlugin?.calendarEvents?.setAll) {
      eventsServicePlugin.calendarEvents.setAll(events);
    }
  }, [events]);

  return (
    <div className="flex flex-col">
      <div>
        <Calenderpic />
      </div>
      <div className="flex justify-center items-center w-[1020px] ml-52 mt-5 mb-5">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
    </div>
  );
}

export default CalendarApp;
