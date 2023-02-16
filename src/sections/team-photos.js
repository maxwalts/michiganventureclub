import React from 'react';
import fallImage from '../assets/fall.png';
import winterImage1 from '../assets/winter_1.png';
import winterImage2 from '../assets/winter_2.png';
import winterImage3 from '../assets/winter_3.png';

const TeamPhotosSection = () => {
    return (
      <div>
        <div style={{ textAlign: 'center', width: '100%' }}>
            <h1>22 Fall Team</h1>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', marginBottom: '20px'}}>
                <img
                    src={fallImage}
                    alt="Fall Team"
                    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}/>
            </div>
        
            <div style={{ textAlign: 'center', width: '100%' }}>
                <h1>23 Winter Team</h1>
            </div>

            <div style={{ width: '100%', marginBottom: '20px'}}>
                <img
                    src={winterImage2}
                    alt="Winter Team"
                    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}/>
            </div>

            <div style={{ width: '100%', marginBottom: '20px'}}>
                <img
                    src={winterImage1}
                    alt="Winter Team"
                    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}/>
            </div>

            <div style={{ width: '100%', padding: 0, margin: 0}}>
                <img
                    src={winterImage3}
                    alt="Winter Team"
                    style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }}/>
            </div>

        </div>
      </div>
    );
  };
  
  export default TeamPhotosSection;