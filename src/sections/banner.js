/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Box sx={styles.banner.centered}>
            <Heading as="h1" variant="heroPrimary" >

              Michigan Venture Club
            </Heading>
          </Box>
          <Text as="p" variant="heroSecondary">
            The Michigan Venture Club at the University of Michigan is the premier destination for students who are passionate about startups and venture capital. As a student-led organization, we strive to connect our members with industry professionals and provide them with valuable resources and opportunities to enhance their understanding and skills in the field.<br />
            <br />
            Our offerings include extensive industry research, hands-on deal sourcing experience, and an incubator program for aspiring entrepreneurs. Additionally, we regularly host events and workshops on various topics related to venture capital and entrepreneurship, providing a platform for knowledge-sharing and networking.<br />
            <br />
            Join us, and gain access to the expertise and guidance you need to thrive in the exciting world of venture capital and entrepreneurship. Whether you're seeking to expand your understanding of the industry or ready to launch your own company, Michigan Venture Club is the perfect community to support your journey.
            <br />
          </Text>
        </Box>

        <Box sx={styles.banner.centered}>
          <a href="mailto:mvcumich@gmail.com" >
            <Button variant="primary">Get in Touch</Button>
          </a>
        </Box>

      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      /*  backgroundImage: `url(${ShapeLeft})`,*/
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      /*  backgroundImage: `url(${ShapeRight})`,*/
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    centered: {
      textAlign: 'center',
    },
    container: {
      minHeight: 'inherit',
      display: 'static',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      // width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      width: ['100%'],
      mx: 'auto',
      textAlign: 'left',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
