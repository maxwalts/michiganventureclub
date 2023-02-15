/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';

const data = [];
// iterate over directory of team images and push them into data array
for (let i = 1; i <= 51; i++) {
    const member = {
        id: i,
        imgSrc: require(`../assets/team/${i}.png`)
    };
    data.push(member);
}

export default function TeamSection() {
  return (
    <section id="team" sx={{ variant: 'section.dark' }}>
      <Container>
        <SectionHeader
          /*  slogan="our team"*/
          title="Our Team"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
