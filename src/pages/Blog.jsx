import React, { useState } from 'react';
import '../styles/Blog.css';
// Import the images for Day 1
import FirstImage from '../assets/1st Day/First.png';
import SecondImage from '../assets/1st Day/Second.png';
// Import the images for Day 2
import ThirdImage from '../assets/2nd Day/a.jpg';
import FourthImage from '../assets/2nd Day/Collage pix.png';
import FifthImage from '../assets/2nd Day/collang.png';
// Import the images for Day 3
import SixthImage from '../assets/3rd Day/Collage.png';
import SeventhImage from '../assets/3rd Day/Col page.png';
import EighthImage from '../assets/3rd Day/collage pics.png';
import NinthImage from '../assets/3rd Day/collage pictures.png';
import TenthImage from '../assets/3rd Day/cars collage.png';
// Import the images for Day 4
import EleventhImage from '../assets/4th Day/hytec.png';
import TwelvethImage from '../assets/4th Day/collage.png';
// Import the images for Day 5
import ThirteenthImage from '../assets/5th Day/MMDA Collage.png';
import FourteenthImage from '../assets/5th Day/Train collage.png';
// Import the images for Day 6
import FifteenthImage from '../assets/6th Day/Strawberry Farm Collage.png';
import SixteenthImage from '../assets/6th Day/Church bell collage.png';
import SeventeenthImage from '../assets/6th Day/Mansion.png';
import EighteenthImage from '../assets/6th Day/Mines-View.png';
import NineteenthImage from '../assets/6th Day/PMA.png';
// Import the images for Day 7
import TwentiethImage from '../assets/7th Day/Burnham Park.png';
import TwentyFirstImage from '../assets/7th Day/BGC.png';
// Import the images for Day 8
import TwentySecondImage from '../assets/8th Day/Going Home.png';
import TwentyThirdImage from '../assets/8th Day/airport.png';
// Import the SectionC image
import SectionCImage from '../assets/SectionC.jpg';

