import type { NextPage } from 'next'
import Script from 'next/script'
import {Page} from "../src/page";
import React from "react";

const Home: NextPage = () => {
  return (
      <Page
          path={"/"}
          banners={[
              "/files/BikeJcHomeSlide1.jpg",
              "/files/BikeJcHomeSlide2.jpg",
              "/files/BikeJcHomeSlide5.jpg",
              "/files/WardTourSticker_website.jpg",
          ]}
      >
          <div className="field field-name-field-page-title field-type-text field-label-hidden field-wrapper">
              Welcome to Bike JC
          </div>
          <div className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
              <p/>
              <h4>Welcome to the official website of Bike JC, Jersey City’s advocacy group for bicyclists!</h4>
              <p/>
              <p>
                  <a href="/events/jersey-city-ward-tour">
                      <strong>
                          PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to
                          bring back our Jersey City Ward Tour and other spring events for 2022, if public health and
                          logistics considerations allow it. We will let you know here and through all our other channels,
                          including social media and email to members. If held, the Ward Tour would be Sunday, June 5
                          (always the first Sunday in June).
                      </strong>
                  </a>
              </p>
          </div>
          <div className="field field-name-field-body-bottom field-type-text-long field-label-hidden field-wrapper">
              <p>
                  Bike JC is a citizen-based non-profit advocacy organization that aims to make Jersey City streets
                  safe and welcoming for bicyclists, by promoting bicycle lane creation, additional bicycle rack
                  placement, education, and group rides.
              </p>
              <p>
                  We are bicyclists, commuters, parents, and advocates for the full potential of Jersey City. We are
                  committed to working with our neighborhoods, schools, and elected officials to make Jersey City the
                  most bike-friendly city in the state. We want to help bicyclists commute, exercise, enjoy scenic
                  rides, ferry children to school and activities, and head out shopping in increasing numbers in the
                  immediate future.
              </p>
              <p>
                  We believe a bike-friendly city is safer for everyone. Studies have shown that the mere presence of
                  more bicyclists (and pedestrians) encourages motorists to drive with more caution and decreases
                  crashes. Bicycle lanes not only tend to increase the number of cyclists but can act as a traffic
                  calming measure, helping pedestrians navigate streets safely as well. Bicycling is also economical,
                  easy on the environment, and transforms the average commute into a great workout.
              </p>
              <p/>
              <div className="center">
                  <img src="/files/light-up-ride-city-hall.jpg"/>
              </div>
          </div>
      </Page>
  )
}

export default Home
