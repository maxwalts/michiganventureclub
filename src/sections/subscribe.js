/** @jsx jsx */
import { useRef, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { Grid, jsx } from 'theme-ui';
import { Container, Flex, Box, Button, Input, Text, Heading, Link } from 'theme-ui';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Subscribe() {

  return (
    <section id="subscribe" >
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Keep up with us!
            </Heading>

            <Text as="p" sx={styles.description}>
              <Link href="https://www.linkedin.com/company/michigan-venture-club/about/" sx={styles.description}>Linkedin</Link>
              {`     `}
              <Link href="https://www.instagram.com/michigan_venture_club/" sx={styles.description}>Instagram</Link>
            </Text>

          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'blue',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
    mt: [8, null, 9, null, null, 10],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
};