const blogPosts = [
  {
    day: "Day 1",
    title: "Arrival and First Impressions",
    date: "April 7, 2025",
    introText: "Our educational tour officially began with our journey to Manila. Excitement filled the air as we anticipated the adventures ahead",
    sections: [
      {
        image: FirstImage,
        text: "On the first day, I missed the morning tour because my flight to Manila was scheduled for 1:45 PM. Traveling with my classmates, we arrived in Manila around 3 PM. A representative from the DJM agency, assigned to pick us up, was already waiting at the airport. They also provided us with some snacks to refresh after the trip."
      },
      {
        image: SecondImage,
        text: "Later that afternoon, we visited the Mall of Asia, where we spent time walking around, exploring, and buying essentials like sunglasses to protect our eyes from the scorching sun. Afterward, we returned to the DJM agency to check in and drop off our luggage. Around 7 PM, we headed to the hotel to rest. Inside the room, there were at least eleven of us, making it a lively and memorable first night"
      },
      {
        image: null,
        text: "Although our first day was short, it set the tone for the exciting journey that awaited us."
      }
    ]
  },
  {
    day: "Day 2",
    title: "Subic Bay Freeport Zone",
    date: "April 8, 2025",
    introText: "Today, we continue our journey exploring Subic Bay Freeport Zone. From historical exhibitions to important port terminals, the day's adventure gave us a deeper understanding of the area's rich history and operations.",
    sections: [
      {
        image: ThirdImage,
        text: "Our first stop was at the Subic Bay Exhibition and Convention Center. Inside, we were welcomed by a speaker who guided us through a fascinating collection of photographs. Each photo depicted an important piece of Subic Bay’s past, and the speaker explained their historical significance in detail."
      },
      {
        image: FourthImage,
        text: "After exploring the exhibition, we moved on to the second tour of the day at the SBMA Law Enforcement Department. Here, we visited the control room where personnel monitor RFID systems and CCTV cameras that oversee the deeper zones of Subic Bay. It was impressive to see how technology plays such a huge role in maintaining the safety and order of the area. Next, we headed to the Subic Bay Port Terminal. Another speaker shared the history of the terminal, explaining its critical role in supporting maritime trade and travel. We also saw the various ships and operations that keep the port busy every day."
      },
      {
        image: FifthImage,
        text: "At the Subic Bay Port Terminal, we learned about the port operations and the importance of the area for international trade. It was fascinating to see the large ships and the logistics involved."
      },
      {
        image: null,
        text: "Overall, Day 2 was filled with learning and adventure, a perfect blend of history, technology, and exploration. We can't wait to see what Day 3 will bring!"
      }
    ]
  },
  {
    day: "Day 3",
    title: "A Journey Through History, Heritage, and Elegance",
    date: "April 9, 2025",
    introText: "Our third day was filled with remarkable visits to some of the country's most treasured historical sites and collections. We explored the National Museum of Natural History, admired the grandeur of the Quezon Memorial Shrine, and marveled at vintage presidential cars, each telling stories of the Philippines' rich past.",
    sections: [
      {
        image: SixthImage,
        text: ""
      },
      {
        image: SeventhImage,
        text: ""
      },
      {
        image: EighthImage,
        text: "At the National Museum of Natural History, we walked through beautifully designed exhibits showcasing the Philippines' diverse ecosystems, rare species, and natural wonders. The museum’s architecture itself was breathtaking, especially the Tree of Life structure at its core."
      },
      {
        image: NinthImage,
        text: "Next, we visited the Quezon Memorial Shrine, where we learned about the life and legacy of former President Manuel L. Quezon. The towering monument and the museum inside offered deeper insight into his contributions to Philippine history."
      },
      {
        image: TenthImage,
        text: "Finally, we explored a fascinating vintage car exhibit, where we saw historic vehicles used by past Philippine presidents, including a Rolls-Royce Phantom V linked to First Lady Imelda Marcos. The vintage elegance of these cars was a fitting end to a day dedicated to heritage and history"
      },
      {
        image: null,
        text: "Although Day 3 was packed with different stops, each place we visited offered a new perspective on the country's rich culture, leadership, and pride. It was a day that allowed us to appreciate the deep connections between the Philippines' natural beauty, historical achievements, and timeless legacy."
      }
    ]
  },
  {
    day: "Day 4",
    title: "Exploring the World of Finance and Future Technologies",
    date: "April 10, 2025",
    introText: "We were excited to dive into the world of finance and technology on this day, ready to discover how the nation’s economy is secured and how innovation shapes the future. It was a day filled with learning experiences and new perspectives.",
    sections: [
      {
        image: TwelvethImage,
        text: "Our morning began with a guided tour inside the Bangko Sentral ng Pilipinas. Here, we learned about the complex and secure processes behind the production of Philippine money. Due to strict security protocols, phones and cameras were not allowed inside, so we weren't able to capture any pictures during the tour — ensuring the confidentiality and protection of how currency is made.."
      },
      {
        image: EleventhImage,
        text: "In the afternoon, we visited Hytec Power, Inc., a center dedicated to advanced educational training technologies. We explored various machines used for technical skills development, including woodturning, CNC training kits, and precision equipment. It was fascinating to see the intersection of education and innovation up close."
      },
      {
        image: null,
        text: "Although we weren't able to take photos during the morning tour, Day 4 gave us valuable insights into how industries operate, starting from how the nation's currency is managed to how students are prepared for the demands of the future workforce. It was a truly enriching experience that deepened our appreciation for both finance and technology"
      }
    ]
  },
  {
    day: "Day 5",
    title: "Metro Manila: Traffic Control and Train Operations",
    date: "April 11, 2025",
    introText: "On our fifth day, we explored how Metro Manila keeps its busy streets moving and how the city’s transportation systems operate behind the scenes. From traffic management to train operations, the day gave us a closer look at the challenges and solutions in urban mobility.",
    sections: [
      {
        image: ThirteenthImage,
        text: "In the morning, we visited the Metropolitan Manila Development Authority (MMDA). During the tour, we learned about the agency’s important role in setting traffic policies, coordinating road safety programs, and assisting the 17 local government units (LGUs) in creating an integrated regional plan. They also discussed how they manage traffic flow, clear roads, and ensure public safety across the metro."
      },
      {
        image: FourteenthImage,
        text: "In the afternoon, we had the opportunity to experience Metro Manila's train system firsthand. We boarded one of the LRT trains and learned about its operations. The tour also took us behind the scenes to the train depot, where we saw how trains are maintained, repaired, and parked after daily operations. It was an eye-opening experience to understand the level of work and coordination required to keep public transportation running smoothly."
      },
      {
        image: null,
        text: "Day 5 gave us a deeper appreciation of the complex systems that keep Metro Manila moving. It showed us that behind the everyday traffic and public transport rides are hardworking people and organized operations that aim to serve millions of commuters each day."
      }
    ]
  },
  {
    day: "Day 6",
    title: "A Journey to Baguio with Strawberries, Sights, and Cool Mountain Air",
    date: "April 12, 2025",
    introText: "After days of exploring the city and learning about transportation and industries, it was finally time to travel north to Baguio City. Known for its cool climate and scenic views, Baguio welcomed us with a refreshing change of atmosphere and a series of exciting new experiences.",
    sections: [
      {
        image: FifteenthImage,
        text: "Our sixth day started early as we left the dormitory at 1:00 AM for a long journey to Baguio City. After a six-hour ride, we arrived at our first stop, the famous Strawberry Farm in La Trinidad, just as the sun was rising. The cool breeze and fresh atmosphere welcomed us as we explored the farm. We took selfies, captured the beauty of the surroundings, and enjoyed local treats like strawberry taho. Many of us also bought tote bags and souvenirs to remember our visit."
      },
      {
        image: SixteenthImage,
        text: "Our next stop was the Church Bell area, also in La Trinidad. The place offered a calming and peaceful view, perfect for taking photos and appreciating the cool, relaxing weather. After a short visit, we headed to our accommodation, Prince Plaza Hotel, where we checked in and had our lunch."
      },
      {
        image: NineteenthImage,
        text: "In the afternoon, our tour continued with a visit to the Philippine Military Academy (PMA). The wide open spaces, scenic landscapes, and proud military history made the experience truly memorable. We walked around, took pictures, and admired the discipline and order seen throughout the academy."
      },
      {
        image: SeventeenthImage,
        text: "After visiting the PMA, we headed to The Mansion, an elegant historical building in Baguio. The place had a grand and peaceful atmosphere, and we took a group photo as a department in front of its iconic gates. It was a quick but memorable stop that captured another side of Baguio’s rich history."
      },
      {
        image: EighteenthImage,
        text: "Afterwards, we traveled to Mines View Park, one of Baguio's most popular tourist spots known for its breathtaking panoramic views. We spent time roaming around, enjoying the scenery, buying souvenirs, and taking plenty of pictures to capture the beauty of the place. The cool breeze and lively environment made the visit even more enjoyable. After a full day of sightseeing, we returned to the hotel to rest and have dinner."
      },
      {
        image: null,
        text: "Day 6 was a perfect blend of nature, culture, and history. From strawberries to scenic views, it was a day filled with unforgettable experiences that showcased the beauty of Baguio City. We ended the day with happy hearts and full stomachs, excited for what tomorrow would bring."
      }
    ]
  },
  {
    day: "Day 7",
    title: "City Exploration",
    date: "April 13, 2025",
    introText: "Our seventh day was all about exploring the vibrant city of Baguio. We visited Burnham Park, a beautiful green space in the heart of the city, and Bonifacio Global City (BGC), known for its modern architecture and lively atmosphere.",
    sections: [
      {
        image: TwentiethImage,
        text: "We woke up at 7:00 AM and had breakfast at the hotel. Later, we decided to visit Burnham Park to pass the time. While roaming around, I bought some gifts and food to bring back home to Zamboanga. As we continued exploring, we noticed a bike rental area and decided to ride. For only ₱150, we were able to enjoy biking around the park for one hour, which made our morning even more fun and memorable. At 11:30 AM, we returned to the hotel for lunch, preparing for our journey back to Quezon City."
      },
      {
        image: TwentyFirstImage,
        text: "At exactly 12:30 PM, we departed Baguio. After another six-hour ride, we arrived back in Quezon City, at the office of DJM Travel and Tours. I took a shower, ate dinner, and rested for a bit. Later that evening, at around 8:00 PM, we headed to Bonifacio Global City (BGC) to explore. BGC impressed us with its modern design, organized layout, and smart city features. After walking around and enjoying the sights, we returned to the dormitory at 11:30 PM, ending our long but fulfilling day."
      },
      {
        image: null,
        text: "Day 7 was a perfect mix of nature and urban exploration. From the serene beauty of Burnham Park to the modernity of BGC, we experienced the best of both worlds. It was a day filled with laughter, adventure, and unforgettable memories."
      }
    ]
  },
  {
    day: "Day 8",
    title: "Heading Home",
    date: "April 14, 2025",
    introText: "Our journey had finally come to an end. Day 8 was all about preparing to leave Metro Manila and return home, carrying all the memories and experiences we had gathered throughout the trip.",
    sections: [
      {
        image: TwentyThirdImage,
        text: "We woke up early at 4:00 AM to take a shower, pack up our belongings, and get ready for the day. After having breakfast at 5:00 AM, we left the dormitory at 5:30 AM and traveled to the airport. We arrived around 6:20 AM, even though our flight was scheduled for 10:00 AM. Since we were grouped with the first batch of students whose flight was at 8:00 AM, we also proceeded to check-in early. After checking in, we spent some time waiting inside the terminal. While waiting, I bought some snacks at a nearby 7-Eleven to pass the time. After a few hours, it was finally time to board the plane and officially end our educational adventure."
      },
      {
        image: TwentySecondImage,
        text: "Although the trip had ended, the lessons, friendships, and unforgettable moments we experienced would stay with us forever. It was more than just a tour; it was a journey of learning, discovery, and personal growth. As we flew back home, we carried not only souvenirs but also memories that would last a lifetime."
      },
      {
        image: null,
        text: "Our eight-day educational tour was a meaningful journey filled with learning, discovery, and lasting memories. From exploring historical sites to experiencing new environments, each day taught us valuable lessons both inside and outside the classroom. As we return home, we carry not just souvenirs, but new perspectives and unforgettable experiences that will stay with us for a lifetime."
      }
    ]
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCardClick = (post) => {
    setSelectedPost(post);
    // Scroll to the top of the blog-main-image section after a slight delay
    setTimeout(() => {
      const mainImage = document.querySelector('.blog-main-image');
      if (mainImage) {
        mainImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100); // Slight delay to ensure the DOM updates
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog-wrapper">
      <section className="blog-section" id="blog">
        {!selectedPost && (
          <>
            <div className="section-c-container">
              <img src={SectionCImage} alt="Section C" className="section-c-image" />
              <div className="section-c-overlay">
                <div className="section-c-text">
                  <h2 className="section-c-title">Educational Tour Blog</h2>
                  <h3 className="section-c-subtitle">Section C</h3>
                </div>
              </div>
            </div>
          </>
        )}
        {selectedPost ? (
          <div className="blog-detail">
            <div className="blog-main-image">
              <button className="home-back-button" onClick={handleBackClick}></button>
              <div className="split-background">
                <img src={selectedPost.sections[0].image} alt={`${selectedPost.day} Left Image`} className="split-left" />
                <img src={selectedPost.sections[1].image} alt={`${selectedPost.day} Right Image`} className="split-right" />
              </div>
              <div className="diagonal-overlay"></div>
              <div className="text-overlay">
                <h4 className="image-title">{selectedPost.day}: {selectedPost.title}</h4>
                <p className="image-subtitle">Our Journey Begins</p>
              </div>
            </div>
            <div className="blog-content">
              <div className="blog-header">
                <h3>{selectedPost.day}: {selectedPost.title}</h3>
                <p className="blog-date">{selectedPost.date}</p>
              </div>
              {selectedPost.introText && (
                <div className="blog-content-text intro-text">
                  <p>{selectedPost.introText}</p>
                </div>
              )}
              {selectedPost.sections.map((section, index) => (
                <div className="blog-section-container" key={index}>
                  {section.image && (
                    <div className="blog-image-container">
                      <img
                        src={section.image}
                        alt={`${selectedPost.day} Image ${index + 1}`}
                        className="blog-detail-image"
                      />
                    </div>
                  )}
                  {section.text && (
                    <div className="blog-content-text">
                      <p>{section.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div
                className="blog-card"
                key={index}
                onClick={() => handleCardClick(post)}
                style={{ backgroundImage: `url(${post.sections[0].image})` }}
              >
                <div className="blog-card-overlay">
                  <span className="blog-card-day-label"> </span>
                  <h3>{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;