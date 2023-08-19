/* eslint-disable @next/next/no-sync-scripts */
"use client";

// Internal Imports
import { useState } from "react";

// Components
import { Input, PrimaryButton } from "@/components";

const Index = () => {
  const [link, setLink] = useState("");

  const generatePost = async () => {
    if (link === "") return;

    try {
      const url = process.env.NEXT_PUBLIC_DOWNLOADER_BASEURL + link;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY as string,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST as string,
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-100 h-100 flex-grow-1 min-h-[80vh] flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-5xl">insta.scraper</h1>
        <p className="w-2/3 text-center">
          An open-sourced web based application to download high quality
          instagram videos, stories and images without any ads.
        </p>
      </div>

      <Input
        value={link}
        setValue={setLink}
        placeholder="Paste your link here."
      />
      <PrimaryButton label={"Download"} action={generatePost} />
    </div>
  );
};

export default Index;
