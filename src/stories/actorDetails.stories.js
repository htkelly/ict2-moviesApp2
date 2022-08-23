import React from "react";
import ActorDetails from "../components/actorDetails";
import SampleActor from "./sampleActor";

export default {
  title: "Actor Bio Page/ActorDetails",
  component: ActorDetails,
};

export const Basic = () => <ActorDetails actor={SampleActor} />;

Basic.storyName = "Default";
