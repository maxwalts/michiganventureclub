/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import ImageGallery from 'react-image-gallery';



const PHOTO_SET = [
  {
    original: '/photos/1.png',
  },
  {
    original: '/photos/1.jpg',
  },
  {
    original: '/photos/2.png',
  },
  {
    original: '/photos/2.jpg',
  },

  {
    original: '/photos/3.jpg',

  },
  {
    original: '/photos/4.png',

  },
  {
    original: '/photos/4.jpg',

  },
  {
    original: '/photos/5.jpg',

  },
  {
    original: '/photos/6.png',

  },
  {
    original: '/photos/6.jpg',

  },
  {
    original: '/photos/7.png',

  },
  {
    original: '/photos/7.jpg',

  },
  {
    original: '/photos/9.png',

  },
  {
    original: '/photos/10.png',

  },
  {
    original: '/photos/12.png',

  },
  {
    original: '/photos/13.png',

  },
  {
    original: '/photos/14.png',

  },
  {
    original: '/photos/15.png',

  },
  {
    original: '/photos/16.png',

  },
  {
    original: '/photos/17.png',

  },
  {
    original: '/photos/18.png',

  },
  {
    original: '/photos/19.png',

  }

]

export default function PhotosSection() {
  return (
    <section id='photos' sx={{ variant: 'section.photos' }}>
      <SectionHeader
        title="Photos"
      />
      <Container sx={{ variant: 'layout.container' }}>

        <ImageGallery items={PHOTO_SET} />

      </Container>

    </section>
  );
}