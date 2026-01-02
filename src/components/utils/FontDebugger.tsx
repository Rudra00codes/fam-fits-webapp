"use client";

import { useEffect } from "react";

export function FontDebugger() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fontsToTrack = ["AntonLocal", "OswaldLocal"];
    
    console.log("🚀 Font Debugger Initialized");

    const checkFonts = () => {
      console.group("🏷️ Font Status Report");
      fontsToTrack.forEach(fontFamily => {
        const isLoaded = document.fonts.check(`12px ${fontFamily}`);
        const status = Array.from(document.fonts).find(f => f.family === fontFamily)?.status || "not found";
        
        if (isLoaded) {
          console.log(`✅ ${fontFamily}: Loaded and Ready`);
        } else {
          console.warn(`❌ ${fontFamily}: Not Loaded (Status: ${status})`);
        }
      });

      // Log all fonts currently in the document
      console.log("All registered fonts:", Array.from(document.fonts).map(f => ({
        family: f.family,
        status: f.status,
        weight: f.weight
      })));
      console.groupEnd();
    };

    // Check immediately
    checkFonts();

    // Check when fonts are finished loading
    document.fonts.ready.then(() => {
      console.log("🏁 All fonts have finished loading attempt.");
      checkFonts();
    });

    // Monitor for changes
    document.fonts.onloadingdone = () => {
        console.log("🔄 document.fonts.onloadingdone triggered");
        checkFonts();
    };

  }, []);

  return null;
}
