import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './ArticleCard.module.css';

export interface ArticleCardProps {
  title: string;
  category: string;
  image: string;
  author: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = () => (
  <Card withBorder radius="md" p={0} className={classes.card}>
    <Group wrap="nowrap" gap={0}>
      <Image
        src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
        height={160}
      />
      <div className={classes.body}>
        <Text tt="uppercase" c="dimmed" fw={700} size="xs">
          Biology
        </Text>
        <Text className={classes.title} mt="xs" mb="md">
          How to be on time for your DND game
        </Text>
        <Group wrap="nowrap" gap="xs">
          <Group gap="xs" wrap="nowrap">
            <Avatar
              size={20}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            />
            <Text size="xs">Athanasios Theocharis</Text>
          </Group>
          <Text size="xs" c="dimmed">
            •
          </Text>
          <Text size="xs" c="dimmed">
            Feb 6th
          </Text>
        </Group>
      </div>
    </Group>
  </Card>
);
