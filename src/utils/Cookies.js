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
  set: (name, value, options = {}, expiresAfter = 30) => {
    let d = new Date();
    d.setTime(d.getTime() + expiresAfter * 60 * 1000);
    options.expires = options.expires || d;
    if (typeof value === "object")
      cookie.set(name, JSON.stringify(value), options);
    else cookie.set(name, value, options);
    return { name, value };
  },
  remove: (name = "") => {
    cookie.remove(name);
    return name;
  }
};

export default cookies;
