"use client";
import { getToken } from "@/lib/auth";

const page = () => {
  const token = getToken();
  console.log("Dashboard get Token", token);

  return (
    <>
      <div className="container mx-auto">
        <h1>Dashboard page</h1>
      </div>
    </>
  );
};

export default page;
