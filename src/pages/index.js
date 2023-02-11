import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import SlidesSection from '../sections/slides-section';
import PhotosSection from '../sections/photos-section';
import TeamPhotosSection from '../sections/team-photos';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>

        <Layout>

          <SEO title="Michigan Venture Club" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <TeamPhotosSection />
          <Feature />
          <WorkFlow />
          <PhotosSection />
          <SlidesSection />
          <TeamSection />
          <Subscribe />

        </Layout>

      </StickyProvider>
    </ThemeProvider>
  );
}
