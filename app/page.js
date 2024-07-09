"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import styles from "./page.module.css";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import Content1 from "./components/Content1/Content1";
import Sidebar1 from "./components/Sidebar1/Sidebar1";
import AppFooter from "./components/AppFooter/AppFooter";
import ContributorsSpecialThanks from "./components/ContributorsSpecialThanks/ContributorsSpecialThanks";
import React from "react";

const queryClient = new QueryClient();

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://munyathedev.co.za/public-api/opensourceprojectfortechbros?apiKey=opensourceprojectfortechbros"
      ).then((res) => {
        return res.json();
      }),
  });

  React.useEffect(() => {
    console.log("DATA", data);
  }, [data]);
  //
  //
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  //
  //
  return (
    <>
      <AppNavbar />
      <IntroductionSection />
      <br />
      <br />
      <main className={styles.sideBarContentContainer}>
        <div className={styles.sideBarContentContainerFlex}>
          <div className={styles.sideBarContainer}>
            <Sidebar1
              title="Tech Communities"
              description="Help our communities grow!"
              data={data?.data?.tech_communities}
              color="red"
            />
            <Sidebar1
              title="Community Updates"
              description="Latest updates from our communities!"
              data={data?.data?.articles}
              color="blue"
            />
          </div>
          <div className={styles.sideBarContainer + " " + "hide_on_desktop"}>
            <Sidebar1
              title="Find A Job"
              description="Land your next role!"
              data={data?.data?.find_a_job}
              color="#ff5500"
            />
            <Sidebar1
              title="Mentorship"
              description="Our mentors are ready to help!"
              data={data?.data?.mentorship}
              color="green"
            />
          </div>
        </div>
        <div className={styles.ContentContainer}>
          <Content1 articles={data?.data?.articles} />
        </div>
        <div className={styles.sideBarContainer + " hide_on_tablet"}>
          <Sidebar1
            title="Find A Job"
            description="Land your next role!"
            data={data?.data?.find_a_job}
            color="#ff5500"
          />
          <Sidebar1
            title="Mentorship"
            description="Our mentors are ready to help!"
            data={data?.data?.mentorship}
            color="green"
          />
        </div>
      </main>
      <br />
      <br />
      <ContributorsSpecialThanks contributors={data?.data?.contributors} />
      <br />
      <br />
      <AppFooter />
    </>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
