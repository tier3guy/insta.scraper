/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
"use client";

// Internal Imports
import { useState, useRef, useEffect } from "react";

// Components
import { Input, PrimaryButton, Loader } from "@/components";

const Index = () => {
  const [link, setLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [response, setResponse] = useState<{
    API?: string;
    Type?: string;
    media?: string;
    thumbnail?: any;
    title?: string;
  }>({});

  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (
      downloadLinkRef &&
      downloadLinkRef.current &&
      response &&
      response.media
    ) {
      downloadLinkRef.current.click();
    }
  }, [response]);

  const generatePost = async () => {
    setResponse({});
    setError("");
    setLoading(false);

    if (link === "") {
      setError("Please provide an URL.");
      return;
    }

    try {
      setLoading(true);
      const url = process.env.NEXT_PUBLIC_DOWNLOADER_BASEURL + link;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY as string,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST as string,
        },
      });
      const result = await response.json();
      setLoading(false);
      setResponse(result);
      console.log(response);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="w-100 flex-grow-1 flex flex-col gap-8 items-center justify-center">
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
      <PrimaryButton label={"Fetch Post"} action={generatePost} />
      <div className="p-4 w-1/2 flex flex-col justify-center items-center h-[50px]">
        {error !== "" && <p className="text-red-400 text-center">{error}</p>}
        {loading && <Loader />}

        {/* This component is actual initiating the download */}
        <a
          href={response?.media}
          download="video/mp4"
          ref={downloadLinkRef}
        ></a>
      </div>
    </div>
  );
};

export default Index;
