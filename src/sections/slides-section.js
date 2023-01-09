/** @jsx jsx */
import { jsx } from 'theme-ui';
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
          <embed src="/presentations/intro.pdf" width="500" height="375"
            type="application/pdf" />
        </div>

        <div>
          <h1>Fall '22 Training</h1>
          <embed src="/presentations/training-2.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/training-3.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/training-4.pdf" width="500" height="375"
            type="application/pdf" />
          <embed src="/presentations/training-5.pdf" width="500" height="375"
            type="application/pdf" />
        </div>

        <div>
          <h1>Fall '22 Projects</h1>
          <embed src="/presentations/proj-1.pdf" width="500" height="375"
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
            type="application/pdf" />
        </div>




      </Container>

    </section>
  );
}