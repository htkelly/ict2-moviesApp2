import React from "react";
import ActorProfileImage from "../components/actorProfileImage";
import SampleActor from "./sampleActor";

export default {
  title: "Actor Bio Page/ActorProfileImage",
  component: ActorProfileImage,
};

export const Basic = () => <ActorProfileImage actor={SampleActor} />;

Basic.storyName = "Default";
