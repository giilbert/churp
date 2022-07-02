import { Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useQuery } from "../utils/trpc";

const IndexPage: NextPage = () => {
  const query = useQuery(["hello"]);

  return <Text>{query.data?.greeting || "loading"}</Text>;
};

export default IndexPage;
