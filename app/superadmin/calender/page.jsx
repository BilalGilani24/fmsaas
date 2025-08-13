"use client";
import React from "react";
import {
  ScheduleXCalendar,
  useNextCalendarApp,
} from "@schedule-x/react/dist/index";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import "@schedule-x/theme-default/dist/index.css";
import { useEffect } from "react";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import Calenderpic from "./calenderpic";

function CalendarApp() {
  const plugins = [
    createEventsServicePlugin(),
    createDragAndDropPlugin(),
    createEventModalPlugin(),
  ];

  const calendar = useNextCalendarApp(
    {
      views: [
        createViewDay(),
        createViewWeek(),
        createViewMonthGrid(),
        createViewMonthAgenda(),
      ],
      events: [
        {
          id: "1",
          title: "Event 1",
          start: "2024-10-29 00:00",
          end: "2024-10-29 02:00",
          description: "meeting with university consultants",
        },
      ],
    },
    plugins
  );

  useEffect(() => {
    // get all events
    calendar?.eventsService.getAll();
  }, []);

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
