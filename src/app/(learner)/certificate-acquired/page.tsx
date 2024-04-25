import NavbarBanner from "@/components/navbar/NavbarBanner";
import React from "react";
// import dummyAssets from "../../../public/";
import Image from "next/image";
import Back from "@/components/buttons/Back";
import CertificateCard from "@/app/_components/courses/CertificateCard";

type Props = {};

const CertificateAcquired = (props: Props) => {
  return (
    <div>
      <NavbarBanner />

      <div className="wrapper">
        <div className="flex items-center justify-between my-10 border-b pb-10">
          <div className="flex items-center gap-5">
            <Back navigateBack />

            <div className="">
              <h2 className="text-gray-900 text-4xl font-medium ">
                Certificates Acquired
              </h2>

              <p className=" text-sm text-slate-600">
                See all your that you have gathered so far in your learning
                journey
              </p>
            </div>
          </div>
        </div>

        <div className="px-5">
          <div className="grid grid-cols-4 gap-8">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateAcquired;
