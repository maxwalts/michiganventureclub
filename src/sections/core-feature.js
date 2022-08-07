/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/core-feature.png';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
 /* subTitle: 'Our Mission',*/
  title: 'Our Mission',
  description:
    'Michigan Venture Club aims to create an organization that connects the campus and the Venture capital industry. It provides students with the help of business practice, fund internship, experience sharing, financing support and other aspects of Venture capital growth. Our vision is to make the club a shortcut for students to grow from campus into the venture capital industry, a cradle for alumni to create opportunities and connections in the venture capital industry. Our existing resources are mainly concentrated in China. The most important resources are the venture capital fund of family office with a scale of more than one billion. From 2008 to now, the overall return is tens of times, and the annual return rate is more than 30%, which involves in consumer, technology, medical and other fields. In addition, we can invite well-known Chinese investors and entrepreneurs to share, and provide internship opportunities for those enterprises. Finally, we have a close relationship with alumni organizations in China, such as the Beijing Alumni Association and the first and second market alumni association, which can better connect the campus and the industry and help Umich alumni network that supplies best design system guidelines ever.',
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
