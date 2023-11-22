import { Autocomplete, Group, Burger, Text, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconBrain } from '@tabler/icons-react';
import classes from './Header.module.css';

const links = [
  { link: '/Bio', label: 'Bio' },
  { link: '/ML', label: 'ML' },
  { link: '/ComSci', label: 'ComSci' },
  { link: '/community', label: 'Community' },
];

export const Header: React.FC<{}> = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <IconBrain size={45} />
          <Text size="xl" fw={900}> SoftIssue </Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
};
