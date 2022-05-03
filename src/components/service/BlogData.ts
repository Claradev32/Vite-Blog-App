import IBlog from "./interface";
export const genBlogId = (): string => Math.random().toString(36).slice(-6);

export const BlogData: IBlog[] = [
  {
    id: genBlogId(),
    title: "Build a REST API with Typescript and Node.js",
    cover:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/typescript.png",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse nesciunt ab nulla facere adipisci magnam quos provident! Nam, dolor aut sunt ab expedita minus quae repellendus iure fuga perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates, obcaecati quod officiis a fuga, alias laborum quisquam eius, ullam et iure corporis assumenda dolores porro! Molestiae, magnam fuga! Voluptatum?",
    description:
      "This is a comprehensive tutorial on how to build a REST backend with Typescript and Node.js",
    dateCreated: new Date(Date.now()).toString().substr(4, 11),
    createdBy:"John Doe"
  },
];
