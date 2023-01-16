import { Card, Grid, Image, Paper, Text, Title } from "@mantine/core";
import React, { Fragment } from "react";
import { BlogContainer } from "./BlogSection.style";
const BlogSection = () => {
  return (
    <Fragment>
      <Paper>
        <BlogContainer>
          <Title align="center">This is a Blog Section</Title>

          <Grid mt={36}>
            <Grid.Col md={6} lg={3} mt={10}>
              <Card shadow="md" p="xl">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  You&apos;ve won a million dollars in cash!
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col md={6} lg={3} mt={10}>
              <Card shadow="md" p="xl">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  You&apos;ve won a million dollars in cash!
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col md={6} lg={3} mt={10}>
              <Card shadow="md" p="xl">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  You&apos;ve won a million dollars in cash!
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
            <Grid.Col md={6} lg={3} mt={10}>
              <Card shadow="md" p="xl">
                <Card.Section>
                  <Image
                    src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                    height={160}
                    alt="No way!"
                  />
                </Card.Section>

                <Text weight={500} size="lg" mt="md">
                  You&apos;ve won a million dollars in cash!
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            </Grid.Col>
          </Grid>
        </BlogContainer>
      </Paper>
    </Fragment>
  );
};

export default BlogSection;
