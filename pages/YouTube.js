import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/dist/client/image';

const data = [
  {
    title: 'Java | Official…',
    channel: 'Avatar',
    views: '396 k views',
    createdAt: 'a week ago',
    src: "/images/Group 10.png"
  },
  {
    title: 'python | Official…',
    channel: 'linkdInl',
    views: '40 M views',
    createdAt: '3 years ago',
    src: "/images/Group 11.png"
    
  },
  {
    title: 'PHP | (Official Video)',
    channel: 'jona-c-ochoa@gmail',
    views: '130 M views',
    createdAt: '10 months ago',
    src: "/images/Group 13.png"
  },
  {
    title: 'HTML | Official…  (Official Video)',
    channel: 'Jonaweb',
    views: '1300 M views',
    createdAt: '10 months ago',
    src: "/images/Group 14.png"
  }
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(4)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 470, marginRight: .55, my: 5 }}>
          {item ? (
            <Image
          
                width={270} 
                height={418} 
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}