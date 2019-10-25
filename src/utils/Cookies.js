import { Cookies } from "react-cookie";

const cookie = new Cookies();
const cookies = {
  get: (name = "none") => {
    const item = cookie.get(name);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  getAll: (options = "") => {
    return cookie.getAll(options);
  },
  set: (name, value, options={}, expiresAfter=30) => {
    let d = new Date();
    d.setTime(d.getTime() + expiresAfter * 60 * 1000);
    options.expires = options.expires || d;

    cookie.set(name, JSON.stringify(value), options);
    return { name, value };
  },
  remove: (name = "") => {
    cookie.remove(name);
    return name;
  }
};

export default cookies;
