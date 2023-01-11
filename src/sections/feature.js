/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Investment Companies',
    title: 'Investment Companies',
    text: 'We invite established corporate investors, representatives from investment companies, and entrepreneurs to share their investment experience and insights. We provide internship opportunities for our members through collaboration with these companies. Our existing resources include a family office fund with a scale of more than one billion RMB.'
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Alumni Resources',
    title: 'Alumni Resources',
    text:
      'In Michigan Venture Club, our members can use our built Alumni Resources to connect with other alumni, learn about job opportunities, and get advice on starting their own businesses.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Cross-Campus Collaboration',
    title: 'Cross-Campus Collaboration',
    text:
      'We have partnered with many venture capital clubs at Yale, Columbia, Penn, Cornell, New York University, and other universities across the United States.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.dark' }}>
      <Container>
        <SectionHeader
          /*slogan="Quality features"*/
          title="Our Resources"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
