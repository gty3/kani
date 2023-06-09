import { makeSource, defineDatabase } from "contentlayer-source-notion"
import { Client } from "@notionhq/client"

const client = new Client({ auth: process.env.NOTION_TOKEN })

const unsafeCharactersRegex = /[ !"#$%&'()*+,/:;<=>?@[\]^`{|}~]/g

export const Post = defineDatabase(() => ({
  name: "Post",
  databaseId: "61df16f586364f84a93c50890dc5fa4f",
  query: {
    filter: {
      property: "Status",
      status: {
        equals: "Done",
      },
    },
  },
  properties: {
    image: {
      name: "Image",
    },
    date: {
      name: "Created time",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._id}`,
    },
  },
}))

export default makeSource({
  client,
  databaseTypes: [Post],
})
