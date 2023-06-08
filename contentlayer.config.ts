import { makeSource, defineDatabase } from "contentlayer-source-notion"
import { Client } from "@notionhq/client"

const client = new Client({ auth: process.env.NOTION_TOKEN })

const unsafeCharactersRegex = /[ !"#$%&'()*+,/:;<=>?@[\]^`{|}~]/g

export const Post = defineDatabase(() => ({
  name: "Post",
  databaseId: "ac9de07d2e7a4929af46a6d6fb81b019",
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
      resolve: (post) => `/posts/${post._id}`,
    },
  },
}))

export default makeSource({
  client,
  databaseTypes: [Post],
})
