import {
  Container,
  Grid,
  Image,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React, { Fragment } from "react";
import { BlogCard } from "./BLogPosts.style";
import data from "../../api/blog.json";
import { useNavigate } from "react-router-dom";

interface Props {
  searchResult: string;
}

const BlogPosts: React.FC<Props> = ({ searchResult }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const navigate = useNavigate();
  const blogData = data
    .filter((post) => post.title.toLowerCase().includes(searchResult))
    .map((post: any) => {
      return (
        <Fragment key={post.id}>
          <Grid.Col lg={3} md={4} sm={6}>
            <BlogCard<"a">
              key={post.id}
              theme={dark ? "#474747" : "#d6d6d6"}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <BlogCard.Section>
                <Image src={post.image}></Image>
              </BlogCard.Section>

              <Text weight={500} mt="sm">
                {post.title}
              </Text>
              <Text size="sm" lineClamp={6} mt="sm">
                {post.description}
              </Text>
            </BlogCard>
          </Grid.Col>
        </Fragment>
      );
    });

  return (
    <Fragment>
      <Container>
        <Grid gutter="xl" justify="center" align="center">
          {blogData}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default BlogPosts;
