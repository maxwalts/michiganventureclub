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
    altText: '1st international venture club at UofM',
    title: '1st international venture club at UofM',
    text:
      'As the first international venture which aims to achieve diversity, equality and inclusiveness, we welcome students from any major, grade, country, race to join us. We are trying to keep our club a wonderful place to join for anyone who is interested in venture capital and entrepreneurship.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'VC Research and Investment Team',
    title: 'VC Research and Investment Team',
    text:
      'Michigan Venture Club is a venture capital club that focuses on early-stage and fast-growing investment chances. We focus on industries such as consumer, technology, health care which can drive long-term value and economic growth. We work closely with key PE/VC institutions, excellent investors, amazing entrepreneurs and active incubators. We have 100+ team members now and aim to grow bigger and faster this year.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Entrepreneurship Projects Incubation',
    title: 'Entrepreneurship Projects Incubation',
    text:
      'Michigan Venture Club helps students connect with investors and raise money for their projects. We work with startups in all stages of development, from ideation to launch. We provide resources, advice, and mentorship to help them grow and succeed.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Network Across U.S. and China',
    title: 'Network Across U.S. and China',
    text:
      'Michigan Venture Club is a network of venture capitalists, entrepreneurs, and business professionals who are committed to investing in and supporting early-stage companies in the United States and China. We provide our members with access to a wide range of resources, including a network of experienced investors, a database of potential investors, and a platform for sharing deals and best practices.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.dark' }} id="feature">
      <Container>
        <SectionHeader
          /* slogan="Whats the function"*/
          title="Our Values"
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
