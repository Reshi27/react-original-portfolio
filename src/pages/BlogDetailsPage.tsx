import { Container, Flex, Image, Text, Title } from "@mantine/core";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import blogData from "../components/api/blogDetails.json";
import Header from "../components/common/Header/Header";
const BlogDetailsPage: React.FC = () => {
  const params = useParams();

  const blogDetailsData = blogData.map((data: any) => {
    if (data.id == params.id) {
      return (
        <Fragment>
          <Container>
            <Flex
              direction={{ base: "column" }}
              justify="center"
              align="center"
            >
              <Title align="center" mt={50} size={48}>
                {data.title}
              </Title>
              <Image
                src={data.image}
                width={800}
                height={400}
                sx={{ textAlign: "center" }}
                mt={50}
              ></Image>
              <Text mt={50}>{data.description}</Text>
            </Flex>
          </Container>
        </Fragment>
      );
    } else {
      return null;
    }
  });
  return (
    <Fragment>
      <Header></Header>
      {blogDetailsData}
    </Fragment>
  );
};

export default BlogDetailsPage;
