/** @jsx jsx */
import { jsx } from 'theme-ui';
import { css } from '@emotion/css';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaMailBulk, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function SlidesSection() {
  return (
    <section id='slides' sx={{ variant: 'section.slides' }}>
      <Container>

        <SectionHeader
          title="Slide Decks"
        />
        <div>
          <h1>Fall '22 Introduction</h1>
          <a href="/presentations/intro.pdf">Intro Fall 2022</a>
          {/* <embed src="/presentations/intro.pdf" width="auto" height="auto"
            type="application/pdf" /> */}
        </div>

        <div>
          <h1>Fall '22 Training</h1>
          <a href="/presentations/training-2.pdf">1 - Intro to the Primary market</a>
          <br />
          <a href="/presentations/training-3.pdf">2 - How to do Market Research</a>
          <br />
          <a href="/presentations/training-4.pdf">3 - Deal Sourcing for Venture Capital</a>
          <br />
          <a href="/presentations/training-5.pdf">4 - How to Talk to Investors</a>
          {/* <embed src="/presentations/training-2.pdf" width="auto" height="auto"
            type="application/pdf" /> */}
          {/* <embed src="/presentations/training-3.pdf" width="auto" height="auto"
            type="application/pdf" />
          <embed src="/presentations/training-4.pdf" width="auto" height="auto"
            type="application/pdf" />
          <embed src="/presentations/training-5.pdf" width="auto" height="auto"
            type="application/pdf" /> */}
        </div>

        <div >
          <h1>Fall '22 Projects</h1>
          <a href="/presentations/proj-1.pdf">B2B E-Commerce</a>
          <br />
          <a href="/presentations/proj-2.pdf">Machine Learning</a>
          <br />
          <a href="/presentations/proj-3.pdf">Chinese Food Chains</a>
          <br />
          <a href="/presentations/proj-4.pdf">YieldCo and ESG Investing</a>
          <br />
          <a href="/presentations/proj-5.pdf">Biopharmaceutical - Regeneron Case Study</a>
          <br />
          <a href="/presentations/proj-6.pdf">Web3</a>
          <br />

          {/* <embed src="/presentations/proj-1.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/proj-2.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/proj-3.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/proj-4.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/proj-5.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/proj-6.pdf" width="500" height="375"
            type="application/pdf" /> */}
        </div>




      </Container>

    </section>
  );
}