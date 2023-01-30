import { NextPage } from "next";
import Head from "next/head";

import MainNavigation from "@/components/Nav/MainNavigation";
import NavItem from "@/components/Nav/NavItem";
import Typography from "@/components/Typography/Typography";
import Card from "@/components/Ui/Card";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nonsense</title>
      </Head>
      <Card>
        <Typography variant="h1">Some nonsense Projects</Typography>
        <MainNavigation>
          <NavItem path="/">Home</NavItem>
        </MainNavigation>
      </Card>
    </>
  );
};

export default HomePage;
