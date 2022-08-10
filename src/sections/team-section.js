/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import {FaFacebookF,FaTwitter, FaMailBulk, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/1.jpg';
import Member2 from 'assets/team/2.png';
import Member3 from 'assets/team/3.jpg';
import Member4 from 'assets/team/4.jpg';
import Member5 from 'assets/team/5.png';
import Member6 from 'assets/team/6.png';
import Member7 from 'assets/team/7.jpg';
import Member8 from 'assets/team/8.jpg';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Nora Huang',
    title: 'Nora Huang',
    designation: 'Founder & President',
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
    designation: 'Co-Founder & President',
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
    designation: 'Co-Founder & Vice President',
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
    designation: 'Co-Founder & Vice President',
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
    designation: 'Co-Founder & Vice President',
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
    designation: 'Co-Founder & Vice President',
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
    designation: 'Vice President',
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
    designation: 'Vice President of Technology',
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
