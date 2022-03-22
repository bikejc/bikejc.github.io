import type { NextPage } from 'next'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
      <>
        <meta content="width=device-width, maximum-scale = 1.0" name="viewport"></meta>
        <title>bikejc!</title>
        <Script src="/files/drupal.js"></Script>
        <div className="page home" role="document">
          <header className="l-header" role="banner">
            <div className="contain-to-grid show-for-small">
              <nav className="top-bar" data-options="">
                <ul className="title-area">
                  <li className="name">
                    <h1>
                      <a className="active" href="/" rel="home" title="bikejc Home">bikejc</a>
                    </h1>
                  </li>
                  <li className="toggle-topbar menu-icon">
                    <a href="#">
                      <span>Menu</span>
                    </a>
                  </li>
                </ul>
                <section className="top-bar-section">
                  <ul className="main-nav left" id="main-menu">
                    <li className="first expanded has-dropdown about not-click">
                      <a className="about" href="/about">About</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="first expanded show-for-small">
                          <a className="about" href="/about">About</a>
                        </li>
                        <li className="first leaf history">
                          <a className="history" href="/about/history">History</a>
                        </li>
                        <li className="leaf">
                          <a href="/about/founding">Founding</a>
                        </li>
                        <li className="leaf about board-members">
                          <a className="about board-members" href="/about/board-members">Board Members</a>
                        </li>
                        <li className="last leaf non-profit">
                          <a className="non-profit" href="/about/non-profit-information">Non-Profit Information</a>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded has-dropdown projects not-click">
                      <a className="projects" href="/projects">Projects</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="expanded show-for-small">
                          <a className="projects" href="/projects">Projects</a>
                        </li>
                        <li className="first leaf bike-lanes projects">
                          <a className="bike-lanes projects" href="/projects/bike-lanes">Bike Lanes</a>
                        </li>
                        <li className="leaf projects bike-share">
                          <a className="projects bike-share" href="/projects/bike-share">Bike Share</a>
                        </li>
                        <li className="leaf projects bike-racks">
                          <a className="projects bike-racks" href="/projects/bike-racks">Bike Racks</a>
                        </li>
                        <li className="leaf projects revised-zoning">
                          <a className="projects revised-zoning" href="/projects/revised-zoning">Revised Zoning</a>
                        </li>
                        <li className="last leaf">
                          <a href="/projects/gsv">Grand Street Vision</a>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded has-dropdown events not-click">
                      <a className="events" href="/events">Events</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="expanded show-for-small">
                          <a className="events" href="/events">Events</a>
                        </li>
                        <li className="first expanded has-dropdown ward-tour not-click"
                            title="Jersey City Ward Tour">
                          <a className="ward-tour" href="/events/jersey-city-ward-tour"
                             title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                          <ul className="dropdown">
                            <li className="title back js-generated">
                              <h5>
                                <a href="#">Back</a>
                              </h5>
                            </li>
                            <li className="first expanded show-for-small">
                              <a className="ward-tour" href="/events/jersey-city-ward-tour"
                                 title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                            </li>
                            <li className="first expanded has-dropdown ward-tour not-click"
                                title="Ward Tour Waiver">
                              <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                 title="Ward Tour Waiver">Ward Tour Registration</a>
                              <ul className="dropdown">
                                <li className="title back js-generated">
                                  <h5>
                                    <a href="#">Back</a>
                                  </h5>
                                </li>
                                <li className="first expanded show-for-small">
                                  <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                     title="Ward Tour Waiver">Ward Tour Registration</a>
                                </li>
                                <li className="first leaf">
                                  <a href="/events/jersey-city-ward-tour/ward-tour-registration/15-mile-route-registration-form">15
                                    Mile Route Registration Form</a>
                                </li>
                                <li className="last leaf">
                                  <a href="/events/jersey-city-ward-tour/ward-tour-registration/register-25-mile-ride">25
                                    Mile Route Registration Form</a>
                                </li>
                              </ul>
                            </li>
                            <li className="leaf ward-tour">
                              <a className="ward-tour" href="/ward-tour/volunteer">Volunteer for
                                the Ward Tour</a>
                            </li>
                            <li className="leaf">
                              <a href="/events/jersey-city-ward-tour/ward-tour-route">Ward Tour Route</a>
                            </li>
                            <li className="leaf">
                              <a href="/events/jersey-city-ward-tour/finish-line-festival">Finish Line Festival</a>
                            </li>
                            <li className="leaf">
                              <a href="/events/jersey-city-ward-tour/ward-tour-sponsors">Ward Tour Sponsors</a>
                            </li>
                            <li className="last leaf">
                              <a href="/events/jersey-city-ward-tour/ward-tour-faqs">Ward Tour FAQs</a>
                            </li>
                          </ul>
                        </li>
                        <li className="expanded has-dropdown not-click">
                          <a href="/events/bike-jcast">Bike JCast</a>
                          <ul className="dropdown">
                            <li className="title back js-generated">
                              <h5>
                                <a href="#">Back</a>
                              </h5>
                            </li>
                            <li className="expanded show-for-small">
                              <a href="/events/bike-jcast">Bike JCast</a>
                            </li>
                            <li className="first last leaf">
                              <a href="/events/bike-jcast/bike-jcast-2017">Bike JCast 2017</a>
                            </li>
                          </ul>
                        </li>
                        <li className="leaf">
                          <a href="/events/neighborhood-cleanup">Neighborhood Cleanup</a>
                        </li>
                        <li className="last leaf calendar">
                          <a className="calendar" href="/events/calendar">Calendar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded has-dropdown news not-click">
                      <a className="news" href="/news">News</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="expanded show-for-small">
                          <a className="news" href="/news">News</a>
                        </li>
                        <li className="first expanded has-dropdown articles news not-click">
                          <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                          <ul className="dropdown">
                            <li className="title back js-generated">
                              <h5>
                                <a href="#">Back</a>
                              </h5>
                            </li>
                            <li className="first expanded show-for-small">
                              <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                            </li>
                            <li className="first leaf">
                              <a href="/news/articles/2016-ward-tour-press-release">2016 Ward Tour Press Release</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles-and-press-releases/grand-street-vision-protected-bike-lane-petition">Grand
                                Street Vision - Protected Bike Lane Petition</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles/job-posting-contract-grant-writer">Job Posting: Contract Grant
                                Writer</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles/design-bike-jcs-7th-annual-ward-tour-poster">Design Bike JC's 7th
                                Annual Ward Tour Poster</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles/jersey-citys-first-permanent-bike-lane">Jersey City's First
                                Permanent Bike Lane</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles/installation-jersey-citys-new-bike-racks-underway">New Bike Rack
                                Installation Underway</a>
                            </li>
                            <li className="leaf">
                              <a href="/news/articles/bike-jc-awarded-jersey-city-green-award">Bike JC Awarded 'Jersey
                                City Green Award'</a>
                            </li>
                            <li className="last leaf">
                              <a href="/news/articles/footbridge-liberty-state-park-arrives">Footbridge to Liberty State
                                Park Arrives</a>
                            </li>
                          </ul>
                        </li>
                        <li className="last leaf media-coverage news">
                          <a className="media-coverage news" href="/news/media-coverage">Media Coverage</a>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded has-dropdown support not-click">
                      <a className="support" href="/support">Support</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="expanded show-for-small">
                          <a className="support" href="/support">Support</a>
                        </li>
                        <li className="first leaf sponsors">
                          <a className="sponsors" href="/support/sponsors">Sponsors</a>
                        </li>
                        <li className="leaf">
                          <a href="/support/volunteer">Volunteer</a>
                        </li>
                        <li className="leaf donate">
                          <a className="donate" href="/support/donate">Donate</a>
                        </li>
                        <li className="last leaf merchandise">
                          <a className="merchandise" href="/support/cool-swag-cool-bikers">Cool Swag for Cool Bikers!</a>
                        </li>
                      </ul>
                    </li>
                    <li className="expanded has-dropdown resources not-click">
                      <a className="resources" href="/resources">Resources</a>
                      <ul className="dropdown">
                        <li className="title back js-generated">
                          <h5>
                            <a href="#">Back</a>
                          </h5>
                        </li>
                        <li className="expanded show-for-small">
                          <a className="resources" href="/resources">Resources</a>
                        </li>
                        <li className="first leaf">
                          <a href="/citi-bike-usage-jersey-city-2018">Citi Bike Usage 2018</a>
                        </li>
                        <li className="leaf road-rules">
                          <a className="road-rules" href="/resources/rules-road">Rules of the Road</a>
                        </li>
                        <li className="leaf bike-maps">
                          <a className="bike-maps" href="/resources/bike-maps">Bike Maps</a>
                        </li>
                        <li className="leaf">
                          <a href="/resources/national-bike-registry">National Bike Registry</a>
                        </li>
                        <li className="leaf">
                          <a href="/resources/speed-hump-requests">Speed Hump Requests</a>
                        </li>
                        <li className="leaf">
                          <a href="/resources/bike-racks-businesses">Bike Racks for Businesses</a>
                        </li>
                        <li className="last leaf useful-links">
                          <a className="useful-links" href="/resources/useful-links">Useful Links</a>
                        </li>
                      </ul>
                    </li>
                    <li className="last leaf contact">
                      <a className="contact" href="/contact-us">Contact</a>
                    </li>
                  </ul>
                </section>
              </nav>
            </div>
            <section className="row main-menu-wrapper  hide-for-small">
              <div className="logo-container">
                <a className="active" href="/" rel="home" title="bikejc Home">
                  <img alt="bikejc logo" className="logo" src="/files/logo.png" title="bikejc Home"
                       typeof="foaf:Image"></img>
                </a>
                <div className="element-invisible" id="site-name">
                  <strong>
                    <a href="/" rel="home" title="Home">
                      <span>bikejc</span>
                    </a>
                  </strong>
                </div>
              </div>
              <nav className="navigation" id="main-menu" role="navigation">
                <h2 className="element-invisible">Main menu</h2>
                <ul className="links inline-list clearfix" id="main-menu-links">
                  <li className="menu-398 first">
                    <a className="about" href="/about">About</a>
                  </li>
                  <li className="menu-1045">
                    <a className="projects" href="/projects">Projects</a>
                  </li>
                  <li className="menu-1047">
                    <a className="events" href="/events">Events</a>
                  </li>
                  <li className="menu-1048">
                    <a className="news" href="/news">News</a>
                  </li>
                  <li className="menu-1049">
                    <a className="support" href="/support">Support</a>
                  </li>
                  <li className="menu-1050">
                    <a className="resources" href="/resources">Resources</a>
                  </li>
                  <li className="menu-3531 last">
                    <a className="contact" href="/contact-us">Contact</a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className="l-header-region row">
              <div className="large-12 columns home-splash-image">
                <section className="block block-nivo-slider block-nivo-slider-nivo-slider header">
                  <div className="slider-wrapper theme-light">
                    <div className="ribbon"></div>
                    <div className="nivoSlider" id="slider">
                      <img alt="" className="slide" data-thumb="/files/BikeJcHomeSlide1.jpg" data-transition="" id="slide-0" src="/files/BikeJcHomeSlide1.jpg" title="" typeof="foaf:Image"></img>
                      <img alt="" className="slide" data-thumb="/files/BikeJcHomeSlide2.jpg" data-transition="" id="slide-1" src="/files/BikeJcHomeSlide2.jpg" title="" typeof="foaf:Image"></img>
                      <img alt="" className="slide" data-thumb="/files/BikeJcHomeSlide5.jpg" data-transition="" id="slide-2" src="/files/BikeJcHomeSlide5.jpg" title="" typeof="foaf:Image"></img>
                      <img alt="" className="slide" data-thumb="/files/WardTourSticker_website.jpg" data-transition="" id="slide-3" src="/files/WardTourSticker_website.jpg" title="" typeof="foaf:Image"></img>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </header>
          <main className="row l-main" role="main">
            <div className="large-8 main columns">
              <a id="main-content"></a>
              <article about="/home" className="node node-home-page view-mode-full" id="node-45"
                       typeof="sioc:Item foaf:Document">
                <span className="rdf-meta element-hidden" property="dc:title"></span>
                <span className="rdf-meta element-hidden" datatype="xsd:integer"
                      property="sioc:num_replies"></span>
                <div
                    className="field field-name-field-page-title field-type-text field-label-hidden field-wrapper">Welcome
                  to Bike JC
                </div>
                <div
                    className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body field">
                  <p></p>
                  <h4>Welcome to the official website of Bike JC, Jersey City’s advocacy group for bicyclists!</h4>
                  <p></p>
                  <p>
                    <a href="/events/jersey-city-ward-tour">
                      <strong>PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to
                        bring back our Jersey City Ward Tour and other spring events for 2022, if public health and
                        logistics considerations allow it. We will let you know here and through all our other channels,
                        including social media and email to members. If held, the Ward Tour would be Sunday, June 5
                        (always the first Sunday in June).</strong>
                    </a>
                  </p>
                </div>
                <div className="field field-name-field-body-bottom field-type-text-long field-label-hidden field-wrapper">
                  <p>Bike JC is a citizen-based non-profit advocacy organization that aims to make Jersey City streets
                    safe and welcoming for bicyclists, by promoting bicycle lane creation, additional bicycle rack
                    placement, education, and group rides.</p>
                  <p>We are bicyclists, commuters, parents, and advocates for the full potential of Jersey City. We are
                    committed to working with our neighborhoods, schools, and elected officials to make Jersey City the
                    most bike-friendly city in the state. We want to help bicyclists commute, exercise, enjoy scenic
                    rides, ferry children to school and activities, and head out shopping in increasing numbers in the
                    immediate future.</p>
                  <p>We believe a bike-friendly city is safer for everyone. Studies have shown that the mere presence of
                    more bicyclists (and pedestrians) encourages motorists to drive with more caution and decreases
                    crashes. Bicycle lanes not only tend to increase the number of cyclists but can act as a traffic
                    calming measure, helping pedestrians navigate streets safely as well. Bicycling is also economical,
                    easy on the environment, and transforms the average commute into a great workout.</p>
                  <p></p>
                  <div className="center">
                    <img src="/files/light-up-ride-city-hall.jpg"></img>
                  </div>
                </div>
              </article>
            </div>
            <aside className="large-4 sidebar-second columns sidebar columns" role="complementary">
              <section className="block block-block social-media block-block-6 block-odd clearfix">
                <h2 className="block-title">Follow Us</h2>
                <div>
                  <a className="twitter" href="http://www.twitter.com/bikejc" target="_blank"></a>
                </div>
                <div>
                  <a className="facebook" href="https://www.facebook.com/bikeJC" target="_blank"></a>
                </div>
                <div>
                  <a className="instagram" href="http://www.instagram.com/bikejcgram" target="_blank"></a>
                </div>
              </section>
              <section className="block block-block block-block-13 block-even clearfix">
                <h2 className="block-title">Ward Tour 2022</h2>
                <p>
                  <a href="/events/jersey-city-ward-tour">
                    <strong>PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to
                      bring back our Jersey City Ward Tour and other spring events for 2022, if public health and
                      logistics considerations allow it. We will let you know here and through all our other channels,
                      including social media and email to members. If held, the Ward Tour would be Sunday, June 5 (always
                      the first Sunday in June).</strong>
                  </a>
                </p>
              </section>
              <section className="block block-block block-block-14 block-odd clearfix">
                <h2 className="block-title">Cool Swag!</h2>
                <p></p>
                <p>
                  <a href="/support/cool-swag-cool-bikers">
                    <img src="/files/Retro Banner.jpg"></img>
                  </a>
                  <br></br>
                </p>
                <div className="center">
                  <p>
                    <strong>Support BikeJC's important work through a tax deductible donation and receive cool
                      swag!</strong>
                  </p>
                </div>
              </section>
              <section className="block block-views block-views-recent-articles-block block-even clearfix">
                <h2 className="block-title">News</h2>
                <div
                    className="view view-recent-articles view-id-recent_articles view-display-id-block view-dom-id-acd3cb830a5b1917a9ac85220fb80447">
                  <div className="view-content">
                    <div className="item-list">
                      <ul>
                        <li className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                          <article about="/news/articles/citi-bike-jc-rebalancing"
                                   className="node node-article node-teaser" id="node-77"
                                   typeof="sioc:Item foaf:Document">
                            <h2 className="node-title">
                              <a href="/news/articles/citi-bike-jc-rebalancing">Citi Bike JC Rebalancing</a>
                            </h2>
                            <span className="rdf-meta element-hidden"
                                  property="dc:title"></span>
                            <span className="rdf-meta element-hidden" datatype="xsd:integer"
                                  property="sioc:num_replies"></span>
                            <div
                                className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body text-secondary">
                              <p>Bike JC is very sorry </p>
                            </div>
                            <ul className="links inline">
                              <li className="node-readmore first">
                                <a href="/news/articles/citi-bike-jc-rebalancing" rel="tag"
                                   title="Citi Bike JC Rebalancing">Read more<span className="element-invisible"> about Citi Bike JC Rebalancing</span>
                                </a>
                              </li>
                              <li className="comment_forbidden last">
                              <span>
                                <a href="/user/login?destination=/news/articles/citi-bike-jc-rebalancing%23comment-form">Log in</a> to post comments</span>
                              </li>
                            </ul>
                          </article>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="block block-block donate block-block-8 block-odd clearfix">
                <h4>
                  Donate to Bike JC</h4>
                <a className="button small radius"
                   href="http://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=BMJXSWD8HGWXW">Make a
                  Paypal Donation</a>
              </section>
            </aside>
          </main>
          <section className="l-triptych row">
            <div className="triptych-first large-4 columns">
              <section className="block block-block promo-box first-box block-block-2">
                <h4>
                  Subscribe to Our Mailing List + Monthly Newsletter</h4>
                <div id="mc_embed_signup">
                  <form
                      action="https://bikejc.us1.list-manage.com/subscribe/post?u=29e08864eb550bdd5c90dd362&amp;id=9fce58455b"
                      className="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form"
                      target="_blank">
                    <input className="email" id="mce-EMAIL" name="EMAIL" placeholder="email address"
                           type="email"></input>
                    <div style={{ position: "absolute", left: "-5000px" }}>
                      <input name="b_29e08864eb550bdd5c90dd362_9fce58455b" tabIndex={-1} type="text"></input>
                    </div>
                    <div className="clear">
                      <input className="button" id="mc-embedded-subscribe" name="subscribe" type="submit"
                             value="Subscribe"></input>
                    </div>
                  </form>
                </div>
              </section>
            </div>
            <div className="triptych-middle large-4 columns">
              <section className="block block-block promo-box second-box block-block-3">
                <h4>
                  Follow Bike JC on Twitter</h4>
                <p>Making Jersey City bike-friendly since 2009</p>
                <p>Tweeting bike community news since 2010</p>
                <p>
                  <a href="https://twitter.com/bikejc" target="_blank">Tweet @bikejc!</a>
                </p>
              </section>
            </div>
            <div className="triptych-last large-4 columns">
              <section className="block block-block promo-box third-box block-block-4">
                <h4>
                  We're Now on Instagram</h4>
                <p>Check out our official instagram account</p>
                <p>Show us your photos of biking in JC at #bikejc!</p>
                <p>
                  <a href="https://instagram.com/bikejcgram/" target="_blank">@bikejcgram/</a>
                </p>
              </section>
            </div>
          </section>
          <footer className="l-footer panel row" role="contentinfo">
            <div className="footer large-12 columns">
              <section className="block block-menu-block block-menu-block-2">
                <div className="menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1">
                  <ul className="menu">
                    <li className="first leaf menu-mlid-4368">
                      <a href="/about">about</a>
                    </li>
                    <li className="leaf menu-mlid-4369">
                      <a href="/projects">projects</a>
                    </li>
                    <li className="leaf menu-mlid-4370">
                      <a href="/events">events</a>
                    </li>
                    <li className="leaf menu-mlid-4371">
                      <a href="/news">news</a>
                    </li>
                    <li className="leaf menu-mlid-4372">
                      <a href="/support">support</a>
                    </li>
                    <li className="leaf menu-mlid-4373">
                      <a href="/resources">resources</a>
                    </li>
                    <li className="last leaf menu-mlid-4374">
                      <a href="/contact-us">contact</a>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="block block-block site-info block-block-7">
                <div className="site-credits">
                  site by <a href="http://www.designsprawl.com/" target="blank">design sprawl</a>
                </div>
              </section>
            </div>
            <div className="copyright large-12 columns">
              <span> © 2022 bikejc Information likes to be shared.</span>
            </div>
          </footer>
        </div>
      </>
  )
}

export default Home
