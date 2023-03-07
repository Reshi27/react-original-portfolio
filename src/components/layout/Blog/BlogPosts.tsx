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
const BlogPosts: React.FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const navigate = useNavigate();
  const blogData = data.map((data: any) => {
    return (
      <Fragment key={data.id}>
        <Grid.Col lg={3} md={4} sm={6}>
          <BlogCard<"a">
            key={data.id}
            theme={dark ? "#474747" : "#d6d6d6"}
            onClick={() => navigate(`/blog/${data.id}`)}
          >
            <BlogCard.Section>
              <Image src={data.image}></Image>
            </BlogCard.Section>

            <Text weight={500} mt="sm">
              {data.title}
            </Text>
            <Text size="sm" lineClamp={6} mt="sm">
              {data.description}
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
