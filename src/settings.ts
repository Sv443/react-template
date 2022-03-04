import packageJson from "../package.json";

const { version, description, homepage, author } = packageJson;

export const settings = Object.freeze({
  info: {
    name: "MyAppName",
    version,
    description,
    homepage,
    author,
  },
});
