import CreateFlow from "@components/_pages/Create";
import { ContractFactoryWrapper } from "@hooks/useContractFactory";
import { RewardsWrapper } from "@hooks/useRewards/store";
import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create a new contest - jokerace</title>
        <meta name="description" content="@TODO: change this" />
      </Head>

      <ContractFactoryWrapper>
        <RewardsWrapper>
          <CreateFlow />
        </RewardsWrapper>
      </ContractFactoryWrapper>
    </>
  );
};

export default Page;
