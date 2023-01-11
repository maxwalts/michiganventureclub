/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'The First International Venture Club at the University of Michigan',
    title: 'The First International Venture Club at the University of Michigan',
    text:
      'Committed to promoting diversity, equality, and inclusivity, we are proud to introduce the first international venture club at the University of Michigan. Our club welcomes students of all majors, academic levels, nationalities, and races to join us in fostering an inclusive and engaging community.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'VC Research and Investment Team',
    title: 'Expertise in Early-Stage Investment Opportunities',
    text:
      'The Michigan Venture Club specializes in identifying and investing in promising early-stage companies across key industries such as consumer, technology, and healthcare. Our team of experienced investment professionals works closely with leading PE/VC institutions, successful investors, talented entrepreneurs, and active incubators to drive long-term value and economic growth. With over 100 team members and ambitious expansion plans, we are well-positioned to continue identifying and supporting the next generation of successful companies.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Entrepreneurship Projects Incubation',
    title: 'Incubation and Support for Aspiring Entrepreneurs',
    text:
      "At Michigan Venture Club, we are dedicated to helping students turn their entrepreneurial ideas into reality. We provide our members with resources, guidance, and mentorship to assist in the development and launch of their startups. Whether you're in the ideation phase or ready to launch your project, we are here to support you at every stage of your entrepreneurial journey.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Network Across U.S. and China',
    title: 'Connecting Investors Across the United States and China',
    text:
      'As a premier network of venture capitalists, entrepreneurs, and business professionals, Michigan Venture Club is dedicated to fostering connections and investment opportunities between the United States and China. Our members have access to a wide range of resources, including a network of experienced investors, a comprehensive database of potential investors, and a platform for sharing deals and industry best practices. Join us and expand your network and investment opportunities.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.dark' }} id="feature">
      <Container>
        <SectionHeader
          /* slogan="Whats the function"*/
          title="Why MVC?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
