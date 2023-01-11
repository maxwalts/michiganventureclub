import React, { useState } from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Text,
  Heading,
  Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import TextFeature from 'components/text-feature';
import FeatureThumb from 'assets/ourmission.jpg';

const data = {
  /*subTitle: 'Our Mission',*/
  title: 'Our Mission',
  features: [
    {
      id: 1,
      text:
        'The Michigan Venture Club is a student-led organization that is committed to identifying and investing in early-stage and rapidly-growing companies. Established in 2022, our mission is to empower entrepreneurs by providing them with the resources, support, and mentorship they need to take their ventures to the next level. We offer students hands-on experience in business practice, funding internships, networking opportunities, and financing support, all aimed at fostering their growth and success in the venture capital industry. Our vision is to be a conduit for students to transition seamlessly from campus to the venture capital industry, and a hub for alumni to create connections and opportunities within the industry.',
    }
  ],
};

export default function ServiceSection() {
  return (
    <section sx={{ variant: 'section.light' }}>
      <Container sx={styles.containerBox}>

        <Box sx={styles.contentBox}>
          <TextFeature subTitle={data.subTitle} title={data.title} />

          {data.features.map((item) => (

            <Box sx={styles.wrapper} key={item.id}>
              <Heading sx={styles.wrapper.title}>{item.title}</Heading>
              <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
            </Box>
          ))}
        </Box>

        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
        </Box>

      </Container>
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    pl: [0, 3],
    pt: [0, 9],
    objectFit: 'cover',
    // mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      // position: 'relative',
      zIndex: 1,
      px: 'auto',
      // fixed width and height for image
      // width: [600, 'auto'],
      height: ['auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
