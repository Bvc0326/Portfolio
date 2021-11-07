import React from "react";
import { Grid, Icon } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FormatQuote } from '@material-ui/icons';

import huiImage from '../Images/Hui.jpg';
import davidImage from '../Images/David.jpg';
import shilpaImage from '../Images/Shilpa.jpg'

import Typography from '../common/Typography';

const testimonals = [
    {
        name: 'Hui Li',
        title: 'Lead Frontend Developer',
        image: huiImage,
        description: `We worked together to build the React tech stack, architecture and standards from scratch. 
        Vinay showed excellent React.js skills and great potentials to lead React projects. 
        Moreover, he is a fast learner, amazing executor and very nice helper in the team. 
        There is no doubt that you can trust him on the team work as well as tech challenges!`
    },
    {
        name: 'David Munger',
        title: 'Technical Lead/Solution Architect',
        image: davidImage,
        description: `Vinay is a conscientious and diligent developer. 
        He is easy to get along with and has a real team spirit, but is also not afraid to raise issues when he sees things that need to be addressed. 
        It's been a true pleasure working with him.`
    },
    {
        name: 'Shilpa Ganesan',
        title: 'Manager of Engineering',
        image: shilpaImage,
        description: `Vinay is a dedicated and a detail-oriented person. 
        He is an excellent UI engineer. He was able to stand up a complete UI application in such a short period of time without any loss of quality. 
        A true team player and always a GO To Guy. He would be a real asset to any company.`
    }
]

function Testimonals() {
    return (
        <Carousel
            plugins={['arrows',"infinite"]}
            animationSpeed={1000}
        >
            {
                testimonals.map((item, i) => {
                    return (
                        <Grid 
                            container 
                            justifyContent="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item>
                                <img src={item.image} alt=""/>
                            </Grid>

                            <Grid item>
                                <div style={{ padding: "0 20px"}}>
                                    <FormatQuote color="primary" />
                                    <em>{item.description}</em> 
                                    <FormatQuote color="primary" />
                                </div>
                            </Grid>

                            <Grid item>
                                <strong>{item.name} </strong>
                                <Typography variant="h4">{item.title}</Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Carousel>
    )
}

export default Testimonals;