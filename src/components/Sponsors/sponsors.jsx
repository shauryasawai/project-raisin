import React from 'react';
import { sponsorData } from '@/config/content/Sponsors/sponsors';
import { SponsorWrapper, SponsorContainer, SponsorRow, HalfColumn } from './sponsors.styles';
import { SponsorCategory } from './sponsorCategory';
import { Header } from './Header';

export const SponsorSection = () => {
  return (
    <div
      style={{
        background:
          "url('https://res.cloudinary.com/dpmlrxlzr/image/upload/v1728916828/Random_static_7_tdouie.png'), conic-gradient(from 180deg, #1a1a1a 0%, #1c4953 23%, #1a1a1a 50%, #8e1e78 70%, #1a1a1a 98%)",
      }}
    >
      <Header />
      <SponsorWrapper id='sponsors'>
        <SponsorContainer>
          <SponsorCategory title='Past Sponsors' sponsors={sponsorData.alpha} />
          {/* <SponsorCategory title='Beta Sponsors' sponsors={sponsorData.beta} /> */}
        </SponsorContainer>
      </SponsorWrapper>
    </div>
  );
};
