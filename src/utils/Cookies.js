import { Cookies } from "react-cookie";

const cookie = new Cookies();
const cookies = {
  get: (name = "none") => {
    const item = cookie.get(name);
    if (item && typeof item !== "object") {
      try {
        return JSON.parse(item);
      } catch (error) {
        return item;
      }
    } else {
      return item;
    }
  },
  getAll: (options = "") => {
    return cookie.getAll(options);
  },
  set: (name, value, options = {}, expiresAfter = 7) => {
    let d = new Date();
    d.setTime(d.getTime() + expiresAfter * 24 * 60 * 60 * 1000);
    options.expires = options.expires || d;
    options.path = "/";
    if (process.env.NODE_ENV === "production") options.domain = "rehyped.com";

    if (typeof value === "object")
      cookie.set(name, JSON.stringify(value), options);
    else cookie.set(name, value, { options });
    return { name, value };
  },
  remove: (name = "") => {
    cookie.remove(name, { path: "/" });
    return name;
  }
};

export default cookies;
