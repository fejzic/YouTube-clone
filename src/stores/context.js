import { createContext } from "react";

import UserStore from "./UserStore";
import VideoSearchStore from "./VideoSearchStore";
import VideoStore from "./VideoStore";

const root = {};
root.userStore = new UserStore(root);
root.videoSearchStore = new VideoSearchStore(root);
root.videoStore = new VideoStore(root);

export default createContext(root);
