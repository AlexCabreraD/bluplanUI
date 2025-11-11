"use client";

import { NextStudio } from "next-sanity/studio";
import { useEffect } from "react";

import config from "../../../../sanity.config";

export function Studio() {
  useEffect(() => {
    // Suppress known React 19 + Sanity compatibility warnings in development
    if (process.env.NODE_ENV === "development") {
      const originalError = console.error;
      console.error = (...args) => {
        if (typeof args[0] === "string" && args[0].includes("disableTransition")) {
          return;
        }
        originalError.apply(console, args);
      };
    }
  }, []);

  return <NextStudio config={config} />;
}
