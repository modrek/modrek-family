import React from 'react';
import './Ads.scss';
import Ad from './Ad';

function Ads() {
    let adslist = <div className="col-2 bg-danger Ads p-2"></div>;
    if (1 == 1) //Authenticate
    {
        let AdsItems = [
            { title: "title1", body: "Advertising quotes based on the use of right words Creative without strategy is called ‘art.’ Creative with strategy is called ‘advertising.", image: "image1.png", url: "url1", type: "type1" },
            { title: "title2", body: "body2", image: "image2.png", url: "url2", type: "type2" },
            { title: "title3", body: "body3", image: "image3.png", url: "url3", type: "type3" },
            { title: "title4", body: "body4", image: "image4.png", url: "url4", type: "type4" },
        ]
        adslist = <div className="col-2 bg-danger Ads p-2">
            {AdsItems.map((ad, index) => {
                return (
                    <Ad key={index} title={ad.title} body={ad.body} image={ad.image} url={ad.url} type={ad.type}></Ad>
                )
            })
            }
        </div>
    }

    return (
        <>
            {adslist}
        </>
    )
}

export default Ads;