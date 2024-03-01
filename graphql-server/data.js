/**
 * 静的データストア
 */

const Users = [
  {
    id: 1,
    name: "John Doe",
    email: "test@example.com",
    posts: [
      {
        id: 1,
        title: "Hello World",
        published: true,
        link: "http://example.com/hello-world",
        author: 1,
      },
      {
        id: 2,
        title: "My Journey",
        published: true,
        link: "http://example.com/my-journey",
        author: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Jane Doe",
    email: "jane@example.com",
    posts: [],
  },
];


export default Users;
