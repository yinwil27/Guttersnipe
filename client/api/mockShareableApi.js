import delay from './delay';
import v4 from 'uuid';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const shareables = [
  {
    "headline" : "Trader Joe's",
    "summary"  : " Dumpster divers from all 4 boroughs have been known to make the trip. On some nights TJs puts out upwards of 6 dumpsters, at least half of which are filled top to bottom with quality food. Sometimes the scene gets weirdly competitive, with dumpster divers seeming to forget that the area is packed with other wasteful stores.Lots of locals count on finding greens and produce in particular. Fewer go thru the bags, which contain health bread, and often assorted packaged health foods, and small amounts of bulk foods (grains, beans, nuts, coffee) that can be gleaned from the not-quite-emptied heavy brown bags.",
    "thing"    : {
      "description_how" : "On the south side of Atlantic Avenue near Court St in big dumpsters.",
      "description_what" : "",
      "main_type": "food",
      "subtypes": [
        "dumpster"
      ],
      "notes": "Be forewarned, the initial reaction of this store’s management was to have the police ticket dumpster divers for trespass or littering"
    },
    "space"    : {
      "longitude" : "-73.99243",
      "latitude": "40.689613",
      "canonical_address": " 130 Court St  Brooklyn, NY 11201",
      "notes": "On the south side of Atlantic Avenue near Court St in big dumpsters."
    },
    "time"    : {
      "notes": "Lately (fall 2012), usually not until about midnight; sometimes earlier.",
      "calendar": {
        "events": [
          {
            "dt_start": "Dec 12 2016 12:00PM",
            "dt_end": "Dec 12 2016 2:00AM",
            "tz_id": "America/New_York",
            "recurrence_rule": {
              "freq": "weekly",
              "byDay": "su,mo,tu,we,th,fr,sa"
            }
          }
        ]
      }
    }
  },
  {
    "headline": "La Bagel Delight",
    "summary": "Plenty of fresh, soft and delicious bagels of all varieties. Some sweets like scones and croissants, and a few sandwiches too",
    "thing": {
      "description_how": "Large black bags out front.",
      "main_type": "food",
      "subtypes": [
        "dumpster"
      ]
    },
    "space": {
      "longitude": "-73.98872",
      "latitude": "40.702392",
      "canonical_address": "104 Front St  Brooklyn, NY 11201"
    },
    "time": {
      "calendar": {
        "events": [
          {
            "dt_start": "Dec 11 2016 10:00PM",
            "dt_end": "Dec 12 2016 2:00AM",
            "tz_id": "America/New_York",
            "recurrence_rule": {
              "freq": "weekly",
              "byDay": "su,mo,tu,we,th,fr"
            }
          }
        ]
      }
    }
  },
   {
    "headline" : "Garden of Eden Gourmet",
    "summary"  : "Messy and hit-or-miss, but can yield a surprising amount of fresh vegetables,  prepared foods, yogurts and so forth. The “compost” bins are well worth digging down a ways, as they’ve yielded lots of whole fruit and veg.",
    "thing"    : {
      "description_how" : "Three dumpsters on the curb plus “compost” mini dumpsters.",
      "main_type": "food",
      "subtypes": [
        "dumpster"
      ]
    },
    "space"    : {
      "longitude" : "40.693922",
      "latitude": "-73.991764",
      "canonical_address": "180 Montague St #1 Brooklyn, NY 11201"
    },
    "time"    : {
      "calendar" : {
        "events": [
          {
            "dt_start": "Dec 11 2016 10:00PM",
            "dt_end": "Dec 12 2016 12:00AM",
            "tz_id": "America/New_York",
            "recurrence_rule" : {
              "freq": "weekly",
              "byDay": "su,mo,tu,we,th,fr,sa"
            }
          }
        ]
      }
    }
  }
];


class ShareableApi {
  static getAllShareables() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], shareables));
      }, delay);
    });
  }

  static saveShareable(shareable) {
    shareable = Object.assign({}, shareable); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minShareableTitleLength = 1;
        if (shareable.title.length < minShareableTitleLength) {
          reject(`Title must be at least ${minShareableTitleLength} characters.`);
        }

        if (shareable.id) {
          const existingShareableIndex = shareables.findIndex(a => a.id == shareable.id);
          shareables.splice(existingShareableIndex, 1, shareable);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new shareables in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          shareable.id = v4();
//          shareable.watchHref = `http://www.pluralsight.com/shareables/${shareable.id}`;
          shareables.push(shareable);
        }

        resolve(shareable);
      }, delay);
    });
  }

  static deleteShareable(shareableId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfShareableToDelete = shareables.findIndex(shareable => {
          shareable.shareableId == shareableId;
        });
        shareables.splice(indexOfShareableToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ShareableApi;