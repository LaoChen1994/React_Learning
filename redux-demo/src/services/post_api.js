import { get } from "axios";

export function getPosts() {
  return get("http://jsonplaceholder.typicode.com/posts");
}
