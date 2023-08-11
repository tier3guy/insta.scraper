"use client";

import { useState } from "react";

// Components
import { Input, PrimaryButton } from "@/components";

const Index = () => {
  const [link, setLink] = useState("");

  const generatePost = () => {
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: link,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-100 h-100 flex-grow-1 min-h-[80vh] flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-5xl">threads.scraper</h1>
        <p>Convert your threads into customizable posts in seconds.</p>
      </div>

      <Input
        value={link}
        setValue={setLink}
        placeholder="Paste your link here."
      />
      <PrimaryButton label={"Create Image"} action={generatePost} />
    </div>
  );
};

export default Index;
