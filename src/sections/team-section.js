/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaMailBulk, FaLinkedinIn } from 'react-icons/fa';

import Member1 from 'assets/team/1.png';
import Member2 from 'assets/team/2.png';
import Member3 from 'assets/team/3.png';
import Member4 from 'assets/team/4.png';
import Member5 from 'assets/team/5.png';
import Member6 from 'assets/team/6.png';
import Member7 from 'assets/team/7.png';
import Member8 from 'assets/team/8.png';
import Member9 from 'assets/team/9.png';
import Member10 from 'assets/team/10.png';
import Member11 from 'assets/team/11.png';
import Member12 from 'assets/team/12.png';
import Member13 from 'assets/team/13.png';
import Member14 from 'assets/team/14.png';
import Member15 from 'assets/team/15.png';
import Member16 from 'assets/team/16.png';
import Member17 from 'assets/team/17.png';
import Member18 from 'assets/team/18.png';
import Member19 from 'assets/team/19.png';
import Member20 from 'assets/team/20.png';
import Member21 from 'assets/team/21.png';
import Member22 from 'assets/team/22.png';
import Member23 from 'assets/team/23.png';
import Member24 from 'assets/team/24.png';
import Member25 from 'assets/team/25.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Nora Huang',
    title: 'Nora Huang',
    designation: 'Co-President',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'yyangg@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/norahuang/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'John Zhang',
    title: 'John Zhang',
    designation: 'Co-President',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'johnzlz@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/lianzheng-zhang',
        icon: <FaLinkedinIn />,
      },

    ],
  },
  {
    id: 3,
    imgSrc: Member4,
    altText: 'Ivy Yuan',
    title: 'Ivy Yuan',
    designation: 'VP of Recruitment',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'ivyyuan@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'http://www.linkedin.com/in/xinyi-yuan-ivy',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member3,
    altText: 'Annie An',
    title: 'Annie An',
    designation: 'VP of Internal Relations',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'ningan@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/ning%EF%BC%88annie%EF%BC%89-an-1619a9219',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Christina Zheng',
    title: 'Christina Zheng',
    designation: 'VP of Professional Development',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'christzh@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/yating-christina-zheng-3b017b1b7',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Feiyang Wang',
    title: 'Feiyang Wang',
    designation: 'VP of External Relations',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'wangfeiy@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/wangfeiyang',
        icon: <FaLinkedinIn />,
      },
    ],
  },

  {
    id: 7,
    imgSrc: Member7,
    altText: 'Leah Chang',
    title: 'Leah Chang',
    designation: 'VP of Operations',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'yuxinch@umich.edu',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/yuxin-leah-chang-802a85195/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 8,
    imgSrc: Member8,
    altText: 'Max Walts',
    title: 'Max Walts',
    designation: 'VP of Technology',
    socialProfile: [
      {
        id: 1,
        name: 'mail',
        path: 'https://mwalts.com/',
        icon: <FaMailBulk />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/max-walts/',
        icon: <FaLinkedinIn />,
      },
    ],
  },
  {
    id: 9,
    imgSrc: Member9,
  },
  {
    id: 10,
    imgSrc: Member10,
  },
  {
    id: 11,
    imgSrc: Member11,
  },
  {
    id: 12,
    imgSrc: Member12,
  },
  {
    id: 13,
    imgSrc: Member13,
  },
  {
    id: 14,
    imgSrc: Member14,
  },
  {
    id: 15,
    imgSrc: Member15,
  },
  {
    id: 16,
    imgSrc: Member16,
  },
  {
    id: 17,
    imgSrc: Member17,
  },
  {
    id: 18,
    imgSrc: Member18,
  },
  {
    id: 19,
    imgSrc: Member19,
  },
  {
    id: 20,
    imgSrc: Member20,
  },
  {
    id: 21,
    imgSrc: Member21,
  },
  {
    id: 22,
    imgSrc: Member22,
  },
  {
    id: 23,
    imgSrc: Member23,
  },
  {
    id: 24,
    imgSrc: Member24,
  },
  {
    id: 25,
    imgSrc: Member25,
  },
  /*{
   id: 8,
   imgSrc: Member8,
   altText: 'Sky Zhang',
   title: 'Sky Zhang',
   designation: 'Manager',
   socialProfile: [
     {
       id: 1,
       name: 'mail',
       path: 'zhenguda@umich.edu',
       icon: <FaMailBulk />,
     },
     {
       id: 2,
       name: 'linkedin',
       path: 'https://www.linkedin.com/in/zhengduanzhang/',
       icon: <FaLinkedinIn />,
     },
   ],
 },*/
];

export default function TeamSection() {
  return (
    <section id="team" sx={{ variant: 'section.team-section' }}>
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
