[Guttersnipe Proposal ](http://gutter-snipe.eu1.frbit.net/docs/CCNYProposal/docs/Proposal/front.html)



<h1>PROPOSAL:  GUTTERSNIPE FAQ</h1>

<dl>
<dt>1. What is the site/app?</dt>
<dd><a href="http://www.guttersnipe.org"> Guttersnipe</a> is a web portal and mobile app that caters to anarcho-communist street youth (and adults) who desire to subvert capitalism by sharing resources.</dd>
<dd>It will enable people to broadcast to each other locations of abandoned properties that can be squatted as well as dumpsters which can be dived for food and other resources.</dd>
<dd>Eventually, other types of resource sharing will be integrated into this product.  A calender will be used to map and schedule Really Really Free Markets and Food Not Bombs meals.   </dd>
<dd>Perhaps ridesharing will also be integrated</dd>
<dd>Perhaps maps of the train system and good times for hopping</dd>
<dd>Further development will require a close study of the writings of Kropotkin and Fourier.<dd>
</dl>

<dl>
<dt>2. What need does this meet? or problem does it solve?</dt>
<dd>This application serves the urgent need to overthrow capitalism by helping people to self-organize outside and beyond the market of commerce.</dd>
<dd>The ultimate intention is to facilitate the creation of alternate avenues of exchange, freely organized by free individuals.</dd>
</dl>

<dl>
<dt>3. Who is going to go/use to this site/app?</dt>
<dd>In the current incarnation, it is mostly aimed towards the freegans gutterpunks, who live off of dumpstered food, live in squatted housing, and travel by hopping trains.</dd>
<dd>As we get a better sense on the needs of the anticapitalist community and possibilities for alternative organizing, we will expand the possibilities for anti-market resource sharing.</dd>
</dl>

<dl>
<dt>4. Why will they go to this site/app?</dt>
<dd>To find food, clothing, shelter, etc.  </dd>
</dl>

<dl>
<dt>5. Why will they keep coming back to your site/app?</dt>
<dd>See above.  </dd>
</dl>

<dl>
<dt>6. How is it different from other similar sites?</dt>
<dd>There are similar sites of various types, but many of them have certain faults.</dd>
<dd>There is a site called rideshare.com; there is a site named couchsurfer.com; there is freecycle.com, which allows the sharing of goods.</dd>
<dd> These are all laudable efforts.  Some of these are marred by an underlying desire for profit.  But some of them are motivated out of genuine desire to promote Mutual Aid.</dd>
<dd>The very mission of Guttersnipe.net will be to promote the organization of the lumpenproletariat and to create alternative exchanges outside of capitalism.  This mission will enable Guttersnipe.net to be singularly focused on this goal.  </dd>
<dd>It will thus be able to bring together whatever resources necessary for the undermining of capitalism:  the various services-- such as squatting, dumpster diving, hitchhiking, train hopping, resource sharing, etc  -- will be coordinated on a singular web portal.</dd>
<dd>In addition, there are several web portals that are dedicated towards the promotion of anarcho-communist goals..  </dd>
<dd> Such sites are 
  <ul>
    <li> <a href="http://www.freegan.info"> Freegan.info</a> </li>
    <li> <a href="http://picturethehomeless.org"> Picture the Homeless </a></li>
    <li> <a href="http://www.squat.net"> Squat.net</a> </li> 
    <li> <a href="http://foodsharing.de/"> Foodsharing (Germany) </a></li>
  </ul>
</dd>
<dd>
Many of our initial design specifications will be taken from the freegan group and Picture the Homeless.  </dd>
<dd>In addition, we intend Guttersnipe to be cross platform, available both via the web and as a mobile app.  To my knowledge, there are not yet any apps dedicated with such a task.  </dd>

<dl>
<dt>7. What steps will a person go through interacting with the site/app?</dt>
<dd>Most of the various interactions will be handled using forms.</dd>
<dd>The various services offered by Guttersnipe all boil essentially boil down to two types of transaction:  
<dd> <ol>
    <li>  information submission; </li>
    <li>  information retrieval.  </li>
    </ol>
</dd>
<dd> One person posts about an abandoned building or a good dumpster; another person searches for such information.  </dd>
<dd>There may be very many different interfaces for the reporting and retrieval.  Some of the data will be entered and retrieved using forms and text inputs; some will be accessed through map interfaces; some will be accessed through calendar interfaces.  </dd>
<dd>In addition, there may be some need for identity management.  Some users may choose to register accounts.  Others may choose to always have singular, anonymous transactions.</dd>
</dl>

<h2>Practical Constraints</h2>
<dl>
<dt>
1. The project should involve some (basic) computation or processing on the server
side and a database/data store.
</dt>
<dd>
Yes.  There is plenty of room for processing.
As stated above, there are quite a number of databases and forms to be set up to account for the various functionalities 
</dd>
<dd>
In addition, we will have to build in a security infrastructure in the project in order to guarantee anonymity of transactions.
</dd>
</dl>
<dl>
<dt>
2. The project should be appropriate for 3-6 people. On the developer sides there
should be significant user and backend functionality for 2-3 full time developers.</dt>
<dd>
Yes.  There is plenty of work to go around.
</dd>
</dl>
<dl>
<dt>
3. You must not recode basic functionality just to create something to work on if
you can use a library. 
</dt>
<dd>
Most certainly, the <a href="https://developers.google.com/maps/"> Google Maps API</a> will be used.  In all likelihood, we will use some open source package to do calendaring.
</dd>
<dd>
 <a href="https://www.torproject.org/"> Tor</a>  will be used to anonymize transactions.
</dd>