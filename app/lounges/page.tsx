import { auth } from "@clerk/nextjs/server";

import Search from "@/components/search/Search";
import getAllLounges from "@/data/lounge/getAllLounges";
import AllLoungesTable from "./components/AllLoungesTable";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/react";
import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lounge Center - Lounges",
  description: "Find and filter all lounges, check your access, and more."
};

const LoungesPage = async () => {
  const { sessionClaims } = auth();

  const allLounges = await getAllLounges();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  return (
    <div>
      <Search className="mb-10" placeholder="Find a lounge or airport..." />
      <LoungeCardGroup heading="Popular Lounges" userCards={userCards} />
      <h2 className="text-center mt-20 mb-8 text-4xl">All Lounges</h2>

      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300"></div>
          </Skeleton>
        }
      >
        <AllLoungesTable
          lounges={allLounges || []}
          sessionClaims={sessionClaims}
        />
      </Suspense>
    </div>
  );
};

export default LoungesPage;
