'use client';
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function BioCard({
  text,
  name,
  avatar,
  homepage,
  twitter,
  github,
  role,
}: {
  text: string;
  name: string;
  avatar?: string;
  homepage?: string;
  twitter?: string;
  github?: string;
  role: string;
}) {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar
          src={avatar}
          sx={{ '--Avatar-size': '4rem' }}
        />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          {role}
        </Chip>
        <Typography level="title-lg">{name}</Typography>
        <Typography
          level="body-sm"
          sx={{ maxWidth: '24ch' }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
          height={32}
        >
          {github && (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              component="a"
              href={`https://github.com/${github}`}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {twitter && (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              component="a"
              href={`https://twitter.com/${twitter}`}
            >
              <TwitterIcon />
            </IconButton>
          )}
          {homepage && (
            <IconButton
              size="sm"
              variant="plain"
              color="neutral"
              component="a"
              href={homepage}
            >
              <LanguageIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
