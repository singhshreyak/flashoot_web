"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none gradient-text">
                Content Creation
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://flashoot.com/wp-content/uploads/2025/03/Screenshot-2025-03-19-at-12.28.39%E2%80%AFPM-min.png"
              alt="Content Creation Dashboard"
              className="w-full h-full object-contain scale-110"
              style={{
                maxWidth: "100%",
                maxHeight: "100%"
              }}
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}