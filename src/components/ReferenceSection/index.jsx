import React from 'react';
import { GalleryData } from '../../misc/gallery.data';
import GalleryItem from './GalleryItem';
import './styles.css';

const ReferenceSection = () => {
  return (
    <section className='common-sec' id='gallery'>
        <div className='common-container'>
            <h2 className='ref-title text-center'>
                Reference
            </h2>
            <div className="process-container">

            {
                GalleryData.map((item, indx)=>(
                    <GalleryItem key={indx} {...item} />
                    ))
            }
            </div>
            
        </div>
    </section>
  )
}

export default ReferenceSection