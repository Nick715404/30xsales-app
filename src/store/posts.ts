import { getAllPostsFX } from "@/api/posts/posts";
import { createStore } from "effector";

export const $posts = createStore([]);

$posts.on(getAllPostsFX.doneData, (_, posts) => posts);