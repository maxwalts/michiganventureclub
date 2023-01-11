/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';

const data = [
  {
    id: 1,
    title: 'Leadership Team',
    text:
      "The leadership team is comprised of our two presidents and six vice presidents. They are responsible for the overall management and direction of the Michigan Venture Club, ensuring that the club runs smoothly and efficiently, and that all members are able to fully participate and benefit from their experience. The leadership team also serves as a point of contact for communication and updates on the latest news and events for the club's members.",
  },
  {
    id: 2,
    title: 'Research and Investment Team',
    text:
      "The research and investment team is made up of around 10 groups that focus on different industries such as technology, biology, healthcare, consumer, and web3. They are responsible for conducting research on various industries and identifying potential deals that the club can pursue. This team plays a crucial role in keeping the club up-to-date on industry trends and identifying new opportunities for the club's involvement.They work closely with the leadership team to align their research with the club's overall goals and objectives.",
  },
  {
    id: 3,
    title: 'Communications and Operations Team',
    text:
      "The communications and operations team is responsible for managing the club's public relations and internal operations.They work to promote the Michigan Venture Club's activities and events, and ensure that the club runs smoothly. The team includes a VP, several managers, and other members and acts as liaison between club members and department, school and other organizations. "
  },
];

export default function WorkFlow() {
  return (
    <section id="team_constructure" sx={styles.workflow}>
      <Container>
        <SectionHeader

          title="Organizational Structure"
          isWhite={false}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'yellow',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    }
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'black',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'black',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
