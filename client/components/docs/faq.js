/**
 * Created by mitchell on 1/30/17.
 */
import React from 'react';

export default (
  <div>
    <div class="RedOnBlack jumbotron">

      <h1>PROPOSAL: GUTTERSNIPE FAQ</h1>
      <ol>
        <li>
          <ul>
            <h2>What is the site/app?</h2>
            <li><a href="http://www.guttersnipe.org"> Guttersnipe</a> is a web portal and mobile app that caters to anarcho-communist street youth (and adults) who desire to subvert capitalism by sharing resources.</li>
            <li>It will enable people to broadcast to each other locations of abandoned properties that can be squatted as well as dumpsters which can be dived for food and other resources.</li>
            <li>Eventually, other types of resource sharing will be integrated into this product.  A calender will be used to map and schedule Really Really Free Markets and Food Not Bombs meals.   </li>
            <li>Perhaps ridesharing will also be integrated</li>
            <li>Perhaps maps of the train system and good times for hopping</li>
            <li>Further development will require a close study of the writings of Kropotkin and Fourier.</li>
          </ul>
        </li>


        <li>
          <ul>
            <h2> What need does this meet? or problem does it solve? </h2>
            <li>This application serves the urgent need to overthrow capitalism by helping people to self-organize outside and beyond the market of commerce.</li>
            <li>The ultimate intention is to facilitate the creation of alternate avenues of exchange, freely organized by free individuals.</li>
          </ul>
        </li>


        <li>
          <ul>
            <h2>Who is going to go/use to this site/app?</h2>
            <li>In the current incarnation, it is mostly aimed towards the freegans gutterpunks, who live off of dumpstered food, live in squatted housing, and travel by hopping trains.</li>
            <li>As we get a better sense on the needs of the anticapitalist community and possibilities for alternative organizing, we will expand the possibilities for anti-market resource sharing.</li>
          </ul>
        </li>

        <li>
          <ul>
            <h2>Why will they go to this site/app?</h2>
            <li>To find food, clothing, shelter, etc.  </li>
          </ul>
        </li>

        <li>
          <ul>
            <h2>Why will they keep coming back to your site/app?</h2>
            <li>See above.  </li>
          </ul>
        </li>

        <li>
          <ul>
            <h2>How is it different from other similar sites?</h2>
            <li>There are similar sites of various types, but many of them have certain faults.</li>
            <li>There is a site called rideshare.com; there is a site named couchsurfer.com; there is freecycle.com, which allows the sharing of goods.</li>
            <li> These are all laudable efforts.  Some of these are marred by an underlying desire for profit.  But some of them are motivated out of genuine desire to promote Mutual Aid.</li>
            <li>The very mission of Guttersnipe.net will be to promote the organization of the lumpenproletariat and to create alternative exchanges outside of capitalism.  This mission will enable Guttersnipe.net to be singularly focused on this goal.  </li>
            <li>It will thus be able to bring together whatever resources necessary for the undermining of capitalism:  the various services-- such as squatting, dumpster diving, hitchhiking, train hopping, resource sharing, etc  -- will be coordinated on a singular web portal.</li>
            <li>In addition, there are several web portals that are dedicated towards the promotion of anarcho-communist goals.  </li>
            <li> Such sites are
              <li>
                <ul>
                  <li> <a href="http://www.freegan.info"> Freegan.info</a> </li>
                  <li> <a href="http://picturethehomeless.org"> Picture the Homeless </a></li>
                  <li> <a href="http://www.squat.net"> Squat.net</a> </li>
                  <li> <a href="http://foodsharing.de/"> Foodsharing (Germany) </a></li>
                </ul>
              </li>
            </li>
          </ul>
        </li>

        <li>
          <ul><h2>Notes</h2>
            <li> Many of our initial design specifications will be taken from the freegan group and Picture the Homeless.  </li>
            <li>In addition, we intend Guttersnipe to be cross platform, available both via the web and as a mobile app.  To my knowledge, there are not yet any apps dedicated with such a task.  </li>
          </ul>
        </li>

        <li>
          <ul>
            <h2>What steps will a person go through interacting with the site/app?</h2>
            <li>Most of the various interactions will be handled using forms.</li>
            <li>The various services offered by Guttersnipe all boil essentially boil down to two types of transaction:
              <li> <ol>
                <li>  information submission; </li>
                <li>  information retrieval.  </li>
              </ol>
              </li>
              <li> One person posts about an abandoned building or a good dumpster; another person searches for such information.  </li>
              <li>There may be very many different interfaces for the reporting and retrieval.  Some of the data will be entered and retrieved using forms and text inputs; some will be accessed through map interfaces; some will be accessed through calendar interfaces.  </li>
              <li>In addition, there may be some need for identity management.  Some users may choose to register accounts.  Others may choose to always have singular, anonymous transactions.</li>
            </li>
          </ul>
        </li>

        <li>
          <h2>Security Concerns</h2>
          <ul>
            <li>
              All non-administrative identities will be temporary
            </li>
            <li>
              We will have to build in a security infrastructure in the project in order to guarantee anonymity of transactions.
            </li>
            <li>
              <a href="https://www.torproject.org/"> Tor</a>  will be used to anonymize transactions.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>

);
