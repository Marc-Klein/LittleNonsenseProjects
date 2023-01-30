import { NextPage } from "next";
import Head from "next/head";

import MainNavigation from "@/components/Nav/MainNavigation";
import NavItem from "@/components/Nav/NavItem";
import Typography from "@/components/Typography/Typography";
import Card from "@/components/Ui/Card";
import Drawer from "@/components/Ui/Drawer";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nonsense</title>
      </Head>
      <Card>
        <Typography variant="h1">Some nonsense Projects</Typography>
        <MainNavigation>
          <Typography variant="h2">
            <NavItem path="/">Text to Speech</NavItem>
            <Drawer title="Games">
              <NavItem path="/">Pong</NavItem>
              <NavItem path="/">Snake</NavItem>
              <NavItem path="/">TicTacToe</NavItem>
            </Drawer>
          </Typography>
        </MainNavigation>
      </Card>
    </>
  );
};

export default HomePage;
