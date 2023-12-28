import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import BookImage from '../assests/images/book.jpg'
import MovieImage from '../assests/images/movie.jpg'
import DrugImage from '../assests/images/drug.jpg'
import XRayImage from '../assests/images/eray.jpg'
import SparkImage from '../assests/images/spark.jpg'
import TimeImage from '../assests/images/timeseries.jpg'

import { Typography, Container, Grid , Box, Stack} from '@mui/material';

const Projects = () => {


    return (
        <Container sx={{ paddingTop: '80px', paddingBottom: '80px' }} id='projects' xs='auto'>
            <Typography variant="h4" gutterBottom align='Center'>
       My Projects
</Typography>
       <Stack direction="row" spacing={6} justifyContent="center"
  alignItems="center">
     <Card variant="outlined" sx={{ width: 320 }}>     
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={SparkImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Utilized Apache Spark Streaming to ingest and process a continuous stream of tweets from the Twitter API in real-time. Cleanse tweets and extract relevant hashtags using RDD.
        </Typography>
          <Typography level="title-md">Spark Streaming with Twitter API</Typography>

        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/spark_streaming_with_twitter_api">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Personal Project
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
      <Card variant="outlined" sx={{ width: 320 }} >
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={BookImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>

        </CardOverflow>
        

        <CardContent>
        <Typography variant="body2" color="text.secondary">
        A recommendation system is one of the top applications of data science. Every consumer Internet company requires a recommendation system like Netflix, Youtube, a news feed, etc.
        </Typography>
          <Typography level="title-md">Book Recommedation System</Typography>
      </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/Book-Recommendation-System">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary" align='Center'>
              Northeastern University
            </Typography>
          </CardContent>
        </CardOverflow>
        </Card>
        <Card variant="outlined" sx={{ width: 320 }}>     
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={MovieImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Constructed a movie reservation system using a Flask Python API and MySQL database, encompassing various MySQL scripts and a full-fledged Flask Application.
        </Typography>
          <Typography level="title-md">Movie Reservation Database Management</Typography>

        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/Movie-Reservation-System">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Northeastern University
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>


      </Stack>
      &nbsp;

      <Stack direction="row" spacing={6}   justifyContent="center"
  alignItems="center">
          <Card variant="outlined" sx={{ width: 320 }}>     
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={DrugImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Implemented Decision Tree Classification model to recommend drugs based on users’ information and designed a web application using Flask API and deployed it to Microsoft Azure.
        </Typography>
          <Typography level="title-md">Drug Classification,</Typography>

        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/Drug_Classsification">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Northeastern University
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
              <Card variant="outlined" sx={{ width: 320 }}>     
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={XRayImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Performed data augmentation on the medical image datasets and finely tuned the hyperparameters of the model.Exploited TensorFlow framework to build a CNN model
        </Typography>
          <Typography level="title-md">X- Ray Image Classification using CNN,</Typography>

        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/X-Ray-image-classification-using-CNN">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Northeastern University
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
     
 
      <Card variant="outlined" sx={{ width: 320 }}>     
        <CardOverflow>
          <AspectRatio ratio="2">
            <img
              src={TimeImage}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Time series forecasting models are used to project future sales based on past sales trends. These models take into account the seasonality of a product to better predict future.
        </Typography>
          <Typography level="title-md">Sales Forcasting using Time Series</Typography>

        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            <a href="https://github.com/faiz2399/Sales-Forecasting">GitHub</a>
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            Northeastern University
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>

      </Stack>
      </Container>
    );
  }
export default Projects;